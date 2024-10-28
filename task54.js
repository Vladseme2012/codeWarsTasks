// 1.Task 54:
// Given an array of integers as strings and numbers, return the sum of the array values as if all were numbers.

// Return your answer as a number.

// The solution:

function sumMix(x) {
    return x.reduce((acc, curr) => acc + Number(curr), 0);
}

sumMix([9, 3, '7', '3']); //22;

// Time: 917ms Passed: 2Failed: 0
