///////// Testing function file import
const eqArrays = require('./eqArrays');

///////// Function code
const assertArraysEqual = function(actualArr, expectedArr) {
  let equalResult = eqArrays(actualArr, expectedArr);
  if (equalResult) {
    return console.log(`✅✅✅ Assertion Passed: ${actualArr} === ${expectedArr}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actualArr} !== ${expectedArr}`);
};

///////// Export function file
module.exports = assertArraysEqual;