//require modules
const express = require('express');
const chalk = require('chalk');
const logger = require('morgan');
const bodyParser = require('body-parser');

//console styling
const success = chalk.black.bgWhite;
const portMsg = chalk.red.bgWhite;
const log = console.log;

//define mongo url
const mongoURL = process.env.MONGO_DB_URL || "mongodb://localhost/shoesAPI";

//require model and routes
const ShoeModel = require('./api/models/shoesModel');
const ShoeRoutes = require('./api/routes/shoesRoutes');

//pass in the mongo url to model
var shoeModel = ShoeModel(mongoURL);

//pass in the model to routes function
var shoesRoutes = ShoeRoutes(shoeModel);

//create express app
const app = express();

//RESPONSE HEADERS
//Grant access to the resources to web browers
//specify what they can and can't do
app.use(function(req, res, next){
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Header", "Origin, X-Requested-With, Content-Type, Accept");

  if (req.method === "OPTIONS") {
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    return res.status(200).json({});
  }
  next();
});


///////////////////GET ROUTES///////////////////////
//root
app.get('/', function(req, res){
    res.json({heading: 'Shoe Catalogue'});
});


//use jsonParser
//app.use(jsonParser().json);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

//use morgon
app.use(logger("dev"));

//show all the shoes route
app.get('/api/shoes', shoesRoutes.allShoes);

//list all the shoes for a given brand route
app.get('/api/shoes/brand/:brandname', shoesRoutes.brands);

//list all shoes for a given size route
app.get('/api/shoes/size/:size', shoesRoutes.sizes);

//list all shoes for a given brand and size route
app.get('/api/shoes/brand/:brandname/size/:size', shoesRoutes.sizeBrand);

///////////////////POST ROUTES///////////////////////

//Update the stock levels when a shoe is sold
app.post('/api/shoes/sold/:id', shoesRoutes.soldUpdate);

//Add a new shoe route
app.post('/api/shoes', shoesRoutes.addShoe);

//Not Found Error Handling
app.use(function(req, res, next){
    var err = new Error('Not Found');
    err.status = 404;
    res.json({
        message: 'Not Found',
        error: err
    });
    next(err);
});

//Error Handling
// app.use(function(err, req, res, next){
//     res.status(err.status || 500);
//     res.json({
//         error: {
//           message: err.message
//         }
//     });
// });

//create port
var port = process.env.PORT || 3107;

//port listen function
app.listen(port, function() {
    log(success('Web App running on port: ' + portMsg(port)));
});
