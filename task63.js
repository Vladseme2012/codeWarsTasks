// 1.Task New19:
// Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.

// For example:

// uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
// uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
// uniqueInOrder([1,2,2,3,3])       == [1,2,3]

// The solution:

var uniqueInOrder = function (iterable) {
    const newIterable = [...iterable];
    const modifedIterable = [];
    newIterable.forEach((el, index, array) => {
        if (array[(index += 1)] !== el) {
            modifedIterable.push(el);
            index += 1;
        }
    });
    return modifedIterable;
};

uniqueInOrder('AAAABBBCCDAABBB'); // ['A','B','C','D','A','B']

// Time: 756ms Passed: 6Failed: 0
