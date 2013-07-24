#!/usr/bin/env node

var fs = require('fs');

var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
  response.send('Hello World!');
});

var bensfile = fs.readFileSync("index.html");

console.log("Bens test fiel=" + bensfile);
var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
