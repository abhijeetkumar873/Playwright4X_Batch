let result = Array.isArray([1, 2, 3]);
let result1 = Array.isArray("a");
console.log(result);
console.log(result1);

// Check if a variable is an array
let myArray = [1, 2, 3];
if (Array.isArray(myArray)) {
  console.log("myArray is an array.");
}

// Check if a variable is not an array
let myString = "Hello, World!";
if (!Array.isArray(myString)) {
  console.log("myString is not an array.");
}