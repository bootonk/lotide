///////// Function code
const without = function(sourceArr, itemsToRemoveArr) {
  let reducedArr = [];
  for (let element of sourceArr) {
    if (!itemsToRemoveArr.includes(element)) {
      reducedArr.push(element);
    }
  }
  return reducedArr;
};

///////// Export function file
module.exports = without;