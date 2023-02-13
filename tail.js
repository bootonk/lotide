///////// Testing function file import
const assertEqual = require('./assertEqual');

///////// Function code
const tail = function(arr) {
  return arr.slice(1);
};

///////// Export function file
module.exports = tail;
