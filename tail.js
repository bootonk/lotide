///////// Testing function
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

///////// Function code
const tail = function(arr) {
  return arr.slice(1);
};

///////// Testing calls
// check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words);
assertEqual(words.length, 3);

// single element array
const soloResult = tail([2]);
assertEqual(soloResult.length, 0);

// empty array
const emptyResult = tail([]);
assertEqual(emptyResult.length, 0);
