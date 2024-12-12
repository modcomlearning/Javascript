//Arrow Functions with Parameters
const greet = (name) => {
    console.log("Hello, "+name);
};

greet("Alice");  // Output: Hello, Alice!
greet("Bob");    // Output: Hello, Bob!


// Arrow Function to Add 2 Numbers with Parameters
const sum = (num1, num2) => {
    let answer = num1 + num2;
    console.log("Your Answer is "+answer);
    //console.log(`Your Answer is ${answer}`);
}

// Call Function
sum(num1=12, num2=45);
sum(num1=15, num2=46);