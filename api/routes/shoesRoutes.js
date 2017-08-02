module.exports = function(model) {

  var shoes = model;


  console.log(shoes.shoesData());

    //show all the shoes route
    const index = function(req, res, next) {
      res.send(shoes.shoesData());
        // shoes.find({}, function(err, shoesData) {
        //     if (err) {
        //         return next(err);
        //     }
        //     //display all the shoes
        //     res.send(shoesData);
        // });
    };

    //list all the shoes for a given brand route
    var brands = function(req, res) {
        //search for shoes by brand
      //  let brand = req.params.brandname;

        let brandsFilter = [];

        //find the shoe by brand
        // shoes.find(function(shoes) {
        //     if (shoes.brand === brand) {
        //         brandsFilter.push(shoes);
        //     }
        //});

        res.send(brandsFilter);
    };

    //list all shoes for a given size route
    var sizes = function(req, res) {
        //let size = Number(req.params.size);

        let sizesFilter = [];

        //find the shoe by size
        // shoes.find(function(shoes) {
        //     if (shoes.size === size) {
        //         sizesFilter.push(shoes);
        //     }
        // });

        res.send(sizesFilter);
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
