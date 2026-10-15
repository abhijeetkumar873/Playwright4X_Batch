// const prompt = require("prompt-sync")();
// let num = Number(prompt("Enter a number"));
// console.log(num);


// FS Module 

console.log("Enter the number!");
const data = require('fs').readFileSync(0, 'utf8');
console.log("Hi", data);

// In the terminal:
// Press Enter
// Press Ctrl+Z