let scores = [45, 82, 91, 60, 73];

let grades = scores.map(i => i > 70 ? "Pass" : "Fail");
console.log(grades);


// Filter
let passing = scores.filter(s => s >= 70);
console.log(passing);

// Reduce
let total = scores.reduce((acc, curr) => acc + curr, 0);
console.log(total);

// ReduceRight
let totalRight = scores.reduceRight((acc, curr) => acc + curr, 0);
console.log(totalRight);

// Sort
let sortedScores = scores.sort((a, b) => a - b);
console.log(sortedScores);

// Reverse
let reversedScores = scores.reverse();
console.log(reversedScores);

// Every
let allPassing = scores.every(s => s >= 70);
console.log(allPassing);

// Some
let somePassing = scores.some(s => s >= 70);
console.log(somePassing);

// Find
let firstPassing = scores.find(s => s >= 70);
console.log(firstPassing);

// FindIndex
let firstPassingIndex = scores.findIndex(s => s >= 70);
console.log(firstPassingIndex);

// FindLast
let lastPassing = scores.findLast(s => s >= 70);
console.log(lastPassing);

// FindLastIndex
let lastPassingIndex = scores.findLastIndex(s => s >= 70);
console.log(lastPassingIndex);

// Flat
let nestedArray = [1, [2, 3], [4, [5, 6]]];
let flatArray = nestedArray.flat(2);
console.log(flatArray);