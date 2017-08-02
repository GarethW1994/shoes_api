'use strict';

const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var shoesSchema = new Schema({
    id: {
        type: Number,
        Required: true
    },
    color: {
        type: String
    },
    brand: {
        type: String
    }
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

module.exports = mongoose.model('shoes', shoesSchema);
