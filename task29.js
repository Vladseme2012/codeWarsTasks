// 1.Task 29:
// Write a function to convert a name into initials. This kata strictly takes two words with one space in between them.

// The output should be two capital letters with a dot separating them.

// It should look like this:

// Sam Harris => S.H

// patrick feeney => P.F

// The solution:

function abbrevName(name) {
    let abbrevName = name
        .toLowerCase()
        .split(' ')
        .map((el) => el[0])
        .join('.');
    return abbrevName.toUpperCase();
}

abbrevName('Sam Harris'); // "S.H"

// Time: 761ms Passed: 2Failed: 0