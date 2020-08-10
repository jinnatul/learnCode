let eventEmitter = require('events');
let http = require('http');

let myEmitter = new eventEmitter();

myEmitter.on("newSale", () => {
  console.log('There are new sale');
})

myEmitter.on("newSale", () => {
  console.log('This is Morol');
})

myEmitter.emit("newSale");
/*
  There are new sale
  This is Morol
*/

myEmitter.on("newSale", () => {
  console.log('There are new sale');
})

myEmitter.on("newSale", () => {
  console.log('This is Morol');
})

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items`);
})

myEmitter.emit("newSale", 10);
/*
  There are new sale
  This is Morol
  There are now 10 items
*/

class Sales extends eventEmitter {
  constructor() {
    super();
  }
}

myEmitter = new Sales();
myEmitter.on("newSale", () => {
  console.log('There are new sale');
})

myEmitter.on("newSale", () => {
  console.log('This is Morol');
})

myEmitter.on("newSale", (stock) => {
  console.log(`There are now ${stock} items`);
})

myEmitter.emit("newSale", 10);
/*
  There are new sale
  This is Morol
  There are now 10 items
*/


/***** Create server ****/
let server = http.createServer();

server.on("request", (req, res) => {
  console.log("Request receive");
  res.end("Request receive");
})

server.on("request", (req, res) => {
  console.log("Another Request :)");
})

server.on("close", () => {
  res.end("Server closed");
})

server.listen(8000, "127.0.0.1", () => {
  console.log('Waiting for request!!!');
})
/*
  Waiting for request!!!
  Request receive
  Another Request :)
  Request receive
  Another Request :)
*/