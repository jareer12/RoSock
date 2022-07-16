const connection = require("./connection");
const express = require("express");
const events = require("events");
const helmet = require("helmet");
const uuid = require("uuid").v4;

class RobloxWebSocket {
  constructor() {
    const app = express();

    this.connections = {}; // {socketId: connection}
    this.stream = new events.EventEmitter();

    app.use(express.json());
    app.use(helmet());

    app.post("/connection", async (req, res) => {
      const id = uuid();
      console.log(`Connection attempt with id ${id}`);

      this.connections[id] = new connection(id, () => {
        delete connections[id];
      });

      this.stream.emit("connection", this.connections[id]);
      console.log(this.connections);
      res.json({
        success: true,
        socketId: id,
      });
    });

    app.get("/poll/:id", async (req, res) => {
      const id = req.params.id;
      //   console.log(`Poll attempt with id ${id}`);
      if (this.connections[id] !== undefined) {
        this.connections[id]._get(req, res);
      } else {
        res.status(400).json({
          success: false,
          reason: "Not a valid connection",
        });
      }
    });

    app.post("/poll/:id", async (req, res) => {
      const id = req.params.id;
      //   console.log(`Poll attempt with id ${id}`);
      if (this.connections[id] !== undefined) {
        this.connections[id]._post(req, res);
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
      if (this.connections[id] !== undefined) {
        this.connections[id]._disconnect();
      } else {
        res.status(400).json({
          success: false,
          reason: "Not a valid connection",
        });
      }
    });

    app.listen(7000, function (err) {
      console.log("Listening on port 7000");
    });
  }

  on(event, handler) {
    return this.stream.on(event, handler);
  }

  broadcast(name, message) {
    for (const id of Object.keys(this.connections)) {
      this.connections[id].send(name, message);
    }
  }
}

const Sock = new RobloxWebSocket();
Sock.on("connection", (connection) => {
  console.log(`Connection ${connection.id} connected`);
  connection.on("fetch_users", (data) => {
    console.log(
      JSON.parse(data).Data.map((user) => {
        return JSON.parse(user);
      })
    );
  });
});

module.exports = Sock;
