///////// Function code
const flatten = function(arr) {
  let bundledArr = [];
  for (let element of arr) {
    if (Array.isArray(element)) {
      for (let i of element) {
        bundledArr.push(i);
      }
    } else {
      bundledArr.push(element);
    }
  }
  return bundledArr;
};

///////// Export function file
module.exports = flatten;