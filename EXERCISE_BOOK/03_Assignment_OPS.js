//The difference between null and undefined is that null is an assignment value,
// while undefined means a variable has been declared but has not yet been assigned a value.
let car = null;
let bike;

console.log(car); // null
console.log(bike); // undefined

console.log(car == bike); // true
console.log(car === bike); // false

console.log(car != bike); // false
console.log(car !== bike); // true

let s = "Hello, ";
console.log(s); // Hello
console.log(typeof s); // string

console.log(s + "World!" + 1,2,3,4,5, true); // Hello, World! 1 2 3 4 5 true
