//require assert
const assert = require('assert');
const Model = require('../api/models/shoesModel');

describe('store shoes', function() {
    //connect to MongoDB
    var Models = Model('mongodb://localhost/shoesAPI' || 'mongodb://Ninja:$ninja!@ds117093.mlab.com:17093/shoes-api');

   //before it fuction run clear the Database
    beforeEach(function(done) {
        Models.Shoes.find({}, function(err) {
            Models.Shoes.remove({}, function(err) {
                done(err);
            });
        });
    });

    it('should add new shoes to MongoDB', function(done) {
        var newShoe = {
            id: 200,
            color: 'red',
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
});
