const chalk = require('chalk');
const error = chalk.bold.red;
const success = chalk.bold.yellow;
const log = console.log;

module.exports = function(Models) {

    //show all the shoes route
    const index = function(req, res, next) {
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
                data: results
              })
          });
    };

    //list all the shoes for a given brand route
    var brands = function(req, res, next) {
      //save the
        let query = {brand: req.params.brand};
      //find the shoe in the database
        Models.Shoes.find(shoe, function(err, results){
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
    var sizes = function(req, res) {
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
    var sizeBrand = function(req, res) {
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
    var soldUpdate = function(req, res) {
        if (!req.body) {
          log("No body property found!");
        } else {
          //save ID
          let id = req.params.id;

          res.json({
            reponse: "Update POST made",
            shoeID: req.params.id,
            body: req.body
          });
        }
        //Models.Shoes.update(shoe, {in_stock: new_stock});
        //res.redirect('/api/shoes');
    }

    //Add a new shoe route
    var addShoe = function(req, res, next) {
        // check if the body property exits.
        if (req.body) {
          log("Successfully found new shoe" + req.body);
        } else {
          log("There is no body property on the request");
        }

        res.json({
              response: 'Added New Shoes',
              body: req.body
        });
        //
        // Models.Shoes
        //   .create(newShoe, function(err, results){
        //     if (err) {
        //       return next(err);
        //     }
        //     res.redirect('/api/shoes');
        //   });
    }

    //return routes
    return {
        index,
        brands,
        sizes,
        sizeBrand,
        soldUpdate,
        addShoe
    }
}
