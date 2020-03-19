const constant = require("../constants/constant");
/**
 * Convert string to swapCase.
 * Transform a string by swapping every character from upper to lower case, or lower to upper case.
 * @param {String} str
 */
function swapCase(str) {
  return str
    .split(constant.char.blank)
    .map(char =>
      char === char.toUpperCase() ? char.toLowerCase() : char.toUpperCase()
    )
    .join(constant.char.blank);
}
module.exports = swapCase;
