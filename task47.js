// 1.Task 47:
// Very simple, given a number (integer / decimal / both depending on the language), find its opposite (additive inverse).

// Examples:

// 1: -1
// 14: -14
// -34: 34

// The solution:

function opposite(number) {
    if (number === 0) {
        return 0;
    }
    if (number > 0) {
        return Number(`-${number}`);
    } else {
        return Math.abs(number);
    }
}

opposite(1); //-1;

// Time: 752ms Passed: 47Failed: 0
