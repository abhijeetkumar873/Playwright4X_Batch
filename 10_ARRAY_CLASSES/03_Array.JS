let browsers = ["Chrome", "Firefox", "Safari"];

let scores = new Array(3);  // creates [empty x 3]
scores[0] = "1"; 

let scores2 = new Array(1, 2, 3);

let numbers = new Array(100, 200, 300, 400);


let test = Array.of(10, 20, 30, 40, 50);
console.log(test.length);

// Array.from()
let chars = Array.from("hello");
// ["h", "e", "l", "l", "o"]

// Accessing & Modifying

let statuses = ["pass", "fail", "skip"];

console.log(statuses[0]);
console.log(statuses[2]);

console.log(statuses.at(-1));
console.log(statuses.at(-2));
console.log(statuses.at(-4));

// Modify
statuses[1] = "blocked";
console.log(statuses);

console.log(statuses.length);

