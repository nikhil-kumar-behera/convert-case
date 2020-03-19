const constant = require("../constants/constant");
/**
 * Convert string to snakeCase.
 * Transform into lowercase with an underscore between words.
 * @param {String} str
 */
function snakeCase(str) {
  return str
    .toLowerCase()
    .replace(constant.regex.spaceRegEx, constant.char.underscore);
}
module.exports = snakeCase;
