const chalk = require('chalk');
const error = chalk.bold.red;
const success = chalk.bold.yellow;
const log = console.log;

module.exports = function(Models) {
    //show all the shoes route
    const allShoes = function(req, res, next) {
      Models.Shoes.find({}, function(err, results) {
              if (err) {
                res.json({
                  response: 'Status Failure',
                  error: err,
                  status: 500,
                  data: results
              });
            }
            //send all data to the client
              res.json({
                response: 'Got a GET request for all shoe data',
                status: 200,
                data: {shoes: results}
              })
          });
    };

    //list all the shoes for a given brand route
    const brands = function(req, res, next) {
      log('Hello');
      //save the
        let query = {brand: req.params.brandname};
      //find the shoe in the database
        Models.Shoes.find(query, function(err, results){
          if (err) {
            res.json({
              response: 'Status Failure',
              error: err,
              status: 500,
              data: results
          });
        }
        //send results to client
          res.json({
            response: 'Got a GET request for shoe brands',
            status: 200,
            data: results});
        });
    };

    //list all shoes for a given size route
    const sizes = function(req, res, next) {
        //save the brand size in object
        let query = {size: req.params.size};
        //find the shoe in the database
        Models.Shoes.find(query, function(err, results){
          if (err) {
            res.json({
              response: 'Status Failure',
              error: err,
              status: 500,
              data: results
            });
            return next(err);
          }
          res.json({
            response: "Got a GET request for shoe sizes",
            status: 200,
            data: results
          })
        });
    }

    //list all shoes for a given brand and size route
    const sizeBrand = function(req, res, next) {
          //save the brand name and shoe size in object
          let query = {brand: req.params.brandname, size: req.params.size};
          //find the shoe in the database
          Models.Shoes.find(query, function(err, results){
            if (err) {
              res.json({
                response: 'Status Failure',
                error: err,
                status: 500,
                data: results
              });
              return next(err);
            }
            //send json to client
            res.json({
              response: 'Got a GET query for brand and size',
              status: 200,
              data: results
            });
          });
    }

    //Update the stock levels when a shoe is sold
    const soldUpdate = function(req, res, next) {
        if (req.params.id === undefined) {
          var err = new Error('Not Found');
          err.status = 404;

          res.json({
            error: {
              message: 'Not Found'
            }
          })
        } else {
          //save ID and new stock in object
          let query = {id: req.params.id, in_stock: req.body.in_stock};

          //update the current shoe in the database
          Models.Shoes.update({id: query.id}, {in_stock: query.in_stock}, function(err, results){
            if (err) {
              res.json({
                response: "Status Failure",
                error: err,
                status: 503
              });
              return next(err);
            }
            res.json({
                response: "Shoe Updated",
                id: query.id,
                body: req.body,
                updated: results
            });
          });
        }
    }

    //Add a new shoe route
    const addShoe = function(req, res, next) {
        // check if the body property exits.
        if (!req.body.id) {
          log("There is no body property on the request");
          res.json({
            response: "No body property found",
            status: 503
          });
        } else {
          //new shoe
          let shoe = req.body;

          //save shoe to the database
          Models.Shoes
              .create(shoe, function(err, results) {
                if (err){
                  res.json({
                      response: "Status Failure",
                      error: err,
                      status: 503
                  });
                  return next(err);
                }
                //send updated value to the
                res.json({
                  response: "Added Shoe Successfully",
                  status: 200,
                  data: results
                });
              });
        }
    }

    //return routes
    return {
        allShoes,
        brands,
        sizes,
        sizeBrand,
        soldUpdate,
        addShoe
    }
}
