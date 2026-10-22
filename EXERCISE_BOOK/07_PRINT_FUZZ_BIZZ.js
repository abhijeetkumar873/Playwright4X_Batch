const data = require('fs').readFileSync(0, 'utf8');
const n = Number(data);
const lines = [];

for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
        lines.push("FizzBuzz");
    } else if (i % 3 === 0) {
        lines.push("Fizz");
    } else if (i % 5 === 0) {
        lines.push("Buzz");
    } else {
        lines.push(i);
    }
}

console.log(lines.join("\n"));