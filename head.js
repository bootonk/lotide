///////// Testing function file import
const assertEqual = require('./assertEqual');

///////// Function code
const head = function(arr) {
  const firstElement = arr.shift();
  return firstElement;
};

module.exports = head;