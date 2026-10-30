let arr = [1, 2, 3, 4, 5,1];
let duplicates = [];
for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
        if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
            duplicates.push(arr[i]);
        }
    }
}
console.log(duplicates.join(' '));

//Example 2

let arr1 = [1,2,3,4,3,5,6,2];

let n= arr1.length;

const seen = new Set();

const duplicateCharacters = new Set();

for(let i=0;i<=n; i++)
{
    if(seen.has(arr1[i]))
    {
        duplicateCharacters.add(arr1[i]);
    }
    else
    {
        seen.add(arr1[i]);
    }
        
}
console.log([...duplicateCharacters].join(' '));
