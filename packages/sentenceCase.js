const constant = require("../constants/constant");
/**
 * Convert string to sentenceCase.
 * Transform into a lower case with spaces between words, then capitalize the string.
 * @param {String} str
 */
function sentenceCase(str) {
  return str.toLowerCase().replace(constant.regex.sentenceCase, function(char) {
    return char.toUpperCase();
  });
}
module.exports = sentenceCase;
