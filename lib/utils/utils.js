"use strict";

var utils = {};

// matching utils
const falseyKeywords = [
  "0",
  "false",
  "nada",
  "nil",
  "nay",
  "nah",
  "negative",
  "no",
  "none",
  "nope",
  "nul",
  "null",
  "nix",
  "nyet",
  "uh-uh",
  "veto",
  "zero",
];
utils.falsey = function (val) {
  if (!val) {
    return true;
  }
  if (typeof val !== "string") {
    return false;
  }
  return falseyKeywords.includes(val.toLowerCase());
};

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
utils.createFrame = require("./create-frame");
utils.getObject = require("get-object");

module.exports = utils;
