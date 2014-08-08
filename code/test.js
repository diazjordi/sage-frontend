/**
 * Created by jd5582 on 8/7/14.
 */

//Create Web server

var http = require('http');


http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Hello World! I am fucking confused!');
}).listen(8080);

console.log('Server running at http://localhost:8080/');