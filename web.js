#!/usr/bin/env node

var fs = require('fs');

var express = require('express');
var app = express();
app.use(express.logger());


var bensfilebuf = fs.readFileSync("index.html");
app.get('/', function(request, response) {
  response.send( bensfilebuf.toString() ) ;        //  'Hello World!');
});

//var bensfile = fs.readFileSync("index.html"); 
//var buffer = new Buffer(bensfile),"utf-8");

console.log("Bens test fiel=" + bensfilebuf);
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
