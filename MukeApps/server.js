
////////////////////////////////////
// PART I - LIBRARIES(Modules)
///////////////////////////////////

//1.1 we need http module to create a server. Http is standard Node.js Library.
var http = require('http');

//1.2 express is a web application framework like webforms  or  asp.net mvc
var express = require('express');

//1.3 work pretty much like classes
var app = express();

//1.4 set the view engine

app.set("view engine", "vash");// expect a folder call views 


///////////////////////////////////////////
// RUN SERVER 
//////////////////////////////////////////

//1.1 Server Config

app.get("/", function (req, res) {
    
    res.render("index", { title : "Express + Vash" });
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




//1.2 Create the server 

var server = http.createServer(app);

//1.3 Listen to the Server

server.listen(3000);
