"use strict";

require("mocha");
var assert = require("assert");
var hbs = require("handlebars").create();
const moment =  require("moment");
const sinon = require("sinon");

var helpers = require("..");
helpers.date({ handlebars: hbs });

describe("date", function() {
  describe("isodate", function () {

    beforeEach(function() {
      this.clock = date => sinon.useFakeTimers(new Date(date));
      this.clock('2020-02-02');
    });

    it("should return empty string for invalid method name", function () {
      var fn = hbs.compile("{{isodate \"invalid\"}}");
      assert.equal(fn(), "");
    });

    it("should return the current iso date", function () {
      var fn = hbs.compile("{{isodate \"now\"}}");
      assert.equal(fn(), moment().toISOString());
    });

    it("should return today's date", function () {
      var fn = hbs.compile("{{isodate \"today\"}}");

      assert.equal(fn(), moment()
        .startOf("day")
        .toISOString());
    });

    it("should add the days", function () {
      var fn = hbs.compile("{{isodate \"add\" 2}}");

      assert.equal(fn(),  moment()
        .add(2, "days")
        .toISOString());
    });

    it("should subtract the days", function () {
      var fn = hbs.compile("{{isodate \"subtract\" 2}}");

      assert.equal(fn(), moment()
        .subtract(2, "days")
        .toISOString());
    });

    it("should format date", function () {
      var fn = hbs.compile("{{formatdate '2022-02-01T00:00:00.000+11:00' 'YYYY-MM-DD'}}");

      assert.equal(fn(), '2022-02-01');
    });

    it("should format date when combined with isodate", function () {
      var fn = hbs.compile("{{formatdate (isodate 'today') 'YYYY-MM-DD'}}");

      assert.equal(fn(), moment()
        .startOf("day")
        .format('YYYY-MM-DD'));
    });
  });
})