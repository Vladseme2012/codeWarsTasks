// 1.Task8: Complete the function that takes two integers (a, b, where a < b) and return an array of all integers between the input parameters, including them.

// For example:

// a = 1
// b = 4
// --> [1, 2, 3, 4]

// The solution:

function between(a, b) {
  let numbersArray = [];
  if (a < b) {
      for (let index = a; index <= b; index++) {
          numbersArray.push(index);
      }
      return numbersArray;
  }
  return 'Number a must more number b';
}

between(1, 4); // [1, 2, 3, 4]

// Time: 795ms Passed: 104Failed: 0