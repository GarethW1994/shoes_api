const chalk = require('chalk');
const error = chalk.bold.red;
const success = chalk.bold.yellow;
const log = console.log;

module.exports = function(Models) {

    //show all the shoes route
    const index = function(req, res, next) {
          Models.Shoes.find({}, function(err, shoes) {
              if (err) {
                return next(err);
              }
              res.send(shoes);
          });
    };

    //list all the shoes for a given brand route
    var brands = function(req, res, next) {
      let shoe = {
          brand: req.params.brandname
        }

        Models.Shoes.find(shoe, function(err, results){
          if (err) {
            return next(err);
          }
          res.send(results);
        });
    };

    //list all shoes for a given size route
    var sizes = function(req, res) {
        let shoe = {
          size: req.params.size
        }

        Models.Shoes.find(shoe, function(err, results){
          if (err) {
            return next(err);
          }
          res.send(results);
        });
    }

    //list all shoes for a given brand and size route
    var sizeBrand = function(req, res) {
        let shoe = {
          brand: req.params.brandname,
          size: req.params.size
        }

        Models.Shoes.find(shoe, function(err, results){
          if (err) {
            return next(err);
          }
          res.send(results);
        })
    }

    //Update the stock levels when a shoe is sold
    var soldUpdate = function(req, res) {
        let shoe = {
          id: Number(req.params.id)
        }

        let new_stock = Number(req.params.inStock);

        Models.Shoes.update(shoe, {in_stock: new_stock});

        res.redirect('/api/shoes');
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
