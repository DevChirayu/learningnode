var http = require('http');
const fs = require('fs');

http.createServer(function (req, res) {
    res.writeHead(200, {'Content-Type' : 'text/html'});

    // File System Integrated
    fs.readFile('./welcome.html',(err, data)=>{
        if(err) throw err;
        res.write(data);
        res.write("Hello World!");
        res.end();
    });
    

}).listen(8416, function () {
    console.log('Server running at http://127.0.0.1:8416/');
});
