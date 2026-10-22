
// let arr = [6, 8, 11, 6, 7, 18];

// let min = arr[0];

// for (let i = 1; i < arr.length; i++) {
//     if (arr[i] < min) {
//         min = arr[i];
//     }
// }

// console.log("Minimum element:", min);


const data = require('fs').readFileSync(0, 'utf8').trim().split(/\s+/).map(Number);
const n = data[0];
const arr = data.slice(1, 1 + n);
// Write your solution here

let min = arr[0];

for (let i = 1; i < n; i++) {
    if (arr[i] < min) {
        min = arr[i];
    }
}
console.log("Minimum element:", min);