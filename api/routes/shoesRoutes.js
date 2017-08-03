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
        //let brandname = req.params.brandname;
        //let size = Number(req.params.size);

        let brandSizeFilter = [];

        // shoes.find(function(shoes) {
        //     if (shoes.brand === brandname && shoes.size === size) {
        //         brandSizeFilter.push(shoes);
        //     }
        // });

        res.send(brandSizeFilter);
    }

    //Update the stock levels when a shoe is sold
    var soldUpdate = function(req, res) {
        //let id = Number(req.params.id);
        //let newStock = Number(req.params.inStock);

        // shoes.find(function(shoes) {
        //     if (shoes.id === id) {
        //         shoes.in_stock = newStock;
        //     }
        // });

        res.send("update");
    }

    //Add a new shoe route
    var addShoe = function(req, res) {
        //add a new shoe
        // let newShoe = {
        //     id: Number(req.params.id),
        //     color: req.params.color,
        //     brand: req.params.brand,
        //     price: Number(req.params.price),
        //     in_stock: Number(req.params.in_stock),
        //     size: Number(req.params.size)
        // }

      //  shoes.push(newShoe);

        //redirect to the home route
        //res.send(shoes);
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
