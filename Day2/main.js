// template literals

console.log("The sum of 2 and 3 is 5");
let a = 2;
let b = 3;

console.log(`The sum of ${a} and ${b} is ${a + b}`);

let firstName = "Nilisha";
let lastName = "Maharjan";
let country = "Nepal";
let city = "Lalitpur";
let language = "JavaScript";
let job = "student";
let age = 250;
let fullName = firstName + " " + lastName;

let personInfoTwo = `I am ${fullName}. I am ${age}. I live in ${country}.`; //ES6 - String interpolation method
let personInfoThree = `I am ${fullName}. I live in ${city}, ${country}. I am a ${job}. I teach ${language}.`;
console.log(personInfoTwo);
console.log(personInfoThree);
