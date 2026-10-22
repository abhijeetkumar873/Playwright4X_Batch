let age = 7;
while(true){
    if( age > 10){
        break;
    }else{
        console.log(age);
    }
    age++;
}

let attempts = 0; // Init

while (attempts < 3) {
    console.log("Attempt", attempts);
    attempts++;
}