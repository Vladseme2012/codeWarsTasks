// 1.Task17: Write a function to split a string and convert it into an array of words.

// Examples (Input ==> Output):
// "Robin Singh" ==> ["Robin", "Singh"]

// "I love arrays they are my favorite" ==> ["I", "love", "arrays", "they", "are", "my", "favorite"]

// The solution:

function stringToArray(string) {
    return string.split(' ');
}

stringToArray('Robin Singh'); // ["Robin", "Singh"]

// Time: 800ms Passed: 2Failed: 0
