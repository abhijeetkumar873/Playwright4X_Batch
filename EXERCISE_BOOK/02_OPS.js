// Method Overloading Example

let a = 5;
let b = 10;
let c = 10;

function addition(a, b) {
    return a + b;
}
console.log(addition(a, b)); // Output: 15

function addition(a, b, c) {
    return a + b + c;
}
console.log(addition(a, b, c)); // Output: 25

//Another way to implement method overloading in JavaScript 
// is by checking the number of arguments passed to the function. 
// Here's an example:

let x = 5;
let y = 10;
let z = 10;

function addition(x, y, z) {
    if (arguments.length === 2) {
        return x + y;
    } else if (arguments.length === 3) {
        return x + y + z;
    }
}

console.log(addition(x, y));    // Output: 15
console.log(addition(x, y, z)); // Output: 25