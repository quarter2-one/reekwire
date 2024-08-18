module.exports = reekwire;

var path = require("path");

/**
 *
 * @param {string} prodPath
 * @param {string} devPath
 * @returns
 */
function reekwire(prodPath, devPath) {
  var env = process.env.NODE_ENV || "development";
  var pth = env.trim() === "development" ? getDevPath(devPath) : prodPath;
  return require.main.require(pth);
}
reekwire.index = index;

function index(configA) {
  var exp = {},
    l = configA.length;
  while (l--) {
    exp[configA[l][0]] = (function (i) {
      return function () {
        return reekwire(configA[i][1], configA[i][2]);
      };
    })(l);
  }
  return exp;
}

function getDevPath(devPath) {
  return devPath[0] === "." ? path.normalize(path.dirname(require.main.filename) + "/" + devPath) : devPath;
}
