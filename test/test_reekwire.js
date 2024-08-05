// var assert = require("assert");
// var reekwire = require("../reekwire.js");

// var projectElseWherePath = __dirname + "/myapp_devfolder/myapp.js";
// var localfilePath = "./localApp_asfile.js";

// /* TEST reekwire.reekWire */

// //it("Will load FILE specified in devPath when in 'development' mode (process.env.NODE_ENV).", function () {
// process.env.NODE_ENV = "development";
// var localfile = reekwire.reekWire(require, "localfile", localfilePath)();
// assert(localfile.run() === "localfile", "Not loading local file.");

// //Will load MODULE specified in prodPath when in 'production' mode (process.env.NODE_ENV).", function () {
// process.env.NODE_ENV = "production";
// localfile = reekwire.reekWire(require, "localfileApp", localfilePath)();
// assert(localfile.run() === "localfile", "Should load local file in both development and production.");

// //it("Will load FILE specified in devPath when in 'development' mode (process.env.NODE_ENV).", function () {
// process.env.NODE_ENV = "development";
// var myapp = reekwire.reekWire(require, "myapp", projectElseWherePath)();
// assert(myapp.run() === "Output by Development code.", "Should Output by Development code.");

// //Will load MODULE specified in prodPath when in 'production' mode (process.env.NODE_ENV).", function () {
// process.env.NODE_ENV = "production";
// myapp = reekwire.reekWire(require, "myapp", projectElseWherePath)();
// assert(myapp.run() === "Output by Production code.", "Should Output by Production code.");

// /* TEST reekwire.index */
// var index = { localfile: localfilePath, myapp: projectElseWherePath };

// process.env.NODE_ENV = "development";
// var r = reekwire.index(require, index);
// var myapp = r.myapp();
// var localfile = r.localfile();
// assert(localfile.run() === "localfile", "Not loading local file.");
// assert(myapp.run() === "Output by Development code.", "Should Output by Development code.");

// process.env.NODE_ENV = "production";
// var r = reekwire.index(require, index);
// var myapp = r.myapp();
// assert(localfile.run() === "localfile", "Should load local file in both development and production.");
// assert(myapp.run() === "Output by Production code.", "Should Output by Production code.");

// console.log("End of tests.");
