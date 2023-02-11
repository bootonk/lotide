///////// Testing function
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
  if (equalResult) {
    return console.log(`✅✅✅ Assertion Passed: ${actualArr} === ${expectedArr}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actualArr} !== ${expectedArr}`);
};

///////// Function code
const middle = function(arr) {
  let midIndex = Math.ceil((arr.length / 2) - 1);
  let midArray = [];
  if (arr.length <= 2) {
    return midArray;
  }
  arr.length % 2 === 0 ? midArray.push(arr[midIndex], arr[midIndex + 1]) : midArray.push(arr[midIndex]);
  return midArray;
};

///////// Testing calls
assertArrayEqual(middle([]), []);
assertArrayEqual(middle([1]), []);
assertArrayEqual(middle([1, 2]), []);
assertArrayEqual(middle([1, 2, 3]), [2]);
assertArrayEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArrayEqual(middle([1, 2, 3, 4]), [2, 3]);
assertArrayEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);
assertArrayEqual(middle(['hello', 'lighthouse', 'labs']), ['lighthouse']);