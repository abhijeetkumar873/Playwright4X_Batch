let [a, b, ...rest] = [10, 20, 30, 40, 50];
console.log(a);    // 10
console.log(b);    // 20
console.log(rest); // [30, 40, 50]


let [, , thirdOnly] = [10, 20, 30];
console.log(thirdOnly);


let numbers = [1,2,3,4,5];

console.log(numbers.map(n => n * 4));
//Transform each element with same length of array
console.log(numbers.filter(n => n > 2));
//Select elements that meet condition with same Length or fewer