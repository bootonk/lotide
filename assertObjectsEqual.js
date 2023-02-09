const eqArrays = function(actualArr, expectedArr) {
  if (actualArr.length !== expectedArr.length) {
    return false;
  }

  for (let i = 0; i < actualArr.length; i++) {
    if (actualArr[i] !== expectedArr[i]) {
      return false;
    }
  }
  return true;
};

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

const assertObjectsEqual = function(actualObj, expectedObj) {
  const inspect = require('util').inspect;
  let equalResult = eqObjects(actualObj, expectedObj);
  if (equalResult === true) {
    return console.log(`✅✅✅ Assertion Passed: ${inspect(actualObj)} === ${inspect(expectedObj)}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${inspect(actualObj)} !== ${inspect(expectedObj)}`);
};

// Testing code
const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true
assertObjectsEqual(multiColorShirtObject, anotherMultiColorShirtObject);

const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
// eqObjects(multiColorShirtObject  , longSleeveMultiColorShirtObject); // => false
assertObjectsEqual(multiColorShirtObject, longSleeveMultiColorShirtObject);