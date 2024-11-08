// 1.Task New20:
// Clock shows h hours, m minutes and s seconds after midnight.

// Your task is to write a function which returns the time since midnight in milliseconds.

// Example:
// h = 0
// m = 1
// s = 1

// result = 61000
// Input constraints:

// 0 <= h <= 23
// 0 <= m <= 59
// 0 <= s <= 59

// The solution:

function past(h = 0, m = 0, s = 0) {
    let hours;
    let minutes;
    let seconds;
    if (0 <= h <= 23) {
        hours = h;
    }
    if (0 <= m <= 59) {
        minutes = m;
    }
    if (0 <= s <= 59) {
        seconds = s;
    }
    return hours * 60 * 60 * 1000 + minutes * 60 * 1000 + seconds * 1000;
}

// function past(h, m, s) {
//     return (h * 3600 + m * 60 + s) * 1000;
// }

past(0, 1, 1); // 61000

// Time: 805ms Passed: 2Failed: 0
