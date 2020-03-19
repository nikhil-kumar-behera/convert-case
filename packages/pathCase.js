const constant = require("../constants/constant");
/**
 * Convert string to pathCase.
 * Transform into lowercase with an slashes between words.
 * @param {String} str
 */
function pathCase(str) {
  return str
    .toLowerCase()
    .replace(constant.regex.spaceRegEx, constant.char.slash);
}
module.exports = pathCase;
