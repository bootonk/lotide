///////// Testing function file import
const tail = require('../tail');
const assertEqual = require('../assertEqual');

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