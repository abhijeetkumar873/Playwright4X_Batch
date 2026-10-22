const data = require('fs').readFileSync(0, 'utf8');
let sideTriangle = data.split(" ");

if (sideTriangle.length !== 3) {
    console.log("Please enter 3 sides of triangle");
}
else 
    {
    let a = Number(sideTriangle[0]);
    let b = Number(sideTriangle[1]);
    let c = Number(sideTriangle[2]);

    if(a===b && b===c && a===c){
        console.log("Equilateral triangle");
    } 
    else if (a===b || b===c || a===c) 
    {
        console.log("Isosceles triangle");
    } 
    else if (a!==b && b!==c && a!==c)
    {
        console.log("Scalene triangle");
    }
}