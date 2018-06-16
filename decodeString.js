/* Question 2 -- decodeString(s): Given an encoded string, return its corresponding decoded string.

The encoding rule is: k[encoded_string], where the encoded_string inside the square brackets is repeated exactly k times.
Note: k is guaranteed to be a positive integer.

For s = "4[ab]", the output should be decodeString(s) = "abababab"
For s = "2[b3[a]]", the output should be decodeString(s) = "baaabaaa"

*/

function decodeString(s){
  var finalString = ""
  var startingIndex = s.indexOf("]");

  var tempString = "";
  var n;

  for(var i = startingIndex - 1; i > 0; i--){
    if(s[i] !== "["){
      tempString += s[i];
    } else {
      tempString = tempString.split("").reverse().join("");
      n = s[i-1];
      finalString = tempString + finalString;
      finalString = stringCreator(finalString, n);
      tempString = "";
      i--;
    }
  }
  return finalString;
}

function stringCreator(s, n){
  var string = "";
  for(var i = 0; i < n; i++){
    string += s;
  }
  return string;
}

function testDecodeString(actual, expected, testName){
  if(actual === expected){
    return "passed";
  } else {
    return 'FAILED [' + testName + '] Expected \"' + expected + '\", but got \"' + actual +'\"';
  }
}
console.log(testDecodeString(decodeString("4[ab]"), "abababab", "4[ab] should be 'abababab'")); // passed "abababab"
console.log(testDecodeString(decodeString("2[b3[a]]"), "baaabaaa", "2[b3[a]] should be 'baaabaaa'")); //passed "baaabaaa"
console.log(testDecodeString(decodeString("2[b3[a2[c]]]"), "baccaccaccbaccaccacc", "'2[b3[a2[c]]]', should be 'baccaccaccbaccaccacc'")); // passed "baccaccaccbaccaccacc"
