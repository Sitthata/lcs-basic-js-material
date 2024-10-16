// Write a function that takes an integer minutes and converts it to seconds.
function minutesToSeconds(minutes) {
  const seconds = minutes * 60;
  return seconds;
}

// Function to convert hours to seconds
function hoursToSeconds(hours) {
  const minutes = hours * 60;
  return minutesToSeconds(minutes);
}

/* 
In this challenge, a farmer is asking you to tell him how many legs can be counted among all his animals. The farmer breeds three species:

chickens = 2 legs
cows = 4 legs
pigs = 4 legs

calculateLegs(1, 1, 1) => 2 + 4 + 4 = 10
*/
function calculateLegs(chickens, cows, pigs) {
  const legChickens = chickens * 2;
  const legCows = cows * 4;
  const legPigs = pigs * 4;
  return legChickens + legCows + legPigs;
}

/* 
What's Hiding Amongst the Crowd?

A word is on the loose and now has tried to hide amongst a crowd of tall letters! Help write a function to detect what the word is, knowing the following rules:

- The wanted word is in lowercase.
- The crowd of letters is all in uppercase.
- Note that the word will be spread out amongst the random letters, but their letters remain in the same order.

detectWord("UcUNFYGaFYFYGtNUH") ➞ "cat"
detectWord("bEEFGBuFBRrHgUHlNFYaYr") ➞ "burglar"
detectWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment") ➞ "embezzlement"
*/
function detectWord(crowd) {
}

function main() {
  console.log(calculateLegs(2, 2, 2));
}

main();