
let arr = [6, 8, 11, 6, 7, 18];

let max = arr[0];

for (let i = 1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i];
    }
}

console.log("Maximum element:", max);
