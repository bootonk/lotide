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

const assertArrayEqual = function(actualArr, expectedArr) {
  let equalResult = eqArrays(actualArr, expectedArr);
  if (equalResult === true) {
    return console.log(`✅✅✅ Assertion Passed: ${actualArr} === ${expectedArr}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actualArr} !== ${expectedArr}`);
};

const takeUntil = function(array, callback) {
  const results = [];
  for (let item of array) {
    if (callback(item)) {
      return results;
    } else {
      results.push(item);
    }
  }
};

const data1 = [1, 2, 3, 4, 5, 6, 7];
const results1 = takeUntil(data1, x => x > 4);
assertArrayEqual(results1, [1, 2, 3, 4]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ",");
assertArrayEqual(results2, ["I've", "been", "to", "Hollywood"]);
