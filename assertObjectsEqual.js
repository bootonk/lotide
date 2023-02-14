///////// Testing function file import
const eqObjects = require('./eqObjects');

///////// Function code
const assertObjectsEqual = function(actualObj, expectedObj) {
  const inspect = require('util').inspect;
  let equalResult = eqObjects(actualObj, expectedObj);
  if (equalResult) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actualObj)} === ${inspect(expectedObj)}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actualObj)} !== ${inspect(expectedObj)}`);
};

///////// Export function file
module.exports = assertObjectsEqual;