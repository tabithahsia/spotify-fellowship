/*
QUESTION 1
sortByStrings(s,t): Sort the letters in the string s by the order they occur in the string t.
You can assume t will not have repetitive characters.
For s = "weather" and t = "therapyw", the output should be sortByString(s, t) = "theeraw".
For s = "good" and t = "odg", the output should be sortByString(s, t) = "oodg".
*/

function sortByStrings(s, t){
  var letterSequence = {};
  var sArray = [];
  var answer = "";

  for(var i = 0; i < t.length; i++){
    letterSequence[t[i]] = i;
  }

  for(var i = 0; i < s.length; i++){
    sArray.push({letter: s[i], sequence: letterSequence[s[i]]})
  }
  sArray.sort(function(a, b){
    return a.sequence - b.sequence;
  })

  for(var i = 0; i < sArray.length; i++){
    answer += sArray[i].letter;
  }
  return answer;
}

function testSortByStrings(actual, expected, testName){
  if(actual === expected){
    return "passed";
  } else {
    return 'FAILED [' + testName + '] Expected \"' + expected + '\", but got \"' + actual +'\"';
  }
}

console.log(testSortByStrings(sortByStrings("good", "odg"), "oodg", "good -> oodg")); //passed
console.log(testSortByStrings(sortByStrings("weather", "therapyw"), "theeraw", "weather -> theeraw")); //passed
