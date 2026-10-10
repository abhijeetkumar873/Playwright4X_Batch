
let a = 10;
let b = 5;

console.log(a == b);   // false
console.log(a === b);  // false
console.log(a != b);   // true
console.log(a !== b);  // true

console.log(a > b);    // true
console.log(a < b);    // false
console.log(a >= 10);  // true
console.log(b <= 5);   // true

//Important difference: == vs ===

// x == y → true, kyunki == comparison ke dauran type conversion kar sakta hai.

// x === y → false, kyunki x number hai aur y string hai.

let x = 5;
let y = "5";

console.log(x == y);  // true
console.log(x === y); // false

let enteredPassword = "Test123";
let savedPassword = "Test123";

if (enteredPassword === savedPassword) {
    console.log("Login successful");
} else {
    console.log("Invalid password");
}

// Important difference: != vs !==

// == returns true because of type conversion. 
// === returns false because the types differ. 
// !== returns true for the same reason.

let p = 10;
let q = "10";

console.log(p == q);
console.log(p === q);
console.log(p !== q);
