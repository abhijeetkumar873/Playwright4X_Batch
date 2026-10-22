let nums = [10,25,30,45];
let result = nums.find(temp => temp > 20);
console.log(result);

// findIndex
let index = nums.findIndex(n => n > 20);
console.log(index);

nums.findLast(n => n > 20); //  45
nums.findLastIndex(n => n > 20); // 3

// findLast
let lastResult = nums.findLast(temp => temp > 20);
console.log(lastResult);

// findLastIndex
let lastIndex = nums.findLastIndex(n => n > 20);
console.log(lastIndex);

// Example 2: Array of objects
let users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
  { id: 3, name: "Charlie" }
];

// Find user with id 2
let user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Bob" }

// Find index of user with name "Charlie"
let userIndex = users.findIndex(u => u.name === "Charlie");
console.log(userIndex); // 2