const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(actualArr, expectedArr) {
  if (actualArr.length !== expectedArr.length) {
   return false;
  }

  for (let i = 0; i < actualArr.length; i++) {
    if (actualArr[i] !== expectedArr[i]) {
      return false;
    } else {
      result = true;
    }
  }
  return result;
};

// Test code
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);