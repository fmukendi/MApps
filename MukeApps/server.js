
////////////////////////////////////
// PART I - LIBRARIES(Modules)
///////////////////////////////////

//1.1 we need http module to create a server. Http is standard Node.js Library.
var http = require('http');

//1.2 express is a web application framework like webforms  or  asp.net mvc
var express = require('express');

//1.3 work pretty much like classes
var app = express();


///////////////////////////////////////////
// RUN SERVER 
//////////////////////////////////////////

//1.1 Create the server 
var server = http.createServer(function (req, res) {
    
    var body = req.url;
    var html = "<html><body><h1>" + body + "</h1></body></html>";

    console.log(req.url);
    res.write(html);
    res.end();
});

//1.2 Listen to the Server

server.listen(3000);

//C:\LEARN-Code\MukeApps\MukeApps\MukeApps --> right click npm 

/* var http = require('http');
var port = process.env.port || 1337;
http.createServer(function (req, res) {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello World\n');
}).listen(port);
 */