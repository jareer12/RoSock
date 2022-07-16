const connection = require("./connection");
const express = require("express");
const events = require("events");
const helmet = require("helmet");
const uuid = require("uuid").v4;
const cors = require("cors");

const GlobalData = {
  Users: {},
};
const app = express();

connections = {}; // {socketId: connection}
stream = new events.EventEmitter();

app.use(express.json());
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

app.get("/fetch_users", (req, res) => {
  res.json({
    Data: GlobalData,
  });
});

app.get("/list_connections", (req, res) => {
  res.json({
    Data: Object.keys(connections).map((element) => {
      const con = connections[element];
      return { id: con.id, lastPing: con.lastPing };
    }),
  });
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
});
