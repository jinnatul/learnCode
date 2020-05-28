// server create
const server = http.createServer((req, res) => {
    res.end('Hello Morol from server')
})

server.listen(8000, '127.0.0.1', () => {
    console.log('Server run on 8000 number port')
})