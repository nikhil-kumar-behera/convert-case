const constant = require("../constants/constant");
/**
 * Convert string to camelCase.
 * Transform into a string with the separator denoted by the next word capitalized.
 * @param {String} str
 */
function camelCase(str) {
  return str
    .replace(constant.regex.camelCase, function(word, index) {
      return index === 0 ? word.toLowerCase() : word.toUpperCase();
    })
    .replace(constant.regex.spaceRegEx, constant.char.blank);
}
module.exports = camelCase;
