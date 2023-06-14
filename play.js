const { log } = require("console");
const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "localhost", // IP address here,
    port:  50541// PORT number here,
  });
  conn.on("connect", () => {
    console.log("Connestion established.");
  });
  conn.on("data", (data) => {
    console.log("Received data", data);
  });
  conn.setEncoding("utf8");

  return conn;
};

console.log("Connecting ...");
connect();