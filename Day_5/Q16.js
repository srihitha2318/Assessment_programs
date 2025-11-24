
const isEven = (n) => n % 2 === 0;


let marks = 50; 

const result = marks >= 35 ? "Pass" : "Fail";

const greet = (name) => console.log(`Hello, ${name ? name : "Guest"}`);


console.log(isEven(4));
console.log(result);
greet("Srihitha");
greet();
