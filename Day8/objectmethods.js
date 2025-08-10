const person = {
  firstName: "Nilisha",
  lastName: "Maharjan",
  age: 25,
  country: "Nepal",
  city: "Lalitpur",
  skills: [
    "HTML",
    "CSS",
    "JavaScript",
    "React",
    "Node",
    "MongoDB",
    "Python",
    "D3.js",
  ],
  isMarried: false,
  address: {
    street: "Heitamienkatu 16",
    pobox: 2002,
    city: "Helsinki",
  },

  getFullName: function () {
    return `${this.firstName} ${this.lastName}`;
  },

  getLocation: function () {
    return `${this.country} ${this.city}`;
  },
  "phone number": "+3584545454545",
};

console.log(person.getFullName());

//accessing values using .
console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.getLocation());

//accessing values using square bracket and key name
console.log(person["firstName"]);
console.log(person["getFullName"]());

// to access the phone number we only use the square bracket method
console.log(person["phone number"]);

/* The getFullName is function inside the person object and
 we call it an object method.
 - this key: refers to obj itself, to access the values of diff properties
 */

// setting new key for an object

person.nationality = "Nepali";
person.country = "usa";
person.skills.push("Meteor");

console.log(person.country);

/* Object methods: methods to manipulate an object
    -Object.assign: to copy an object without modifying the original object 
    - Object.keys(): to get the keys or properties of an object as an array 
    - Object.values: to get values of an object as an array
    - object.entries: to get the keys and values in an array
    -hasOwnProperty: to checkif a specific key or property exist in an object.
    gives true or false value.

    */

// 1. Object.assign: to copy an obj without modifying original obj
const copyPerson = Object.assign({}, person);
console.log(copyPerson);

//2. Object.keys(): obj ko properties/keys haru array ko form ma lina
const keys = Object.keys(copyPerson);
console.log(keys);

const address = Object.keys(copyPerson.address);
console.log(address);

//3. Object.value(): to get values of an object as an array

const values = Object.values(copyPerson);
console.log(values);

//4. Object.entries: to get the keys and values in an array

const entries = Object.entries(copyPerson);
console.log(entries);

//5. hasOwnProperty: to check if a specific key or property exist in an object
console.log(copyPerson.hasOwnProperty("firstName"));
console.log(copyPerson.hasOwnProperty("score"));
