const net = require("net");
const { IP, PORT } = require("./constants");

// establishes a connection with the game server
const connect = function() {

  const conn = net.createConnection({
    host: IP,
    port:  PORT
  });

  conn.on("connect", () => {
  // console.log message when the connection is established
    console.log("Connestion established.");
    // send the initials to the server, upon connection
    conn.write("Name: ATZ");
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");
  
  conn.on("data", (data) => {
    console.log("Received data", data);
  });
  
  return conn;
};
// export the connect function using ES6 Shorthand syntax
module.exports = {connect};