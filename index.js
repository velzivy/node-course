const http = require('http');

const PORT = process.env.PORT || 5000;

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-type': 'text/html; charset=utf-8'
    })
    res.end('<h1>hello world!<button>Click me!</button></h1>')
})
server.listen(PORT, () => {
    console.log(`Сервер запустился на пору ${PORT}`)
})