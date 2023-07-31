// create web server
// listen to port 3000
// return hello world as response

const http = require('http');
const port = 3000;

const server = http.createServer((req, res) => {
    res.end('hello world\n');
});

server.listen(port, () => {
    console.log(`server running on port ${port}`);
});