// 1.Task10: Define a method hello that returns "Hello, Name!" to a given name, or says Hello, World! if name is not given (or passed as an empty String).

// Assuming that name is a String and it checks for user typos to return a name with a first capital letter (Xxxx).

// Examples:

// * With `name` = "john"  => return "Hello, John!"
// * With `name` = "aliCE" => return "Hello, Alice!"
// * With `name` not given
//   or `name` = ""        => return "Hello, World!"

// The solution:

function hello(name) {
    return name
        ? 'Hello, ' +
              name.toLocaleLowerCase()[0].toUpperCase() +
              name.toLocaleLowerCase().slice(1) +
              '!'
        : 'Hello, World!';
}

hello('johN'); // 'Hello, John!'

// Time: 761ms Passed: 2Failed: 0
