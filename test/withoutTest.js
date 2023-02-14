///////// Testing function file import
const assertArraysEqual = require('../assertArraysEqual');
const without = require('../without');

///////// Testing calls
console.log(without([1, 7, 8, 2, 3], [10, 2, 3]));
console.log(without([1, 2, 3], [1])); // => [2, 3]
console.log(without(["1", "2", "3"], [1, 2, "3"])); // => ["1", "2"]
console.log(without(['hello', 'lighthouse', 'labs'], ['labs']));

// Check to make sure original array was not mutated
const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]);
assertArraysEqual(words, ["hello", "world", "lighthouse"]);