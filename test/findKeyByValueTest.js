///////// Testing function file import
const assert = require('chai').assert;
const findKeyByValue = require('../findKeyByValue');

///////// Mocha & Chai tests
describe("#findKeyByValue", () => {
  const bestTVShowsByGenre = {
    sci_fi: "The Expanse",
    comedy: "Brooklyn Nine-Nine",
    drama:  "The Wire"
  };
    
  it("returns drama for The Wire", () => {
    const actual = findKeyByValue(bestTVShowsByGenre, "The Wire");
    const expected = "drama";

    assert.deepEqual(actual, expected);
  });

  it("returns comedy for Brooklyn Nine-Nine", () => {
    const actual = findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine");
    const expected = "comedy";

    assert.deepEqual(actual, expected);
  });

  it("returns undefined for 'That 70s Show'", () => {
    const actual = findKeyByValue(bestTVShowsByGenre, "That '70s Show");

    assert.isUndefined(actual, undefined);
  });

  it("returns fail for drama for Brooklyn Nine-Nine", () => {
    const actual = findKeyByValue(bestTVShowsByGenre, "Brooklyn Nine-Nine");
    const expected = "drama"

    assert.notDeepEqual(actual, expected);
  });
});