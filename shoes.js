module.exports = function() {
  //create shoes object

  //show all the shoes route
  var index = function(req, res) {
    //display all the shoes
    res.send('Shoe Catalogue API - All The Shoes');
  };

  //list all the shoes for a given brand route
  var brands = function(req, res) {
    res.send('Shoe Catalogue API - Brands Filter');
  }

  //list all shoes for a given size route
  var sizes = function(req, res) {
    res.send('Shoe Catalogue API - Sizes Filter');
  }

  //list all shoes for a given brand and size route
  var sizeBrand = function(req, res) {
    res.send('Shoe Catalogue API - Size and Brand Filter');
  }

  //Update the stock levels when a shoe is sold
  var soldUpdate = function(req, res) {
    res.send('Shoe Catalogue API - Update Sold Shoe');
  }

  //Add a new shoe route
  var addShoe = function(req, res) {
    //add a new shoe

    //redirect to the home route
    res.send('Shoe Catalogue API - Add Shoe Page');
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
