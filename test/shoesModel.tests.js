//require assert
const assert = require('assert');
const Model = require('../api/models/shoesModel');

describe('store shoes', function() {
    it('should add new shoes to MongoDB', function(done) {
        //connect to MongoDB
        Model('mongodb://localhost/shoesAPI');

        var shoes = Model().shoesData();

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
            done();
        });

        
    //  assert.equal(1,2);
    });
});
