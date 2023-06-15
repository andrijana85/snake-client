const net = require("net");
const { IP, PORT } = require("./constants");

const connect = function() {

  const conn = net.createConnection({
    host: IP,
    port:  PORT
  });
  conn.on("connect", () => {
    console.log("Connestion established.");
    conn.write("Name: ATZ");

    let index = 0;

    const moves = ["Move: up", "Move: up","Move: up","Move: up"];

    const interval = setInterval(() => {
      if (index < moves.length) {
        conn.write(moves[index]);
        index ++;
      } else {
        clearInterval(interval);
      }
    }, 50);
  });

  conn.setEncoding("utf8");
  
  conn.on("data", (data) => {
    console.log("Received data", data);
  });
  
  return conn;
};
const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  const handleUserInput = function(data) {
    if (data === '\u0003') {
      process.exit();
    }
  };
  stdin.on("data", handleUserInput);
  
  return stdin;
};
setupInput();
module.exports = {connect};