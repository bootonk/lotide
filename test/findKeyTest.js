///////// Testing function file import
const assert = require('chai').assert;
const findKey = require('../findKey');

///////// Mocha & Chai tests
describe("#findKey", () => {
  const obj1 = {
    "Blue Hill": { stars: 1 },
    "Akaleri":   { stars: 3 },
    "noma":      { stars: 2 },
    "elBulli":   { stars: 3 },
    "Ora":       { stars: 2 },
    "Akelarre":  { stars: 3 }
  }
    
  it("returns 'noma' for a search for 2 stars", () => {
    const actual = findKey(obj1, x => x.stars === 2);
    const expected = "noma";

    assert.deepEqual(actual, expected);
  });

  it("returns undefined for a search for 5 stars", () => {
    const actual = findKey(obj1, x => x.stars === 5);

    assert.isUndefined(actual, undefined);
  });
});