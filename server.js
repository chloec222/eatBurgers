// ===========npm dependencies=============
var express = require('express');
var bodyParser = require('body-parser');

// ===========telling node we are creating express server=============
var app = express();

// ===========setting up environment with default localhost port=============
var PORT = process.env.PORT || 8080;

// ===========serving static CSS=============
app.use('/static', express.static(path.join(__dirname + "/app/public")));