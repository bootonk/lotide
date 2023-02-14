///////// Function code
const findKey = function(obj, callback) {
  for (let item in obj) {
    if (callback(obj[item])) {
      return item;
    }
  }
};

///////// Export function file
module.exports = findKey;