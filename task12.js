// 1.Task12: Your task is to write a function which returns the n-th term of the following series, which is the sum of the first n terms of the sequence (n is the input parameter).

// Series:
// 1+1/4 + 1/7 + 1/10 + 1/13 + 1/16 + ...
// You will need to figure out the rule of the series to complete this.

// Rules
// You need to round the answer to 2 decimal places and return it as String.

// If the given value is 0 then it should return "0.00".

// You will only be given Natural Numbers as arguments.

// Examples (Input --> Output)
// n
// 1 --> 1 --> "1.00"
// 2 --> 1 + 1/4 --> "1.25"
// 5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

// The solution:

function SeriesSum(n) {
    let sum = 1;
    let counter = 1;
    if (typeof n !== 'number') {
        return 'Input any number';
    }
    if (n === 0) {
        return String(n.toFixed(2));
    }
    if (n === 1) {
        return String(n.toFixed(2));
    }
    for (let i = 0; i < n - 1; i++) {
        sum += 1 / (counter += 3);
    }
    return String(sum.toFixed(2));
}

SeriesSum(2); // "1.25"

// Time: 811ms Passed: 2Failed: 0
