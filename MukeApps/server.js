
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

//1.0 Server Config

app.get("/", function (req, res) {
    
    var body = "Express";
    var html = "<html><body><h1>" + body + "</h1></body></html>";

    res.send(html);
});


app.get("/api/users", function (req, res) {
    
    
    var obj = {
        name: "Franck",
        isValid: true, 
        group: "Admin"
    };
    
    res.set("Content-Type", "application/json")
    res.send(obj);
});




//1.1 Create the server 

var server = http.createServer(app);

//1.2 Listen to the Server

server.listen(3000);
