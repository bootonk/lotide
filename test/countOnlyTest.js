///////// Testing function file import
// const assertEqual = require('../assertEqual');
const assert = require('chai').assert;
const countOnly = require('../countOnly');

///////// Mocha & Chai tests
describe("#countOnly", () => {
  const firstNames = [
    "Karl",
    "Salima",
    "Agouhanna",
    "Fang",
    "Kavith",
    "Jason",
    "Salima",
    "Fang",
    "Joe"
  ];

  it("returns the matching names between both sources", () => {
    const input = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })
    const output = {
      Jason: 1,
      Fang: 2
    };

    assert.deepEqual(input, output);
  });

  it("returns the undefined if on the itemsToCount but not the source array", () => {
    const input = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })

    assert.isUndefined(input['Karima'], undefined);
  });

  it("returns the undefined if on the itemsToCount but set to 'false'", () => {
    const input = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false })

    assert.isUndefined(input['Agouhanna'], undefined);
  });
});