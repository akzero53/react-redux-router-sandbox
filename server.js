var Module = require('module');
var express = require('express');
var app = express();
var fs = require('fs');
var http = require('http');
var querystring = require('querystring');

app.use(express.static('./public'));

var port = process.env.PORT || 8080;
app.listen(port);
