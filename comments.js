// create web server
// listen to port 3000
// return hello world as response
const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello world from the server!');
});

server.listen(3000, '');