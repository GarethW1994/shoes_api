//require assert
const assert = require('assert');
const Model = require('../api/models/shoesModel');

describe('store shoes', function() {
    //connect to MongoDB
    Model('mongodb://localhost/shoesAPI');

    var shoes = Model().shoesData();

    //before it fuction run clear the Database
    beforeEach(function(done) {
        shoes.find({}, function(err) {
            shoes.remove({}, function(err) {
                done(err);
            });
        });
    });


    it('should add new shoes to MongoDB', function(done) {


        //console.log(models.shoes);

        var newShoe = {
            id: 200,
            color: 'red',
            brand: 'Asics',
            price: 350,
            in_stock: 10,
            size: 3
        }

        shoes
            .create(newShoe, function(err) {
                shoes.find({}, function(err, shoesCatalogue){
                  console.log(shoesCatalogue.length);
                  assert.equal(1, shoesCatalogue.length);
                  done(err);
                });
            });
        //  assert.equal(1,2);
    });
});
