const fs = require('fs');
const server = require('http').createServer();

server.on("request", (req, res) => {

  // solution --> 1
  fs.readFile("test.txt", (err, data) => {
    if (err) console.log(err);
    res.end(data);
  })

  const readAble = fs.createReadStream("test.txt"); // (2 & 3 depend on this)

  // solution --> 2
  readAble.on("data", chunk => {
    res.write(chunk);
  })
  readAble.on("end", () => {
    res.end();
  })
  readAble.on("error", (err) => {
    console.log(err);
    res.statusCode = 500;
    res.end("File not found");
  })
  
  // solution --> 3
  readAble.pipe(res)
})

server.listen(8000, "127.0.0.1", () => {
  console.log('Streaming data...');
})