//require assert
const assert = require('assert');
const Model = require('../api/models/shoesModel');
//connect to MongoDB
var Models = Model('mongodb://Ninja:$ninja!@ds117093.mlab.com:17093/shoes-api');

describe('store shoes', function() {
    it('should add new shoes to MongoDB', function(done) {
      //before it fuction run clear the Database
       beforeEach(function(done) {
           Models.Shoes.find({}, function(err) {
               Models.Shoes.remove({}, function(err) {
                   done(err);
               });
           });
       });

        var newShoe = {
            id: 200,
            color: 'Red',
            brand: 'Asics',
            price: 350,
            in_stock: 10,
            size: 3
        }

        Models.Shoes
            .create(newShoe, function(err) {
                Models.Shoes.find({}, function(err, shoes){
                  assert.equal(1, shoes.length);
                  done(err);
                });
            });
    });

    it('should return the shoes from MongoDB when queried for a brand', function(done){
      Models.Shoes.find({brand: 'Asics'}, function(err, shoes){
          assert.equal(1, shoes.length);
          done(err);
      });
    });

    it('should return the shoes from MongoDB when queried for a size', function(done){
      Models.Shoes.find({size: 3}, function(err, shoes){
          assert.equal(1, shoes.length);
          done(err);
      });
    });

    it('should return the shoe from MongoDB when queried for a size and brand', function(done){
      Models.Shoes.find({brand: 'Asics', size: 3}, function(err){
          assert.equal(1, shoes.length);
          done(err);
      });
    });

    it('should update the stock of a shoe in MongoDB', function(done) {
      Models.Shoes.update({id: 200}, {in_stock: 5}, function(err, shoes){
          assert.equal(5, shoes.stock);
          done(err);
      });
    })
});
