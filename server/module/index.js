const connection = require("./connection");
const body = require("body-parser");
const express = require("express");
const events = require("events");
const uuid = require("uuid").v4;
const cors = require("cors");

const app = express();
const GlobalData = {
  Users: {},
  PlaceInfo: {},
};

const connections = {}; // {socketId: connection}
const stream = new events.EventEmitter();

app.use(body.urlencoded({ extended: true }));
app.use(express.json());
app.use(body.json());
app.use(cors());

function on(event, handler) {
  return stream.on(event, handler);
}

function broadcast(name, message) {
  for (const id of Object.keys(connections)) {
    connections[id].send(name, message);
  }
}

app.post("/connection", async (req, res) => {
  const id = uuid();
  console.log(`Connection attempt with id ${id}`);

  connections[id] = new connection(id, () => {
    delete connections[id];
  });

  stream.emit("connection", connections[id]);
  console.log(connections);
  res.json({
    success: true,
    socketId: id,
  });
});

app.get("/poll/:id", async (req, res) => {
  const id = req.params.id;
  console.log(`Poll attempt with id ${id}`);
  if (connections[id] !== undefined) {
    connections[id]._get(req, res);
  } else {
    res.status(400).json({
      success: false,
      reason: "Not a valid connection",
    });
  }
});

app.post("/poll/:id", async (req, res) => {
  const id = req.params.id;
  console.log(`Poll attempt with id ${id}`);
  if (connections[id] !== undefined) {
    connections[id]._post(req, res);
  } else {
    res.status(400).json({
      success: false,
      reason: "Not a valid connection",
    });
  }
});

app.delete("/connection/:id", async (req, res) => {
  const id = req.params.id;
  console.log(`Disconnect attempt with id ${id}`);
  if (connections[id] !== undefined) {
    connections[id]._disconnect();
  } else {
    res.status(400).json({
      success: false,
      reason: "Not a valid connection",
    });
  }
});

app.get("/fetch_users/:conectionId", (req, res) => {
  res.json(GlobalData["Users"][req.params.conectionId]);
});

app.get("/place_info/:conectionId", (req, res) => {
  let data = GlobalData["PlaceInfo"][req.params.conectionId];
  res.json({
    PlaceId: data.PlaceId,
    Avatar: `https://assetgame.roblox.com/Game/Tools/ThumbnailAsset.ashx?aid=${data.PlaceId}&fmt=png&wd=420&ht=420`,
  });
});

app.get("/list_connections", (req, res) => {
  res.json(
    Object.keys(connections).map((element) => {
      const con = connections[element];
      return { id: con.id, lastPing: con.lastPing };
    })
  );
});

app.post("/send_message", (req, res) => {
  console.log(`Sending message`);
  if (connections[req.body.connectionId]) {
    connections[req.body.connectionId].send(
      "send_message",
      JSON.stringify({
        msg: req.body.message,
      })
    );
    res.json({ success: true });
  } else {
    res.json({
      error: ["Not a valid connection"],
    });
  }
});

app.listen(7000, function (err) {
  console.log("Listening on port 7000");
});

on("connection", (connection) => {
  console.log(`Connection ${connection.id} connected`);
  connection.on("fetch_users", (data) => {
    console.log(data);
    GlobalData["Users"][connection.id] = JSON.parse(data).Data.map((user) => {
      return JSON.parse(user);
    });
  });
  connection.on("initialize", (data) => {
    GlobalData["PlaceInfo"][connection.id] = JSON.parse(data);
  });
});

app.use("*", (req, res) => {
  res.json({ success: false, reason: "Not a valid endpoint" });
});
