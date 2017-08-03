const chalk = require('chalk');
const success = chalk.black.bgWhite;
const portMsg = chalk.red.bgWhite;
const log = console.log;
//require modules
const express = require('express');
//define mongo url
const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/shoesAPI";

const ShoeModel = require('./api/models/shoesModel');
const ShoeRoutes = require('./api/routes/shoesRoutes');


//pass in the mongo url to model
var shoeModel = ShoeModel(mongoURL);

//pass in the model to routes function
var shoesRoutes = ShoeRoutes(shoeModel);

//create express app
var app = express();

///////////////////GET ROUTES///////////////////////

//show all the shoes route
app.get('/api/shoes', shoesRoutes.index);

//list all the shoes for a given brand route
app.get('/api/shoes/brand/:brandname', shoesRoutes.brands);

//list all shoes for a given size route
app.get('/api/shoes/size/:size', shoesRoutes.sizes);

//list all shoes for a given brand and size route
app.get('/api/shoes/brand/:brandname/size/:size', shoesRoutes.sizeBrand);


///////////////////POST ROUTES///////////////////////

//Update the stock levels when a shoe is sold
app.get('/api/shoes/sold/:id/:inStock', shoesRoutes.soldUpdate);

//Add a new shoe route
app.post('/api/shoes', shoesRoutes.addShoe);


//create port
var port = process.env.PORT || 3107;

//port listen function
app.listen(port, function() {
    log(success('Web App running on port: ' + portMsg(port)));
});
