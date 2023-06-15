const {MOVE_UP_KEY, MOVE_DOWN_KEY, MOVE_LEFT_KEY, MOVE_RIGHT_KEY} = require('./constants');

let connection;

const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();

  const handleUserInput = function(data) {
    if (data === '\u0003') {
      process.exit();
    }
    if (data === MOVE_UP_KEY) {
      connection.write('Move: up');
    }
    if (data === MOVE_LEFT_KEY) {
      connection.write('Move: left');
    }
    if (data === MOVE_DOWN_KEY) {
      connection.write('Move: down');
    }
    if (data === MOVE_RIGHT_KEY) {
      connection.write('Move: right');
    }
    if (data === 'm') {
      connection.write('Say: Hello there!');
    }
    if (data === 'j') {
      connection.write('Say: How are you today!');
    }
  };
  
  stdin.on("data", handleUserInput);
  
  return stdin;
};
setupInput();
module.exports = {setupInput};
