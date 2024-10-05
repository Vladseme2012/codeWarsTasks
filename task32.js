// 1.Task 32:
// Trolls are attacking your comment section!

// A common way to deal with this situation is to remove all of the vowels from the trolls' comments, neutralizing the threat.

// Your task is to write a function that takes a string and return a new string with all vowels removed.

// For example, the string "This website is for losers LOL!" would become "Ths wbst s fr lsrs LL!".

// Note: for this kata y isn't considered a vowel.

// The solution:

function disemvowel(str) {
    return str
        .split('')
        .filter(
            (el) =>
                el !== 'a' &&
                el !== 'A' &&
                el !== 'e' &&
                el !== 'E' &&
                el !== 'i' &&
                el !== 'I' &&
                el !== 'o' &&
                el !== 'O' &&
                el !== 'u' &&
                el !== 'U'
        )
        .join('');
}

disemvowel('This website is for losers LOL!'); // "Ths wbst s fr lsrs LL!"

// Time: 814ms Passed: 101Failed: 0
