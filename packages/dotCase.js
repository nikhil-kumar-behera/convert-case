const constant = require("../constants/constant");
/**
 * Convert string to dotCase.
 * Transform into lowercase with an dot/period between words.
 * @param {String} str
 */
function dotCase(str) {
  return str
    .toLowerCase()
    .replace(constant.regex.spaceRegEx, constant.char.dot);
}
module.exports = dotCase;
