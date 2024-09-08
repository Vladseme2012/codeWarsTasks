// 1.Task:
// Create a method to see whether the string is ALL CAPS.

// Examples (input -> output)
// "c" -> False

// The solution:
String.prototype.isUpperCase = function () {
    if (this.split(',').every((el) => el === el.toUpperCase())) {
        return true;
    } else {
        return false;
    }
};

'Hello World'.isUpperCase() // false
