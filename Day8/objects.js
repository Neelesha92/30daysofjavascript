// object: key value pairs
// empty object :
const person = {};

const personOne = {
  firstName: "Nilisha",
  lastName: "Maharjan",
  age: 25,
  country: "Nepal",
  city: "Lalitpur",
  sskills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: true,
};
console.log(person);

/* We can access values of object using two methods:

- using . followed by key name if the key-name is a one word
- using square bracket and a quote */

console.log(personOne.firstName);
console.log(personOne.lastName);
console.log(personOne.age);
console.log(personOne.location);

// value can be accessed using square bracket and key name
console.log(personOne["firstName"]);
console.log(personOne["lastName"]);
console.log(personOne["age"]);
console.log(personOne["age"]);
console.log(personOne["location"]);

// for instance to access the phone number we only use the square bracket method
console.log(person["phone number"]);
