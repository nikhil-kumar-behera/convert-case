const constant = require("../constants/constant");
/**
 * Convert string to pascalCase.
 * Transform into a string of capitalized words without separators.
 * @param {String} str
 */
function pascalCase(str) {
  return str
    .replace(constant.regex.camelCase, function(word) {
      return word.toUpperCase();
    })
    .replace(constant.regex.spaceRegEx, constant.char.blank);
}
module.exports = pascalCase;
