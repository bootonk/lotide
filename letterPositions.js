const eqArrays = function(actualArr, expectedArr) {
  if (actualArr.length !== expectedArr.length) {
    return false;
  }

  for (let i = 0; i < actualArr.length; i++) {
    if (actualArr[i] !== expectedArr[i]) {
      return false;
    }
  }
  return true;
};

const assertArrayEqual = function(actualArr, expectedArr) {
  let equalResult = eqArrays(actualArr, expectedArr);
  if (equalResult === true) {
    return console.log(`✅✅✅ Assertion Passed: ${actualArr} === ${expectedArr}`);
  }
  return console.log(`🛑🛑🛑 Assertion Failed: ${actualArr} !== ${expectedArr}`);
};

//letterPosition code (everything above is testing code)
const letterPositions = function(sentence) {
  const reducedSentence = sentence.toLowerCase();
  const results = {};

  for (let char = 0; char < reducedSentence.length; char++) {
    console.log('letter: ', reducedSentence[char], 'index: ', char);
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

  console.log(results);
  return results;
};

// const result1 = letterPositions("hello");
// assertArrayEqual(result1["h"], [0]);
// assertArrayEqual(result1["e"], [1]);
// assertArrayEqual(result1["l"], [2, 3]);
// assertArrayEqual(result1["o"], [4]);
const result1 = letterPositions("lighthouse in the house");
assertArrayEqual(result1["l"], [0]);
assertArrayEqual(result1["i"], [1, 11]);
assertArrayEqual(result1["g"], [2]);
assertArrayEqual(result1["h"], [3, 5, 15, 18]);
assertArrayEqual(result1["t"], [4, 14]);
assertArrayEqual(result1["o"], [6, 19]);
assertArrayEqual(result1["u"], [7, 20]);
assertArrayEqual(result1["s"], [8, 21]);
assertArrayEqual(result1["e"], [9, 16, 22]);
assertArrayEqual(result1["n"], [12]);
