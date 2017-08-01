//require modules
const express = require('express');

//create express app
var app = express();


//create root route
app.get('/', function(req, res) {
  res.send('Shoe Catalogue API');
});

//create port
var port = 3107;

//port listen function
app.listen(port, function() {
  console.log('Web App running on port: ' + port);
});
