// 1.Task 37:
// A pangram is a sentence that contains every single letter of the alphabet at least once. For example, the sentence "The quick brown fox jumps over the lazy dog" is a pangram, because it uses the letters A-Z at least once (case is irrelevant).

// Given a string, detect whether or not it is a pangram. Return True if it is, False if not. Ignore numbers and punctuation.

// The solution:

function isPangram(string) {
    const prototypeArr = [
        'a',
        'b',
        'c',
        'd',
        'e',
        'f',
        'g',
        'h',
        'i',
        'j',
        'k',
        'l',
        'm',
        'n',
        'o',
        'p',
        'q',
        'r',
        's',
        't',
        'u',
        'v',
        'w',
        'x',
        'y',
        'z',
    ];
    const newArr = Array.from(
        new Set(
            string
                .toLowerCase()
                .split('')
                .filter(
                    (el) =>
                        el !== ' ' &&
                        el !== '.' &&
                        el !== ',' &&
                        el !== ':' &&
                        el !== ';' &&
                        el !== '!' &&
                        el !== '?' &&
                        !(el *= 2)
                )
                .sort()
        )
    );
    if (prototypeArr.length === newArr.length) {
        return true;
    }
    return false;
}

isPangram(string); //true;

// Time: 1029ms Passed: 11Failed: 0

