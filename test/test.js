var assert = require("assert");
var reekwire = require("./../reekwire.js");
var reekwire = reekwire.reekWire;

describe("reekwire", function () {
  describe("reek", function () {
    var sameRequire = function () {
      return reekwire(require, "titleize", "./titleize.js")();
    };

    it("Will load FILE specified in devPath when in 'development' mode (process.env.NODE_ENV).", function () {
      process.env.NODE_ENV = "development";

      var titleize = sameRequire();
      var title = titleize("two words");
      assert(title === "Two Words Done Locally");
    });

    return;
    it("Will load MODULE specified in prodPath when in 'production' mode (process.env.NODE_ENV).", function () {
      process.env.NODE_ENV = "production";

      var titleize = sameRequire();
      var title = titleize("two words");
      assert(title === "Two Words");

      process.env.NODE_ENV = "development";
    });

    it("Can load local module.", function () {
      process.env.NODE_ENV = "development";

      var localfileApp_2 = reekwire(require, "handler", "A:\\Decimal\\rNode\\handler\\")();
      console.log("\n\n\nlocalfileApp_2", localfileApp_2);
      assert(localfileApp_2.run() === "module", "Not loading module.");
    });
  });

  describe("indexReekwire", function () {
    return;
    it("Returns an index (hash) of functions that return the corresponding require.", function () {
      var requires = {
        localfileApp: "./localfileApp.js",
        otherlocalfileApp: "./otherlocalfileApp.js",
      };

      process.env.NODE_ENV = "development";

      var index = indexReekwire(require, requires);
      assert("localfileApp" in index && "otherlocalfileApp" in index, "Function not added.");
    });

    it("Works in 'development'.", function () {
      var requires = {
        localfileApp: "./localfileApp.js",
        otherlocalfileApp: "./otherlocalfileApp.js",
      };

      process.env.NODE_ENV = "development";

      var index = indexReekwire(require, requires);
      assert(index.localfileApp().run() == "localfile", "Not loading local file.");
      assert(index.otherlocalfileApp().run() == "localfile", "Not loading local file.");
    });

    it("Works in 'production'.", function () {
      var requires = {
        localfileApp: "./localfileApp.js",
        otherlocalfileApp: "./otherlocalfileApp.js",
      };

      process.env.NODE_ENV = "production";

      /* this would replace your typical series of 'require' at top of file. */
      var indexP = indexReekwire(require, requires);
      var localfileApp = indexP.localfileApp();
      var otherlocalfileApp = indexP.otherlocalfileApp();

      assert(localfileApp.run() == "module", "Not loading module.");
      assert(otherlocalfileApp.run() == "module", "Not loading module.");

      process.env.NODE_ENV = "development";
    });
  });
});
