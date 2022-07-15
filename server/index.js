const rlp = require("roblox-long-polling");
const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");

const app = express();
const Sock = new rlp({
  port: 5000,
});

app.use(bodyParser.json());
app.use(cors());

Sock.on("connection", (connection) => {
  connection.on("fetch_users", (data) => {
    console.log(
      JSON.parse(data).Data.map((user) => {
        return JSON.parse(user);
      })
    );
  });
});

app.use("*", (req, res, next) => {
  res.json({
    Success: true,
  });
});

app.listen(3000, function () {
  console.log(``);
});
