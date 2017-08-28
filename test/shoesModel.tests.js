//require assert
const assert = require('assert');
const Model = require('../api/models/shoesModel');
//connect to MongoDB
var Models = Model('mongodb://Ninja:$ninja!@ds117093.mlab.com:17093/shoes-api');

describe('store shoes', function() {
   //before it fuction run clear the Database
    beforeEach(function(done) {
        Models.Shoes.find({}, function(err) {
            Models.Shoes.remove({}, function(err) {
                done(err);
            });
        });
    });

    it('should add new shoes to MongoDB', function(done) {
        var newShoe = [{
            id: 200,
            color: 'Red',
            brand: 'Asics',
            price: 350,
            in_stock: 10,
            size: 3
        },
      {
        id: 200,
        color: 'Blue',
        brand: 'Nike',
        price: 599.99,
        in_stock: 30,
        size: 6
      }]

        Models.Shoes
            .create(newShoe, function(err) {
                Models.Shoes.find({}, function(err, shoes){
                  assert.equal(2, shoes.length);
                  done(err);
                });
            });
    });

    it('should return the shoes from MongoDB when queried for a brand', function(done){
      Models.Shoes.find({brand: 'Asics'}, function(err){
          assert.equal(1, shoes.length);
          done(err);
      });
    });
});
