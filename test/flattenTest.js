///////// Testing function file import
const assertArraysEqual = require('../assertArraysEqual');
const flatten = require('../flatten');

///////// Testing calls
// flatten([1, 2, [3, 4], 5, [6]]);
assertArraysEqual(flatten([1, 2, [3, 4], 5, [6]]), [1, 2, 3, 4, 5, 6]);