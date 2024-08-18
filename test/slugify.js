var slugify = require("voca/slugify");

module.exports = function slug(words) {
  return slugify(words);
};
