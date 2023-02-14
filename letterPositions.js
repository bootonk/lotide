///////// Function code
const letterPositions = function(sentence) {
  const reducedSentence = sentence.toLowerCase();
  const results = {};

  for (let char = 0; char < reducedSentence.length; char++) {
    if (reducedSentence[char] === " ") {
      continue;
    } else {
      if (!results[reducedSentence[char]]) {
        results[reducedSentence[char]] = [char];
      } else {
        results[reducedSentence[char]].push(char);
      }
    }
  }

  return results;
};

///////// Export function file
module.exports = letterPositions;
