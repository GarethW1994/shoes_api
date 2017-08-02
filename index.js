//require modules
const express = require('express');
//create express app
var app = express();

//define mongo url
var mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/shoesAPI";

//call mongo function
var Model = require('./api/models/shoesModel');
Model(mongoURL);

//require shoes.js function
var Shoes = require('./api/routes/shoesRoutes');

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
app.get('/api/shoes/sold/:id/:inStock', Shoes().soldUpdate);

//Add a new shoe route
app.get('/api/shoes/:id/:color/:brand/:price/:in_stock/:size', Shoes().addShoe);


//create port
var port = process.env.PORT || 3107;

//port listen function
app.listen(port, function() {
  console.log('Web App running on port: ' + port);
});
