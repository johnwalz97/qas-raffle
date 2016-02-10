//Setup modules
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var mongoose = require('mongoose');

//Setup app
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "./client")));
app.set('views', path.join(__dirname, './client'));
app.set('view engine', 'ejs');

//Include db model
require('./server/config/mongoose.js');

//Routes
var routes_setter = require("./server/config/routes.js");
routes_setter(app);

//Server
app.listen(80, function() {
    console.log("listening on port 80");
})