let age= 20;
let isAdult = age >= 18 ? true : false;
console.log(isAdult); // true

//EXAMPLE 2 when the condition will work

let actualState = "success";
let message = actualState === "success" ? "Operation was successful" : "Operation failed";
console.log(message); // Operation was successful


let actualStatusCode = 404;
let statusMessage = actualStatusCode === 200 ? "OK" : actualStatusCode === 404 ? "Not Found" : "Unknown Status";
console.log(statusMessage); // Not Found

//EXAMPLE 3

let responseCode = 850; //ms
let sla = 1000; // ms

let responseStatus = responseCode <= sla ? "Within SLA (tick)" : "Exceeded SLA (cross)";
console.log(`Response: ${responseCode} ms - ${responseStatus}`); // Response: 850 ms - Within SLA
//console.log(`Response time: ${responseCode} ms, SLA: ${sla} ms, Status: ${responseStatus}`); // Response time: 850 ms, SLA: 1000 ms, Status: Within SLA 

