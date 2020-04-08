"use strict";

var utils = {};

// matching utils
utils.falsey = require("falsey");

utils.isNumber = require("lodash/isNumber");

// Number utils
utils.isEven = function (number) {
  if (!utils.isNumber(number)) {
    throw new TypeError("Not a number");
  }

  return number % 2 === 0;
};

utils.get = require("lodash/get");
utils.sortBy = require("array-sort");
utils.createFrame = require("create-frame");
utils.getObject = require("get-object");

module.exports = utils;
