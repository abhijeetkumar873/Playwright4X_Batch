const browsers = ["chromium", "firefox"];
for (const b in browsers) {
  console.log(b);
}

let attempt = 0;
while (attempt < 3) {
  attempt++;
}
console.log(attempt);


let retries = 5;
do {
  console.log("try " + retries);
  retries++;
} while (retries < 5);


for (let i = 1; i <= 5; i++) {
  if (i === 2) continue;
  if (i === 4) break;
  console.log(i);
}

const codes = [200, 500, 201];
codes.forEach((code) => {
  if (code === 500) return;
  console.log(code);
});