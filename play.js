const net = require("net");
const {connect,setupInput} = require("./client")




console.log("Connecting ...");
connect();
setupInput();
