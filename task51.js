// 1.Task 51:
// Timmy & Sarah think they are in love, but around where they live, they will only know once they pick a flower each. If one of the flowers has an even number of petals and the other has an odd number of petals it means they are in love.

// Write a function that will take the number of petals of each flower and return true if they are in love and false if they aren't.

// The solution:

function lovefunc(flower1, flower2) {
    const flow1 = flower1 % 2 === 0;
    const flow2 = flower2 % 2 === 0;
    if (flow1 !== flow2) {
        return true;
    } else {
        return false;
    }
}

lovefunc(1, 4); //true;

// Time: 859ms Passed: 2Failed: 0
