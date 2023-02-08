const eqArrays = function(actualArr, expectedArr) {
  let result = "";
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

const assertArrayEqual = function(actualArr, expectedArr) {
  let equalResult = eqArrays(actualArr, expectedArr);
  if (equalResult === true) {
    return console.log(`✅✅✅ Assertion Passed: ${actualArr} === ${expectedArr}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actualArr} !== ${expectedArr}`);
};

const without = function(sourceArr, itemsToRemoveArr) {
  let reducedArr = [];
  for (let element of sourceArr) {
    if (!itemsToRemoveArr.includes(element)) {
      reducedArr.push(element);
    }
  }
  return console.log(reducedArr);
};

// Test code
without([1, 7, 8, 2, 3], [10, 2, 3]);
without([1, 2, 3], [1]); // => [2, 3]
without(["1", "2", "3"], [1, 2, "3"]); // => ["1", "2"]
without(['hello', 'lighthouse', 'labs'], ['labs']);

// Check to make sure original array was not mutated
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArrayEqual(words, ["hello", "world", "lighthouse"]);