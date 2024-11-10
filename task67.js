// 1.Task 67:

// This kata is about multiplying a given number by eight if it is an even number and by nine otherwise.

// The solution:

function simpleMultiplication(number) {
    return number % 2 === 0 ? number * 8 : number * 9;
}

simpleMultiplication(2); // 16

// Time: 765ms Passed: 2Failed: 0
