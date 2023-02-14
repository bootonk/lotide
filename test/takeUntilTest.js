///////// Testing function file import
const assert = require('chai').assert;
const takeUntil = require('../takeUntil');

///////// Mocha & Chai tests
describe("#takeUntil", () => {
  it("returns an array of [1, 2, 3, 4] from [1, 2, 3, 4, 5, 6, 7]", () => {
    const actual = takeUntil([1, 2, 3, 4, 5, 6, 7], x => x > 4);
    const expected = [1, 2, 3, 4];

    assert.deepEqual(actual, expected);
  });

  it("returns an array of [I've, been, to, Hollywood] from [I've, been, to, Hollywood, ',', I've, been, to, Redwood]", () => {
    const actual = takeUntil(["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"], x => x === ",");
    const expected = ["I've", "been", "to", "Hollywood"];

    assert.deepEqual(actual, expected);
  });
});