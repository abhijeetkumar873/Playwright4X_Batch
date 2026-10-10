let a = 5;
let b = 10;
let c = a + b;
console.log(c); // Output: 15

function multiply(x, y) {
    return x * y;
}
console.log(multiply(a, b)); // Output: 50

function divide(x, y) {
    if (y === 0) {
        return 'Error: Division by zero';
    }
    return x / y;
}
console.log(divide(a, b)); // Output: 0.5

// Method Overloading Example

function calculate(x, y, operation)
 {
    if (operation === 'add') {  
        return x + y;
    } else if (operation === 'subtract') {
        return x - y;
    } else if (operation === 'multiply') {
        return x * y;
    } else if (operation === 'divide') {
        if (y === 0) {
            return 'Error: Division by zero';
        }
        return x / y;
    } else {
        return 'Error: Invalid operation';
    }   
}
console.log(calculate(a, b, 'subtract'));