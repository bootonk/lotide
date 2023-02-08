const eqArrays = function(actualArr, expectedArr) {
  console.log(actualArr, expectedArr);
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

const flatten = function(arr) {
  let bundledArr = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let i of element) {
        bundledArr.push(i);
      }
    } else {
      bundledArr.push(element);
    }
  }
  return bundledArr;
};

// flatten([1, 2, [3, 4], 5, [6]]);
assertArrayEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);