//require modules
const express = require('express');
//create express app
var app = express();

//require shoes.js function
var Shoes = require('./shoes.js');

///////////////////GET ROUTES///////////////////////

//show all the shoes route
app.get('/api/shoes', Shoes().index);

//list all the shoes for a given brand route
app.get('/api/shoes/brand/:brandname', Shoes().brands);

//list all shoes for a given size route
app.get('/api/shoes/size/:size', Shoes().sizes);

//list all shoes for a given brand and size route
app.get('/api/shoes/brand/:brandname/size/:size', Shoes().sizeBrand);


///////////////////POST ROUTES///////////////////////

//Update the stock levels when a shoe is sold
app.post('/api/shoes/sold/:id', Shoes().soldUpdate);

//Add a new shoe route
app.post('/api/shoes', Shoes().addShoe);


//create port
var port = 3107;

//port listen function
app.listen(port, function() {
  console.log('Web App running on port: ' + port);
});
