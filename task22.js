// 1.Task22: An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// The solution:

function isIsogram(str){
  const newString = str.toLowerCase();
  const lengthArrayOne = newString.split('').length;
const lengthArrayTwo = Array.from(new Set(newString.split(''))).length;
  if(lengthArrayOne === lengthArrayTwo){
return true;
}
return false;
}

isIsogram("Dermatoglyphics"); // true

// Time: 800ms Passed: 2Failed: 0
