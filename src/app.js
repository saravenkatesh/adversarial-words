const path = require('path');
var express = require('express');
var http = require('http');
var app = express();

app.use(express.static(path.join(__dirname, 'public')));

http.createServer(app).listen(3000);
