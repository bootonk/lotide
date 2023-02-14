///////// Testing function file import
const assertArraysEqual = require('../assertArraysEqual');
const takeUntil = require('../takeUntil');

///////// Testing calls
const data1 = [1, 2, 3, 4, 5, 6, 7];
const results1 = takeUntil(data1, x => x > 4);
assertArraysEqual(results1, [1, 2, 3, 4]);

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ",");
assertArraysEqual(results2, ["I've", "been", "to", "Hollywood"]);
