let fruits = ["banana", "apple", "cherry"];
console.log(fruits);
fruits.sort();
console.log(fruits);
//  alphabetical by default 

// Example 2: Sorting numbers
let nums = [10, 5, 20, 15];
console.log(nums);
nums.sort();
console.log(nums);
//  [10, 15, 20, 5] - not sorted correctly

// Correct way to sort numbers
let nums2 = [10, 5, 20, 15];
console.log(nums2);
nums2.sort((a, b) => a - b);
console.log(nums2);
//  [5, 10, 15, 20] - correctly sorted

// Example 3: Sorting objects
let users = [
  { id: 3, name: "Charlie" },
    { id: 1, name: "Alice" },
    { id: 2, name: "David" },
    { id: 4, name: "BOB" }
];

console.log("Original users:");
console.log(users);

console.log("Sorted by id:");
users.sort((a, b) => a.id - b.id);
console.log(users);
console.log("Sorted by name:");
users.sort((a, b) => a.name.localeCompare(b.name));
console.log(users);