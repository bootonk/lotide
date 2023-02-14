///////// Testing function file import
const assertArraysEqual = require('../assertArraysEqual');
const map = require('../map');

///////// Testing calls
const words = ["ground", "control", "to", "major", "tom"];
const results1 = map(words, word => word[0]);
assertArraysEqual(results1, ['g', 'c', 't', 'm', 't']); //pass

const numbers = [1, 2, 3, 4, 5];
const results2 = map(numbers, number => number * 2);
assertArraysEqual(results2, [2, 4, 6, 8, 10]); //pass

const pets = ['Juniper', 'Hammy', 'Ruby', 'Gracie'];
const results3 = map(pets, pet => pet += 'is the best!');
assertArraysEqual(results3, ['Juniper is the best!', 'Hammy is the best!', 'Ruby is the best!', 'Gracie is the best']); //intetional fail