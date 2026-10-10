
// Arithmetic Operators in JavaScript

let a = 10;
let b = 3;

// Addition
console.log("Addition:", a + b);       // 13

// Subtraction
console.log("Subtraction:", a - b);    // 7

// Multiplication
console.log("Multiplication:", a * b); // 30

// Division
console.log("Division:", a / b);       // 3.333...

// Modulus
console.log("Modulus:", a % b);        // 1

// Exponentiation
console.log("Power:", a ** b);         // 1000

// Increment
a++;
console.log("Increment:", a);          // 11

// Decrement
b--;
console.log("Decrement:", b);          // 2

// Operator Precedence Even & Odd Check

let number = 7;

if (number % 2 === 0) {
    console.log("Even");
} else {
    console.log("Odd");
}


// Operator Precedence Example


let p = 5;

console.log(p++); // 5 (post-increment)
console.log(p);   // 6

let q = 5;

console.log(++q); // 6 (pre-increment)

// String Concatenation 

console.log(10 + 20);     // 30
console.log("10" + 20);   // "1020"
console.log("Hello " + "World"); // Hello World


// Example of operator precedence

let x = 10;
let y = 4;

console.log(x % y);
console.log(x ** 2);
console.log(x++);
console.log(x);