// 1.Task16: Take 2 strings s1 and s2 including only letters from a to z. Return a new sorted string (alphabetical ascending), the longest possible, containing distinct letters - each taken only once - coming from s1 or s2.

// Examples:
// a = "xyaabbbccccdefww"
// b = "xxxxyyyyabklmopq"
// longest(a, b) -> "abcdefklmopqwxy"

// a = "abcdefghijklmnopqrstuvwxyz"
// longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

// The solution:

function longest(s1, s2) {
    let newString = s1 + s2;
    const newArr = newString.split('').sort();
    const uniqueDates = new Set(newArr);
    return Array.from(uniqueDates).join('');
}

longest('aretheyhere', 'yestheyarehere'); // "aehrsty"

// Time: 916ms Passed: 201Failed: 0