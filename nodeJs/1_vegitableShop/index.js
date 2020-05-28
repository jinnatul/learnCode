const fs = require('fs');
const http = require('http');
const url = require('url');

// server create
const data = fs.readFileSync(`${__dirname}/files/data.json`, 'utf-8')
const dataObj = JSON.parse(data)

const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName == '/' || pathName == '/overview') {
        res.end('This is overview page')
    }
    else if (pathName == '/product') {
        res.end('This is product page')
    }
    else if (pathName == '/api') {
        res.writeHead(200, {'Content-type': 'application/json'});
        res.end(data)
    }
    else {
        res.writeHead(404, {
            'Content-type': 'text/html',
            'my-own-header': 'hello-world'
        })
        res.end('<h1>Page not found!</h1>')
    }
    
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Server run on 8000 number port')
})