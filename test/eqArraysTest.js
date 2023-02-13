///////// Testing function file import
const eqArrays = require('../eqArrays');
const assertEqual = require('../assertEqual');

///////// Testing calls
console.log(eqArrays([1, 2, 3], [1, 2, 3])); // => true
console.log(eqArrays([1, 2, 3], [3, 2, 1])); // => false

// eqArrays(["1", "2", "3"], ["1", "2", "3"]); // => true
assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false); // => false
assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);