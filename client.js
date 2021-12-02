const net = require("net");
const { IP, PORT } = require("./constants");


const connect = function () {
  const conn = net.createConnection({
  //   host: 
  //   port: 50541
  // });
  // interpret incoming data as text
  conn.setEncoding("utf8");

  // writes a confirmation after connection is established
  conn.on('connect', function(){
    console.log("Successfully connected to game server")
  })
// sends name via TCP
  // conn.on('connect', () => {
  //   conn.write("Name: GB");
  // });

  conn.on('connect', () => {
    conn.write("Say: Yerr");
  });

  
  conn.on('data',function(message){
    console.log(message);
  });
  

  return conn;

};



module.exports = {connect};