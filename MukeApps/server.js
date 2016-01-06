
////////////////////////////////////
// PART I - LIBRARIES(Modules)
///////////////////////////////////

//1.1 we need http module to create a server. Http is standard Node.js Library.
var http = require('http');

//1.2 express is a web application framework like webforms  or  asp.net mvc
var express = require('express');

//1.3 work pretty much like classes
var app = express();

//1.4 controllers

var controllers = require('./controllers'); // work like classes and will inglobe all the js file in that folder


////////////////////////////////////
// PART II - CONFIGURATION
///////////////////////////////////

//1.1 set the view engine

app.set("view engine", "vash");// expect a folder call views 







///////////////////////////////////////////
// PART III RUN SERVER 
//////////////////////////////////////////

//1.1 Server Config

app.get("/", function (req, res) {
    
    res.render("index", { title : "Express + Vash" });
});

//1.2 Create the server 

var server = http.createServer(app);

//1.3 Listen to the Server

server.listen(3000);
