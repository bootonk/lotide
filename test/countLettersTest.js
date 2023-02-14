///////// Testing function file import
const assertEqual = require('../assertEqual');
const countLetters = require('../countLetters');

///////// Testing calls
const result1 = countLetters("Lighthouse in the House");
console.log(result1);

assertEqual(result1["l"], 1);
assertEqual(result1["i"], 2);
assertEqual(result1["g"], 1);
assertEqual(result1["h"], 4);
assertEqual(result1["t"], 2);
assertEqual(result1["o"], 2);
assertEqual(result1["u"], 2);
assertEqual(result1["s"], 2);
assertEqual(result1["e"], 3);
assertEqual(result1["z"], undefined);