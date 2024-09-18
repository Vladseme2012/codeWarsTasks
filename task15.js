// 1.Task15: There is a bus moving in the city which takes and drops some people at each bus stop.

// You are provided with a list (or array) of integer pairs. Elements of each pair represent the number of people that get on the bus (the first item) and the number of people that get off the bus (the second item) at a bus stop.

// Your task is to return the number of people who are still on the bus after the last bus stop (after the last array). Even though it is the last bus stop, the bus might not be empty and some people might still be inside the bus, they are probably sleeping there :D

// Take a look on the test cases.

// Please keep in mind that the test cases ensure that the number of people in the bus is always >= 0. So the returned integer can't be negative.

// The second value in the first pair in the array is 0, since the bus is empty in the first bus stop.

// The solution:

var number = function (busStops) {
    let minuend = 0;
    let subtrahend = 0;
    busStops.map((el) => {
        minuend += el[0];
        subtrahend += el[1];
    });
    return minuend - subtrahend;
};

number([
    [10, 0],
    [3, 5],
    [5, 8],
]); // 5

// Time: 734ms Passed: 2Failed: 0