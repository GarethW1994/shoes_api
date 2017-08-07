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
            type: String,
            default: 'Black'
        },
        brand: {
            type: String,
            default: 'Abi'
        },
        price: {
            type: Number,
            default: 0.00
        },
        in_stock: {
            type: Number,
            default: 0
        },
        size: {
            type: Number,
            default: 0
           }
    });

    const Shoes = mongoose.model('Shoes', ShoesSchema);

    return {
        Shoes
    }
}
