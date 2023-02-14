///////// Testing function file import
const assert = require('chai').assert;
const without = require('../without');

///////// Mocha & Chai tests
describe("#without", () => {
  it("returns [2, 3] from [1, 2, 3] & [1]", () => {
    const actual = without([1, 2, 3], [1]);
    const expected = [2, 3];

    assert.deepEqual(actual, expected);
  });

  it("returns ['1', '2'] from ['1', '2', '3'] & [1, 2, '3']", () => {
    const actual = without(['1', '2', '3'], [1, 2, '3']);
    const expected = ['1', '2'];

    assert.deepEqual(actual, expected);
  });

  it("returns ['hello', 'lighthouse'] from ['hello', 'lighthouse', 'labs'] & ['labs']", () => {
    const actual = without(['hello', 'lighthouse', 'labs'], ['labs']);
    const expected = ['hello', 'lighthouse'];

    assert.deepEqual(actual, expected);
  });
});