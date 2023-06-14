const net = require("net");


const connect = function () {

  const conn = net.createConnection({
    host: "localhost", 
    port:  50541
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

module.exports = {connect};