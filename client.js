const net = require("net");


const connect = function () {

  const conn = net.createConnection({
    host: "localhost",
    port:  50541
  });
  conn.on("connect", () => {
    console.log("Connestion established.");
    conn.write("Name: ATZ");
  });
  conn.setEncoding("utf8");
  
  conn.on("data", (data) => {
    console.log("Received data", data);
  });
  

  return conn;
};

module.exports = {connect};