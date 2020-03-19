# converting-case

This module is used to convert cases.

# install

`npm install converting-case`

# usage

```javascript
//NodeJS
const convert = require("converting-case");

console.log("camelCase", convert.camelCase("Test String Demo")); //camelCase testStringDemo
console.log("constantCase", convert.constantCase("Test String Demo")); //constantCase TEST_STRING_DEMO
console.log("dotCase", convert.dotCase("Test String Demo")); //dotCase test.string.demo
console.log("headerCase", convert.headerCase("Test String Demo")); //headerCase Test-String-Demo
console.log("paramCase", convert.paramCase("Test String Demo")); //paramCase test-string-demo
console.log("pascalCase", convert.pascalCase("Test String Demo")); //pascalCase TestStringDemo
console.log("pathCase", convert.pathCase("Test String Demo")); //pathCase test/string/demo
console.log("sentenceCase", convert.sentenceCase("Test String Demo")); //sentenceCase Test string demo
console.log("snakeCase", convert.snakeCase("Test String Demo")); //snakeCase test_string_demo
console.log("swapCase", convert.swapCase("Test String Demo")); //swapCase tEST sTRING dEMO
console.log("titleCase", convert.titleCase("Test String Demo")); //titleCase Test String Demo
console.log("upperCase", convert.upperCase("Test String Demo")); //upperCase TEST STRING DEMO
console.log("lowerCase", convert.lowerCase("Test String Demo")); //lowerCase test string demo

//Browser
import {
  camelCase,
  constantCase,
  dotCase,
  headerCase,
  paramCase,
  pascalCase,
  pathCase,
  sentenceCase,
  snakeCase,
  swapCase,
  titleCase,
  upperCase,
  lowerCase
} from "converting-case";

console.log("camelCase", camelCase("Test String Demo")); //camelCase testStringDemo
console.log("constantCase", constantCase("Test String Demo")); //constantCase TEST_STRING_DEMO
console.log("dotCase", dotCase("Test String Demo")); //dotCase test.string.demo
console.log("headerCase", headerCase("Test String Demo")); //headerCase Test-String-Demo
console.log("paramCase", paramCase("Test String Demo")); //paramCase test-string-demo
console.log("pascalCase", pascalCase("Test String Demo")); //pascalCase TestStringDemo
console.log("pathCase", pathCase("Test String Demo")); //pathCase test/string/demo
console.log("sentenceCase", sentenceCase("Test String Demo")); //sentenceCase Test string demo
console.log("snakeCase", snakeCase("Test String Demo")); //snakeCase test_string_demo
console.log("swapCase", swapCase("Test String Demo")); //swapCase tEST sTRING dEMO
console.log("titleCase", titleCase("Test String Demo")); //titleCase Test String Demo
console.log("upperCase", upperCase("Test String Demo")); //upperCase TEST STRING DEMO
console.log("lowerCase", lowerCase("Test String Demo")); //lowerCase test string demo
```
