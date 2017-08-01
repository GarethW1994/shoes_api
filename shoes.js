module.exports = function() {

  //create home route
  var index = function(req, res) {
    res.send('Shoe Catalogue API - Home Page');
  };

  //create add shoe route
  var addShoe = function(req, res) {
    res.send('Shoe Catalogue API - Add Shoe Page');
  }

  //return routes
  return {
    index,
    addShoe
  }
}
