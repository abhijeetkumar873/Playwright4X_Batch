// Combining Arrays

let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
console.log(arr1.concat(arr2));
console.log(arr1.concat(arr2, [7, 8, 9]));

// Using Spread Operator

let arr3 = [...arr1, ...arr2];
console.log(arr3);

// Using Spread Operator with additional elements

let arr4 = [...arr1, 10, 11, ...arr2];
console.log(arr4);

// Using Spread Operator with strings

let str = "Hello";
let arr5 = [...str];
console.log(arr5);

// Using Spread Operator with objects

let obj1 = { a: 1, b: 2 };
let obj2 = { c: 3, d: 4 };
let combinedObj = { ...obj1, ...obj2 };
console.log(combinedObj);

// Using Spread Operator with arrays of objects

let users1 = [{ id: 1, name: "Alice" }];
let users2 = [{ id: 2, name: "Bob" }];
let combinedUsers = [...users1, ...users2];
console.log(combinedUsers);