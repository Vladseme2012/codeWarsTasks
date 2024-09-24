// 1.Task21: Complete the solution so that it returns true if the first argument(string) passed in ends with the 2nd argument (also a string).

// Examples:

// solution('abc', 'bc') // returns true
// solution('abc', 'd') // returns false

// The solution:

function solution(str, ending) {
  const newString = str.slice(str.length - ending.length);
    if (newString === ending) {
        return true;
    };
  return false;
}

solution('abcde', 'cde'); // true

// Time: 819ms Passed: 1Failed: 0
