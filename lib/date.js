"use strict";
let helpers = module.exports;
// Hack: https://github.com/palantir/blueprint/issues/959#issuecomment-335965129
let moment = require("moment");
const momentTZ = require('moment-timezone')
if ("default" in moment) {
    moment = moment["default"];
}

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

helpers.formatdate = function (date, format, timezone) {
  return typeof timezone === 'string'
      ? momentTZ(date).tz(timezone).format(format)
      : moment(date).format(format);
}
