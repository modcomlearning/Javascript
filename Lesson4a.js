function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice");  // Output: Hello, Alice!
greet("Bob");    // Output: Hello, Bob!

//My County function
function myCounty(county_name){
    console.log("My County is "+county_name)
}

//Call function with arguments
myCounty("Kiambu")
myCounty("Nakuru")
myCounty("Kitui")


// Function to Add 2 Numbers with Parameters
function sum(num1, num2){
    let answer = num1 + num2
    console.log(`Your Answer is ${answer}`)
}

// Call Function with arguments
sum(num1=12, num2=14)