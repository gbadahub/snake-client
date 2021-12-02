let connection;
const setupInput = function (connc) {

  connection = connc;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
  
};

const handleUserInput = function (key) {
  if (key === '\u0003') {
    process.exit();
  
  }else if (key === "w"){
    console.log("Move: up")
  }else if (key === "a"){
    console.log("Move: left")
  }else if (key === "s"){
    console.log("Move: down")
  }else if (key === "d"){
    console.log("Move: right")
  } else {
    console.log ('Not a movement command')
  }
};

// Stores the active TCP connection object.



module.exports = {setupInput};