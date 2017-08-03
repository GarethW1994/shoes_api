'use strict';
const mongoose = require('mongoose');

module.exports = function(url) {
  //connect to MongoDB
    mongoose.connect(url);

    mongoose.Promise = global.Promise;

    //initialise schema
    const ShoesSchema = mongoose.Schema({
        id: {
            type: Number,
            Required: true
        },
        color: {
            type: String
        },
        brand: {
            type: String
        },
        price: {
            type: Number
        },
        in_stock: {
            type: Number
        },
        size: {
            type: Number
        }
    });

    const Shoes = mongoose.model('Shoes', ShoesSchema);

    return {
        Shoes
    }
}
