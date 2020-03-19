const camelCase = require("./packages/camelCase");
const constantCase = require("./packages/constantCase");
const dotCase = require("./packages/dotCase");
const headerCase = require("./packages/headerCase");
const lowerCase = require("./packages/lowerCase");
const paramCase = require("./packages/paramCase");
const pascalCase = require("./packages/pascalCase");
const pathCase = require("./packages/pathCase");
const sentenceCase = require("./packages/sentenceCase");
const snakeCase = require("./packages/snakeCase");
const swapCase = require("./packages/swapCase");
const titleCase = require("./packages/titleCase");
const upperCase = require("./packages/upperCase");

(function(root, factory) {
  if (typeof define === "function" && define.amd) {
    // AMD. Register as an anonymous module.
    define([], factory);
  } else if (typeof module === "object" && module.exports) {
    // Node.
    module.exports = factory();
  } else {
    // Browser globals (root is window)
    root.returnExports = factory();
  }
})(typeof self !== "undefined" ? self : this, function() {
  return {
    camelCase,
    constantCase,
    dotCase,
    headerCase,
    lowerCase,
    paramCase,
    pascalCase,
    pathCase,
    sentenceCase,
    snakeCase,
    swapCase,
    titleCase,
    upperCase
  };
});
