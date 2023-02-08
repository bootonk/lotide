const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const eqArrays = function(actualArr, expectedArr) {
  let result = "";
  if (actualArr.length !== expectedArr.length) {
    result = false;
  }

  for (let i = 0; i < actualArr.length; i++) {
    if (actualArr[i] !== expectedArr[i]) {
      result = false;
    } else {
      result = true;
    }
  }
  return result;
};

// Test code
eqArrays([1, 2, 3], [1, 2, 3]); // => true
eqArrays([1, 2, 3], [3, 2, 1]); // => false

eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);