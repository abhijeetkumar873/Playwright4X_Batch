const str = "abc";

console.log("Positive index (1):");
console.log("charAt(1):", str.charAt(1)); // "b"
console.log("at(1):", str.at(1));         // "b"

console.log("\nNegative index (-1):");
console.log("charAt(-1):", JSON.stringify(str.charAt(-1))); // "": negative indexes return an empty string
console.log("at(-1):", str.at(-1));         // "c": at counts backward from the end

console.log("\nIndex outside the string (3):");
console.log("charAt(3):", JSON.stringify(str.charAt(3))); // "": empty string
console.log("at(3):", str.at(3));                         // undefined