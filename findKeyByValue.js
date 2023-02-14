///////// Function code
const findKeyByValue = function(checkObject, checkValue) {
  for (let key in checkObject) {
    if (checkObject[key] === checkValue) {
      return key;
    }
  }
};

///////// Export function file
module.exports = findKeyByValue;