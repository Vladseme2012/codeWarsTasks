// 1.Task 44:
// Sum all the numbers of a given array ( cq. list ), except the highest and the lowest element ( by value, not by index! ).

// The highest or lowest element respectively is a single element at each edge, even if there are more than one with the same value.

// Mind the input validation.

// Example
// { 6, 2, 1, 8, 10 } => 16
// { 1, 1, 11, 2, 3 } => 6
// Input validation
// If an empty value ( null, None, Nothing, nil etc. ) is given instead of an array, or the given array is an empty list or a list with only 1 element, return 0.

// The solution:

function sumArray(array) {
    if (
        !Array.isArray(array) ||
        array.length === 0 ||
        array.length === 1 ||
        array.length === 2
    ) {
        return 0;
    } else {
        return [...array]
            .sort((a, b) => a - b)
            .slice(1, array.length - 1)
            .reduce((acc, curr) => acc + curr, 0);
    }
}

sumArray(null) ; //0;

// Time: 878ms Passed: 51Failed: 0