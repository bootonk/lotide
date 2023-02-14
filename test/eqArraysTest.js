///////// Testing function file import
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

///////// Mocha & Chai tests
describe("#eqArrays", () => {
  
  it("returns true when actual is [1, 2, 3], and expected is [1, 2, 3]", () => {
    const actual = eqArrays([1, 2, 3], [1, 2, 3]);
    const expected = true;

    assert.deepEqual(actual, expected);
  });

  it("returns true when actual is ['1', '2', '3'], and expected is ['1', '2', '3']", () => {
    const actual = eqArrays(['1', '2', '3'], ['1', '2', '3']);
    const expected = true;

    assert.deepEqual(actual, expected);
  });

  it("returns false when actual is [1, 2, 3], and expected is [3, 2, 1]", () => {
    const actual = eqArrays([1, 2, 3], [3, 2, 1]);
    const expected = false;

    assert.deepEqual(actual, expected);
  });

  it("returns false when actual is [1, 2, 3], and expected is ['1', '2', '3']", () => {
    const actual = eqArrays([1, 2, 3], ['1', '2', '3']);
    const expected = false;

    assert.deepEqual(actual, expected);
  });
});