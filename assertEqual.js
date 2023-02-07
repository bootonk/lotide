const assertEqual = function(actual, expected) {
  if (actual === expected) {
    return console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actual} !== ${expected}`);
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual(1, 1);
assertEqual("Juniper", "Juniper");
assertEqual("Juni", "Juniper");
assertEqual(790, 790);
assertEqual("790", 790);