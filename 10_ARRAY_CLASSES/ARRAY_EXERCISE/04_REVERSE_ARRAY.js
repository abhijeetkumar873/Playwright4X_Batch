// let arr = [1, 2, 3, 4, 5];
// let reversed = [];

// for (let i = arr.length - 1; i >= 0; i--) {
//     reversed.push(arr[i]);
// }

// console.log("Reversed array:", reversed);


const data = require('fs').readFileSync(0, 'utf8');
const tokens = data.split(/\s+/).filter(s => s.length > 0).map(Number);
const n = tokens[0];
const arr = tokens.slice(1, 1 + n);

let reversed = [];
for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}
console.log(reversed.join(' '));