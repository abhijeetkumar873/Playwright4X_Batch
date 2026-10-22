let original = [1, 2, 3];
let copy1 = [...original];
// console.log(original);
// console.log(copy1);

let copy2 = original.slice();
copy2.push(92);
copy1.push(93);
console.log(original);
console.log(copy1);
console.log(copy2);



// Deep cOPY
let deep_copy_array = original;
// Deep copy

deep_copy_array.push(91);
console.log(original);
console.log(deep_copy_array);

// Deep copy using JSON
let deep_copy_json = JSON.parse(JSON.stringify(original));
deep_copy_json.push(90);
console.log(original);
console.log(deep_copy_json);

// Deep copy using structuredClone
let deep_copy_structuredClone = structuredClone(original);
deep_copy_structuredClone.push(89);
console.log(original);
console.log(deep_copy_structuredClone);

// Deep copy using Array.from()
let deep_copy_array_from = Array.from(original);
deep_copy_array_from.push(88);
console.log(original);
console.log(deep_copy_array_from);

// Deep copy using slice()
let deep_copy_slice = original.slice();
deep_copy_slice.push(87);
console.log(original);
console.log(deep_copy_slice);

// Deep copy using concat()
let deep_copy_concat = [].concat(original);
deep_copy_concat.push(86);
console.log(original);
console.log(deep_copy_concat);

// Deep copy using map()
let deep_copy_map = original.map(x => x);
deep_copy_map.push(85);
console.log(original);
console.log(deep_copy_map);

// Deep copy using for loop
let deep_copy_for_loop = [];
for (let i = 0; i < original.length; i++) {
    deep_copy_for_loop.push(original[i]);
}
console.log(original);
console.log(deep_copy_for_loop);