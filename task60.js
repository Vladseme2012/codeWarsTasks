// 1.Task 59:

// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

// Examples input/output:

// XO("ooxx") => true
// XO("xooxx") => false
// XO("ooxXm") => true
// XO("zpzpzpp") => true // when no 'x' and 'o' is present should return true
// XO("zzoo") => false

// The solution:

function XO(str) {
    let newString = str.toLowerCase();
    let litter = newString[0];
    if (newString.includes('o') && newString.includes('x')) {
        let o = newString.split('').reduce((acc, cur) => {
            if (cur === 'o') {
                acc += 1;
            }
            return acc;
        }, 0);
        let x = newString.split('').reduce((acc, cur) => {
            if (cur === 'x') {
                acc += 1;
            }
            return acc;
        }, 0);
        return o === x;
    }
    if (
        (newString.includes('o') && !newString.includes('x')) ||
        (!newString.includes('o') && newString.includes('x'))
    ) {
        return false;
    }

    if (litter !== 'o' && litter !== 'x') {
        let a = newString
            .split('')
            .filter((el) => el === litter)
            .reduce((acc, cur) => {
                if (cur === litter) {
                    acc += 1;
                }
                return acc;
            }, 0);
        console.log(a);
        let b = newString
            .split('')
            .filter((el) => el !== litter)
            .reduce((acc, cur) => {
                if (cur !== litter) {
                    acc += 1;
                }
                return acc;
            }, 0);
        console.log(b);
        return a === b;
    }
}

XO('xo'); // true

// Time: 799ms Passed: 1Failed: 0
