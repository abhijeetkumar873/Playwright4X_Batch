let a = {status : "pass"};
let b =a;
b.status = "fail";
console.log(a.status);