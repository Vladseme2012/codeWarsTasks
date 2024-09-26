// 1.Task23: An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.

// Example: (Input --> Output)

// "Dermatoglyphics" --> true
// "aba" --> false
// "moOse" --> false (ignore letter case)

// The solution:

function strCount(str, litter) {
    const littersArray = str.split('');
    let result = 0;
    littersArray.map((el) => {
        if (el === litter) {
            result += 1;
        }
    });
    return result;
}
strCount('Hello', 'o'); // 1

// Time: 870ms Passed: 4Failed: 0
