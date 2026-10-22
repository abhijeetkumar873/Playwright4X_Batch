let browser = ['chrome', 'firefox', 'safari', 'opera', 'edge'];
console.log(browser.length);

browser.pop();
console.log(browser);

let removed = browser.shift();
console.log(removed);

console.log(browser);

for (let i = 0; i < browser.length; i++) {
    console.log(browser[i]);
    if (browser[i] === "opera") {
        console.log("Opera doesn't support Automation Now!");
    }
}

// Example 2:

let results = ["pass", "fail", "pass", "error", "fail"];

results.indexOf("fail"); //1
results.indexOf("skip");  // -1

// lastIndexOf — searches from the end
results.lastIndexOf("fail");

// includes — returns boolean
results.includes("error"); // true

// Example 3: Adding & Removing Elements

let arr = [1, 2, 3];
console.log(arr);
arr.push(4);
console.log(arr);
arr.pop();
console.log(arr);
arr.push(5, 6);
console.log(arr);
arr.unshift(0);
console.log(arr);
arr.shift();
console.log("NEW LIST: " + arr);

// [ 1, 2, 3, 5, 6 ]
arr.splice(2, 1);
console.log(arr);
arr.splice(2, 0, 99);
// arr.splice(2, 1, 99);
// arr.splice(2, 2, 99);
console.log(arr);