///////// Testing function file import
const assert = require('chai').assert;
const map = require('../map');

///////// Mocha & Chai tests
describe("#map", () => {
  it("returns an array of [2, 4, 6, 8, 10] for [1, 2, 3, 4, 5]", () => {
    const actual = map([1, 2, 3, 4, 5], number => number * 2);
    const expected = [2, 4, 6, 8, 10];

    assert.deepEqual(actual, expected);
  });

  it("returns an array of ['g', 'c', 't', 'm', 't'] for ['ground', 'control', 'to', 'major', 'tom']", () => {
    const actual = map(["ground", "control", "to", "major", "tom"], word => word[0]);
    const expected = ['g', 'c', 't', 'm', 't'];

    assert.deepEqual(actual, expected);
  });

  it("returns an array of ['Juniper is the best!', 'Hammy is the best!', 'Ruby is the best!', 'Gracie is the best'] for ['Juniper', 'Hammy', 'Ruby', 'Gracie']", () => {
    const actual = map(['Juniper', 'Hammy', 'Ruby', 'Gracie'], pet => pet += ' is the best!');
    const expected = ['Juniper is the best!', 'Hammy is the best!', 'Ruby is the best!', 'Gracie is the best!'];

    assert.deepEqual(actual, expected);
  });
});