// EX 01 nested ternary operator example
let score = 85;
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";
console.log(`Score: ${score}, Grade: ${grade}`); // Score: 85, Grade: B

// EX 02 nested ternary operator example

let age = 25;
let is_adult = age >= 18 ? (age >= 21 ? "Adult" : "Young Adult") : "Minor";
console.log(`Age: ${age}, Status: ${is_adult}`); // Age: 25, Status: Adult

let age1 = 19;
let is_abhijeet_life = age1 >= 18 ? (age1 >= 25 ? "Enjoying GOA & DRINK" : "Enjoying GOA Only") : "Not an Adult yet";

console.log(`Yes Abhijeet is ${is_abhijeet_life}`); 

// EX 03 nested ternary operator example
let temperature = 25;
let weather = temperature > 30 ? "Hot" : temperature > 20 ? "Warm" : "Cold";
console.log(`Temperature: ${temperature}°C, Weather: ${weather}`); // Temperature: 25°C, Weather: Warm

// EX 04 Interview Question: Nested Ternary Operator Example

let marks = 75;
let result = marks >= 90 ? "Excellent" : marks >= 75 ? "Good" : marks >= 50 ? "Average" : "Poor";
console.log(`Marks: ${marks}, Result: ${result}`); // Marks: 75, Result: Good

// EX 04 Interview Question: Nested Ternary Operator Example

let statusCode = 500;
let statusMessage = statusCode === 200 ? "OK" : 
       statusCode === 404 ? "Not Found" : 
          statusCode === 500 ? "Internal Server Error" : "Unknown Status";

console.log(`Status Code: ${statusCode}, Message: ${statusMessage}`); // Status Code: 500, Message: Internal Server Error

// EX 05 Interview Question: Nested Ternary Operator Example

let temp = 35;
let weatherStatus = temp > 40 ? "Very Hot" :
                    temp > 30 ? "Hot" :
                    temp > 20 ? "Warm" : 
                    temp > 10 ? "Cool" : "Cold";
    
console.log(`Temperature: ${temp}°C, Weather Status: ${weatherStatus}`); // Temperature: 35°C, Weather Status: Hot