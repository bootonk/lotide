const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

const tail = function(arr) {
  return arr.slice(1);
}

// Test code: check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

// Test code: single element array
const soloResult = tail([2]);
assertEqual(soloResult.length, 0);

// Test code: empty array
const emptyResult = tail([]);
assertEqual(emptyResult.length, 0);
