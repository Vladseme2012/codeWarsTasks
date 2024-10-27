// 1.Task 53:
// The main idea is to count all the occurring characters in a string. If you have a string like aba, then the result should be {'a': 2, 'b': 1}.

// What if the string is empty? Then the result should be empty object literal, {}.

// The solution:

function count(string) {
    const literalsArray = string.split('');
    if (string === '') {
        return {};
    }
    const newObject = literalsArray.reduce((acc, cur) => {
        return typeof acc[cur] !== 'undefined'
            ? { ...acc, [cur]: acc[cur] + 1 }
            : { ...acc, [cur]: 1 };
    }, {});

    return newObject;
}

// function count(string) {
//     var count = {};
//     string.split('').forEach(function (s) {
//         count[s] ? count[s]++ : (count[s] = 1);
//     });
//     return count;
// }

count('a'); // {'a': 1}

// Time:  826ms Passed: 2Failed: 0
