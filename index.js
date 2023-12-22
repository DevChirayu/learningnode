var http = require('http');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});
    res.write("Hello World!");
    res.end();

}).listen(8416, function () {
    console.log('Server running at http://127.0.0.1:8416/');
});
