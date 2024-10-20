// 1.Task 46:
// Return the number (count) of vowels in the given string.

// We will consider a, e, i, o, u as vowels for this Kata (but not y).

// The input string will only consist of lower case letters and/or spaces.

// The solution:

function getCount(str) {
    const vowelsArray = str
        .toLowerCase()
        .split('')
        .filter(
            (el) =>
                el === 'a' ||
                el === 'e' ||
                el === 'i' ||
                el === 'o' ||
                el === 'u'
        );
    if (str.length > 0) {
        return vowelsArray.length;
    }
    return 0;
}

getCount('abracadabra'); //5;

// Time: Time: 723ms Passed: 6Failed: 0
