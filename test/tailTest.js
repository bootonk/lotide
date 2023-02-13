///////// Testing function file import
const assert = require('chai').assert;
const tail = require('../tail');

///////// Mocha & Chai tests
describe("#tail", () => {
  it("should return ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    const actual = tail(['Yo Yo', 'Lighthouse', 'Labs']);
    const expected = ['Lighthouse', 'Labs'];

    assert.deepEqual(actual, expected);
  });

  it("should return [] for [2]", () => {
    const actual = tail([2]);
    const expected = [];

    assert.deepEqual(actual, expected);
  });

  it("should return [] for []", () => {
    const actual = tail([]);
    const expected = [];

    assert.deepEqual(actual, expected);
  });
});