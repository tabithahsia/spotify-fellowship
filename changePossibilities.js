/*Question 3 -- changePossibilities(amount,denominations): Your quirky boss collects rare, old coins.
They found out you're a programmer and asked you to solve something they've been wondering for a long time.

Write a function that, given an amount of money and an array of coin denominations,
computes the number of ways to make the amount of money with coins of the available denominations.

Example: for amount=4 (4¢) and denominations=[1,2,3] (1¢, 2¢ and 3¢),
your program would output 4—the number of ways to make 4¢ with those denominations:

1¢, 1¢, 1¢, 1¢
1¢, 1¢, 2¢
1¢, 3¢
2¢, 2¢
*/

/*
  STEPS
  1. Sort the array
  2. use DFS to find possible combos
*/


function changePossibilities(amount, denominations){
  var results = [];
  var combination = [];

  var sortedDenominations = denominations.sort(function(a, b) {
    return a - b;
  })

  function comboFinder(results, combination, denominations, target, startingIndex){
    if(target === 0){
      results.push(combination.slice());
      return;
    }
    for(var i = startingIndex; i < denominations.length; i++){
      if(denominations[i] > target){
        break;
      }
      combination.push(denominations[i]);
      comboFinder(results, combination, denominations, target - denominations[i], i);
      combination.pop();
    }
  }

  comboFinder(results, combination, sortedDenominations, amount, 0);
  return results.length;
}

function testChangePossibilities(actual, expected, testName){
  if(actual === expected){
    return "passed";
  } else {
    return 'FAILED [' + testName + '] Expected \"' + expected + '\", but got \"' + actual +'\"';
  }
}

console.log(testChangePossibilities(changePossibilities(4, [1, 2, 3]), 4, "changePossibilities(4, [1, 2, 3]) should return 4")); //passed
