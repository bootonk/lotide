///////// Function code
const middle = function(arr) {
  let midIndex = Math.ceil((arr.length / 2) - 1);
  let midArray = [];
  if (arr.length <= 2) {
    return midArray;
  }
  arr.length % 2 === 0 ? midArray.push(arr[midIndex], arr[midIndex + 1]) : midArray.push(arr[midIndex]);
  return midArray;
};

///////// Export function file
module.exports = middle;