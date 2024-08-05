var titleizeModule = require("titleize");
module.exports = function titleize(words) {
  return titleizeModule(words) + " Done Locally";
};
