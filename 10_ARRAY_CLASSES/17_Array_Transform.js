// Map and Filters


// every vs some

// every — ALL must pass
console.log([80, 90, 85].every(i => i >= 70)); // true
console.log([80, 60, 85].every(i => i >= 70)); // false


// some — AT LEAST ONE must pass
console.log([80, 60, 85].some(s => s < 70)); // true
console.log([80, 90, 85].some(s => s < 70)); // false

// map — returns a new array
let scores = [45, 82, 91, 60, 73];
let grades = scores.map(i => i > 70 ? "Pass" : "Fail");
console.log(grades);

// filter — returns a new array
let passing = scores.filter(s => s >= 70);
console.log(passing);