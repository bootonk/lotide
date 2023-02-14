///////// Testing function file import
const eqArrays = require('./eqArrays');

///////// Function code
const eqObjects = function(objectOne, objectTwo) {
  const objectOneKeys = Object.keys(objectOne);
  const objectTwoKeys = Object.keys(objectTwo);

  if (objectOneKeys.length !== objectTwoKeys.length) {
    return false;
  }

  for (let key of objectOneKeys) {
    if (Array.isArray(objectOne[key]) && Array.isArray(objectTwo[key])) {
      eqArrays(objectOne[key], objectTwo[key]);
    } else if (objectOne[key] !== objectTwo[key]) {
      return false;
    }
  }
  return true;
};

///////// Export function file
module.exports = eqObjects;