// 1.Task 45:
// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

// The solution:

function findAverage(array) {
    if (array.length === 0) {
        return 0;
    } else {
        return array.reduce((acc, num) => acc + num, 0) / array.length;
    }
}

findAverage([1, 1, 1]); //1;

// Time: 878ms Passed: 51 Failed: 0
