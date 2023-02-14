///////// Testing function file import
const assert = require('chai').assert;
const countLetters = require('../countLetters');

///////// Mocha & Chai tests
describe("#countLetters", () => {
  it("returns the letter count within an object", () => {
    const input = countLetters("Lighthouse in the House")
    const output = {
      l: 1,
      i: 2, 
      g: 1,
      h: 4,
      t: 2,
      o: 2,
      u: 2,
      s: 2,
      e: 3,
      n: 1
    }
    assert.deepEqual(input, output);
  });
});