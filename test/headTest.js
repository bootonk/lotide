///////// Testing function file import
const assert = require('chai').assert;
const head = require('../head');

///////// Mocha & Chai tests
describe("#head", () => {
  it("returns 1 for [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' for ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });

  it("returns 'Hello' for ['Hello', 'Lighthouse', 'Labs']", () => {
    assert.strictEqual(head(["Hello", "Lighthouse", "Labs"]), "Hello");
  });

  it("returns undefined for []", () => {
    assert.strictEqual(head([]), undefined);
  });

  it("returns 2 for [2]", () => {
    assert.strictEqual(head([2]), 2);
  });

  it("returns false for ['7'] matching 7", () => {
    assert.notStrictEqual(head(["7"]), 7);
  });
});