const constant = require("../constants/constant");
/**
 * Convert string to constantCase.
 * Transform into uppercase with an underscore between words.
 * @param {String} str
 */
function constantCase(str) {
  return str
    .toUpperCase()
    .replace(constant.regex.spaceRegEx, constant.char.underscore);
}
module.exports = constantCase;
