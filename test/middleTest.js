///////// Testing function file import
const assert = require('chai').assert;
const middle = require('../middle');

describe("#middle", () => {
  it("should return an empty array if given an empty array", () => {
    const actual = middle([]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it("should return an empty array if given an array with a single element", () => {
    const actual = middle([1]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it("should return an empty array if given an array with only two elements", () => {
    const actual = middle([1]);
    const expected = [];
    assert.deepEqual(actual, expected);
  });

  it("should return [2] if the array input is [1, 2, 3]", () => {
    const actual = middle([1, 2, 3]);
    const expected = [2];
    assert.deepEqual(actual, expected);
  });

  it("should return [3] if the array input is [1, 2, 3, 4, 5]", () => {
    const actual = middle([1, 2, 3, 4, 5]);
    const expected = [3];
    assert.deepEqual(actual, expected);
  });

  it("should return [3, 4] if the array input is [1, 2, 3, 4, 5, 6]", () => {
    const actual = middle([1, 2, 3, 4, 5, 6]);
    const expected = [3, 4];
    assert.deepEqual(actual, expected);
  });

  it("should return ['lighthouse'] if the array input is ['hello', 'lighthouse', 'labs']", () => {
    const actual = middle(['hello', 'lighthouse', 'labs']);
    const expected = ['lighthouse'];
    assert.deepEqual(actual, expected);
  });
});