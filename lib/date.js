"use strict";
const moment =  require("moment");
let helpers = module.exports;

helpers.isodate = function(method, days){
  switch (method) {
    case "now":
      return moment().toISOString();
    case "today":
      return moment()
        .startOf("day")
        .toISOString();
    case "add":
      return moment()
        .add(days, "days")
        .toISOString();
    case "subtract":
      return moment()
        .subtract(days, "days")
        .toISOString();
    default:
      return "";
  }
}
