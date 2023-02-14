///////// Testing function file import
const assert = require('chai').assert;
const flatten = require('../flatten');

///////// Mocha & Chai tests
describe("#flatten", () => {
  it("returns [1, 2, 3, 4, 5, 6] from [1, 2, [3, 4], 5, [6]]", () => {
    const actual = flatten([1, 2, [3, 4], 5, [6]])
    const expected = [1, 2, 3, 4, 5, 6];

    assert.deepEqual(actual, expected);
  });
});