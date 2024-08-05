var path = require("path");
var fs = require("fs");

function reekWire(prodPath, devPath) {
  var env = process.env.NODE_ENV || "development";
  var dev = env === "development" || devPath.indexOf("./") === 0;
  var pth = dev ? devPath : prodPath;
  return function () {
    return require.main.require(pth);
  };
}

function index(config) {
  var exp = {};
  for (var prodPath in config) {
    var devPath = config[prodPath];
    exp[prodPath] = reekWire(prodPath, devPath);
  }
  return exp;
}

function directory(dirname, folder, excludeA) {
  excludeA = excludeA || [];
  dirname = path.join(dirname, folder || "");
  var out = {};
  try {
    fs.readdirSync(dirname).some(function (file) {
      if (!file.match(/\.js$/)) return false;
      if (
        excludeA.some(function (v) {
          return v === file;
        })
      )
        return false;
      out[file.replace(".js", "")] = require(dirname + "\\" + file);
    });
  } catch (e) {}
  return out;
}

module.exports = {
  reekWire: reekWire,
  index: index,
  directory: directory,
};
