// 1.Task 48:
// Create a function that gives a personalized greeting. This function takes two parameters: name and owner.

// Use conditionals to return the proper message:

// case	return
// name equals owner	'Hello boss'
// otherwise	'Hello guest'

// The solution:

function greet(name, owner) {
    if (!name || !owner) {
        return 'Input name or owner';
    }
    if (name === owner) {
        return 'Hello boss';
    } else {
        return 'Hello guest';
    }
}

greet('Daniel', 'Daniel'); //'Hello boss';

// Time: 760ms Passed: 2Failed: 0
