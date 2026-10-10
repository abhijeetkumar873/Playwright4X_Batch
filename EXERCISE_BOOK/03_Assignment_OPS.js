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