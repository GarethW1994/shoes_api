//require modules
const express = require('express');

//create express app
var app = express();

//require shoes.js function
var Shoes = require('./shoes.js');

//create root route
app.get('/', Shoes().index);


//create add shoe route
app.get('/addShoe', Shoes().addShoe);


//create port
var port = 3107;

//port listen function
app.listen(port, function() {
  console.log('Web App running on port: ' + port);
});
