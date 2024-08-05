var path = require("path");
var fs = require("fs");

function reekWire(requireFn, prodPath, devPath) {
  var env = process.env.NODE_ENV || "development";

  var pth = env === "development" ? devPath : prodPath;
  return function () {
    return requireFn(pth);
  };
}

function index(requireFn, config) {
  var exp = {};
  for (var prodPath in config) {
    exp[prodPath] = reekWire(requireFn, prodPath, config[prodPath]); // config[prodPath] = development path
  }
  return exp;
}

module.exports = {
  reekWire: reekWire,
  index: index,
  indexReekwire: index,
};
