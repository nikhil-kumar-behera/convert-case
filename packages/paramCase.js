const constant = require("../constants/constant");
/**
 * Convert string to paramCase.
 * Transform into lowercase with an hyphen/dashes between words.
 * @param {String} str
 */
function paramCase(str) {
  return str
    .toLowerCase()
    .replace(constant.regex.spaceRegEx, constant.char.hyphen);
}
module.exports = paramCase;
