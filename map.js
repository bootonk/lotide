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

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArrayEqual(results1, ['g', 'c', 't', 'm', 't']); //pass

const numbers = [1, 2, 3, 4, 5];
const results2 = map(numbers, number => number * 2);
assertArrayEqual(results2, [2, 4, 6, 8, 10]); //pass

const pets = ['Juniper', 'Hammy', 'Ruby', 'Gracie'];
const results3 = map(pets, pet => pet += 'is the best!');
assertArrayEqual(results3, ['Juniper is the best!', 'Hammy is the best!', 'Ruby is the best!', 'Gracie is the best']); //intetional fail