// 1.Task18: Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

// Examples
// "This is an example!" ==> "sihT si na !elpmaxe"
// "double  spaces"      ==> "elbuod  secaps"

// The solution:

function reverseWords(str) {
    let reverseString = str
        .split(' ')
        .map((el) => el.split('').reverse().join(''))
        .join(' ');
    return reverseString;
}

reverseWords('apple'); // 'elppa'

// Time: 856ms Passed: 2Failed: 0
