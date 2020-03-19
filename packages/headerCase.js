const constant = require("../constants/constant");
/**
 * Convert string to headerCase.
 * Transform into a dash separated string of capitalized words.
 * @param {String} str
 */
function headerCase(str) {
  return str
    .replace(constant.regex.camelCase, function(word, index) {
      return word.toUpperCase();
    })
    .replace(constant.regex.spaceRegEx, constant.char.hyphen);
}
module.exports = headerCase;
