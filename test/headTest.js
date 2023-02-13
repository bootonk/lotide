///////// Testing function file import
const head = require('../head');
const assertEqual = require('../assertEqual');

///////// Testing calls
assertEqual(head([5,6,7]), 5);
assertEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
assertEqual(head([]), undefined);
assertEqual(head([2]), 2);
assertEqual(head(["7"]), 7);