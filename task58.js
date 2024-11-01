// 1.Task58:

// Build a function that returns an array of integers from n to 1 where n>0.

// Example : n=5 --> [5,4,3,2,1]

// The solution:

const reverseSeq = (n) => {
    const numbersArr = [];
    if (n === 0) {
        return numbersArr;
    }
    for (let i = n; i > 0; i--) {
        numbersArr.push(i);
    }
    return numbersArr;
};

reverseSeq(5); // [5, 4, 3, 2, 1]

// Time: 856ms Passed: 3Failed: 0
