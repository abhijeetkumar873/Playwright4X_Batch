// const prompt = require("prompt-sync")();
// let num = Number(prompt("Enter a number"));
// console.log(num);


// FS Module 

//console.log("Enter the number!");
const data = require('fs').readFileSync(0, 'utf8');
let sideTriangle = data.trim().split(" ");

if (sideTriangle.length !== 3) {
    console.log("Please enter 3 sides of triangle");
} else {
    let a = Number(sideTriangle[0]);
    let b = Number(sideTriangle[1]);
    let c = Number(sideTriangle[2]);

    if (isNaN(a) || isNaN(b) || isNaN(c) || a <= 0 || b <= 0 || c <= 0) {
        console.log("Sides must be positive numbers");
    } else if (a + b <= c || a + c <= b || b + c <= a) {
        console.log("These sides cannot form a triangle");
    } else if (a === b && b === c) {
        console.log("Equilateral triangle");
    } else if (a === b || b === c || a === c) {
        console.log("Isosceles triangle");
    } else {
        console.log("Scalene triangle");
    }
}


// In the terminal:
// Press Enter
// Press Ctrl+Z