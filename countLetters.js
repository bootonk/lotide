///////// Function code
const countLetters = function(str) {
  let reducedStr = str.replaceAll(" ", "").toLowerCase();
  let letterCount = {};
  for (let char of reducedStr) {
    if (letterCount[char]) {
      letterCount[char]++;
    } else {
      letterCount[char] = 1;
    }
  }
  return letterCount;
};

///////// Export function file
module.exports = countLetters;