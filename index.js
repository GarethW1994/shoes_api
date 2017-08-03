const chalk = require('chalk');
const success = chalk.black.bgWhite;
const portMsg = chalk.red.bgWhite;
const log = console.log;
//require modules
const express = require('express');
//define mongo url
const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/shoesAPI";

//require model and routes
const mongoConnect = require('./api/db/mongoConnect');

//connect to database
var db = mongoConnect(mongoURL);

const Model = require('./api/models/shoesModel');
const Shoes = require('./api/routes/shoesRoutes');


//pass in the mongo url to model
var Models = Model(mongoURL);

var Models = Models.shoesData();

//pass in the model to routes function
var shoesRoutes = Shoes(Models, db);

//create express app
var app = express();


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
var port = process.env.PORT || 3107;

//port listen function
app.listen(port, function() {
    log(success('Web App running on port: ' + portMsg(port)));
});
