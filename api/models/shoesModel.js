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
            Required: true,
            unique: true
        },
        image: {
          type: 'String',
          default: 'http://www.freeiconspng.com/uploads/no-image-icon-15.png'
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
          },
        sold_out: {
          type: Boolean,
          default: false
        }
    });

    ShoesSchema.index({id: 1}, {unique: true});

    const Shoes = mongoose.model('Shoes', ShoesSchema);

    return {
        Shoes
    }
}
