// Create web server
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var fs = require('fs');

// set port number
app.listen(3000, function(){
  console.log("start! express server on port 3000");
});

// set static directory path
app.use(express.static('public'));

// set body-parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:true}));

// set view engine
app.set('view engine', 'ejs');

// set router

  