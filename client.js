const net = require("net");


const connect = function () {
  const conn = net.createConnection({
    host: '165.227.47.243',
    port: 50541
  });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  // writes a confirmation after connection is established
  conn.on('connect', function(){
    console.log("Successfully connected to game server")
  })
// sends name via TCP
  conn.on('connect', () => {
    conn.write("Name: GB");
  });
// moves snakes based on input 
  conn.on('data',() => {
    setInterval(() => {
      conn.write("Move: right")
    }, 50)
  } )
  
  conn.on('data',function(message){
    console.log(message);
  });

  return conn;

};


const setupInput = function () {
  
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
  }
};




module.exports = {connect,setupInput};