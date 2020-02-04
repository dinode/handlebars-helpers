"use strict";

var utils = {};

// matching utils
utils.falsey = require("falsey");

utils.isNumber = require("lodash/isNumber");

// Number utils
utils.isEven = function (number){
  if(!utils.isNumber(number)){
    throw new TypeError("Not a number");
  }

  return number % 2 === 0;
};

module.exports = utils;
