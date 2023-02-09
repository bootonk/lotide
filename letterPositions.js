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
  const reducedSentence = sentence.replaceAll(" ", "").toLowerCase();
  const results = {};

  for (let char = 0; char < reducedSentence.length; char++) {
    console.log('letter: ', reducedSentence[char], 'index: ', char);
    if (!results[reducedSentence[char]]) {
      results[reducedSentence[char]] = [char];
    } else {
      results[reducedSentence[char]].push(char);
    }
  }

  console.log(results);
  return results;
};

const result1 = letterPositions("hello");
assertArrayEqual(result1["h"], [0]);
assertArrayEqual(result1["e"], [1]);
assertArrayEqual(result1["l"], [2, 3]);
assertArrayEqual(result1["o"], [4]);