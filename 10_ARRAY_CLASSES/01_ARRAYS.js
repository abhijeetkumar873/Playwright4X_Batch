
// Example 1: Array of strings

// const browsers = ["chrome", "firefox", "webkit"];
// console.log(browsers[0]);          // chrome
// console.log(browsers.at(-1));      // webkit  (negative index)
// console.log(browsers.length);      // 3


// Example 2: Arrays 

let fruits = [];
console.log(typeof fruits);

let browsers = ["chrome", "firefox", "webkit"];
console.log(browsers.length);

// console.log(browsers.at(0));
console.log(browsers[0]);
// console.log(browsers[-1]);

console.log(browsers.at(-1));

// Example 3: Array of numbers

let numbers = [1, 2, 3, 4, 5];  
console.log(numbers[0]);          // 1
console.log(numbers.at(-1));
console.log(numbers.length);      // 5
console.log(numbers[5]);          // undefined
console.log(numbers.at(5));      // undefined
console.log(numbers.at(-6));     // undefined
console.log(numbers.at(-5));     // 1
console.log(numbers.at(-4));     // 2

// Example 4: Array of objects

let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];
console.log(users[0]);           // { id: 1, name: "Alice" }
console.log(users.at(-1));      // { id: 3, name: "Charlie" }
console.log(users.length);      // 3
console.log(users[3]);          // undefined
console.log(users.at(3));      // undefined

// Example 5: Array of mixed types

let mixedArray = [1, "two", { three: 3 }, [4]];
console.log(mixedArray[0]);          // 1
console.log(mixedArray[1]);        // "two"
console.log(mixedArray[2]);      // { three: 3 }
console.log(mixedArray[3]);      // [4]

// Example 6: Array of arrays

let arrayOfArrays = [[1, 2], [3, 4], [5, 6]];
console.log(arrayOfArrays[0]);
console.log(arrayOfArrays.at(-1));
console.log(arrayOfArrays.length);      // 3
console.log(arrayOfArrays[3]);          // undefined
console.log(arrayOfArrays.at(3));      // undefined
console.log(arrayOfArrays.at(-4));     // undefined
console.log(arrayOfArrays.at(-3));     // [1, 2]