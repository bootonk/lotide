///////// Testing function file import
const assert = require('chai').assert;
const eqObjects = require('../eqObjects');

///////// Mocha & Chai tests
describe("#eqObjects", () => {
  const shirtObject = { color: "red", size: "medium" };
  const anotherShirtObject = { size: "medium", color: "red" };
  const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
  const longSleeveShirtObject = { size: "medium", color: "red", sleeveLength: "long" };
  const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
  const longSleeveMultiColorShirtObject = { size: "medium", colors: ["red", "blue"], sleeveLength: "long" };
    
  it("returns false when comparing multiColorShirtObject & longSleeveMultiColorShirtObject", () => {
    const actual = eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject);
    const expected = false;

    assert.deepEqual(actual, expected);
  });

  it("returns true when comparing multiColorShirtObject & anotherMultiColorShirtObject", () => {
    const actual = eqObjects(multiColorShirtObject, anotherMultiColorShirtObject);
    const expected = true;

    assert.deepEqual(actual, expected);
  });

  it("returns false when comparing shirtObject & longSleeveShirtObject", () => {
    const actual = eqObjects(shirtObject, longSleeveShirtObject);
    const expected = false;

    assert.deepEqual(actual, expected);
  });

  it("returns true when comparing shirtObject & anotherShirtObject", () => {
    const actual = eqObjects(shirtObject, anotherShirtObject);
    const expected = true;

    assert.deepEqual(actual, expected);
  });
});