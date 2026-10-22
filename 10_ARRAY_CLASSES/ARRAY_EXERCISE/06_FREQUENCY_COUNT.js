const arr = [1,2,3,4,2,1,5];

let n = arr.length;

for (let i = 0; i < n; i++) {
    let count = 1;

    if (arr[i] === -1) {
        continue;
    }

    for (let j = i + 1; j < n; j++) {
        if (arr[i] === arr[j]) {
            count++;
            arr[j] = -1;
        }
    }

    if (count >= 1) {
        console.log(`${arr[i]} appears ${count} times`);
    }
}
// 2ND METHOD
