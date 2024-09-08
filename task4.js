// 1. Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

// "hello world".toAlternatingCase() === "HELLO WORLD"

// The solution:
String.prototype.toAlternatingCase = function () {
    let newArr = [...this];
    return newArr
        .map((el) => {
            if (el !== el.toUpperCase()) {
                return el.toUpperCase();
            }
            if (el === el.toUpperCase()) {
                return el.toLowerCase();
            }
            if (el === '') {
                return '';
            }
        })
        .join('');
};

'hello world'.toAlternatingCase() // 'HELLO WORLD';
