const fs = require('fs');
const http = require('http');
const url = require('url');

// server create
const server = http.createServer((req, res) => {
    const pathName = req.url;
    if (pathName == '/' || pathName == '/overview') {
        res.end('This is overview page')
    }
    else if (pathName == '/product') {
        res.end('This is product page')
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