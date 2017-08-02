'use strict';

const mongoose = require('mongoose');
const mongoConnect = require('../db/mongoConnect');

module.exports = function (url) {
  //connect to database
  mongoConnect(url);

  //initialise schema
  var Schema = mongoose.Schema;

	const shoesData = function () {
    //create schema
    const shoesSchema = new Schema({
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

		//declare the unique values
    //make id property unique to avoid duplication
    shoesSchema.index({id: 1}, {unique: true});

    //export mongoose model
    var shoes = mongoose.model('shoes', shoesSchema);

		return shoes;
	}

	return {
		shoesData,
	};
}
