var rk = require("../reekwire");
var tasteTest = require("taste-test");
var taste = new tasteTest.Test();
var assert = require("assert");

taste.describe({
  reekwire: {
    "Import package directly.": function (next) {
      var slugg = rk("voca/slugify", "./slugify.js");

      assert(slugg("Slugs have souls."), "slugs-have-souls");
      next();
    },
  },
  index: {
    "Import using index.": function (next) {
      var r = rk.index([
        ["slugify", "voca/slugify", "./slugify.js"],
        ["taste", "taste-test", "./mock-taste-test.js"],
      ]);
      var slugg = r.slugify();
      var tasteTest = r.taste();

      assert(slugg("Slugs have souls.") === "slugs-have-souls");
      assert("Test" in tasteTest);

      next();
    },
  },
});
