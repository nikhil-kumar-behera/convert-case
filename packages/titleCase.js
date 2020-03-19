const constant = require("../constants/constant");
/**
 * Convert string to titleCase.
 * Transform a string into title case following English rules.
 * @param {String} str
 */
function titleCase(str) {
  return str.replace(constant.regex.titleRegEx, function(txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}
module.exports = titleCase;
