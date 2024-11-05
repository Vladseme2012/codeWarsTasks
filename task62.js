// 1.Task New18:
// Summation
// Write a program that finds the summation of every number from 1 to num. The number will always be a positive integer greater than 0. Your function only needs to return the result, what is shown between parentheses in the example below is how you reach that result and it's not part of it, see the sample tests.

// For example (Input -> Output):

// 2 -> 3 (1 + 2)
// 8 -> 36 (1 + 2 + 3 + 4 + 5 + 6 + 7 + 8)

// The solution:

const summation = (num) => {
    let sum = 0;
    for (let i = num; i > 0; i--) {
        sum += i;
    }
    return sum;
};

// const summation = n => n * (n + 1) / 2;

// function summation(num) {
//   return num * (num + 1) / 2
// }

// var summation = function f(num) {
//   return num ? num + f(num-1) : 0;
// }

summation(1); // 1

// Time: 928ms Passed: 2Failed: 0

function bmi(weight, height) {
    let bmi = weight / (height * height);
    if (bmi <= 18.5) {
        return 'Underweight';
    } else if (bmi <= 25.0) {
        return 'Normal';
    } else if (bmi <= 30.0) {
        return 'Overweight';
    } else if (bmi > 30) {
        return 'Obese';
    } else {
        return 'Input corectly values!';
    }
}

// function bmi(weight, height) {
//     let bmi = weight / (height * height);
//     switch (true) {
//         case bmi <= 18.5:
//             return 'Underweight';
//         case bmi <= 25.0:
//             return 'Normal';
//         case bmi <= 30.0:
//             return 'Overweight';
//         case bmi > 30:
//             return 'Obese';
//     }
// }

// const bmi = (w, h, bmi = w / h / h) =>
//     bmi <= 18.5
//         ? 'Underweight'
//         : bmi <= 25
//         ? 'Normal'
//         : bmi <= 30
//         ? 'Overweight'
//         : 'Obese';
