/* class: A Class is like an object constructor, or a "blueprint" for creating objects.
        - class defines attributes and the behavior 

    syntax: 
    class ClassName{
        // code
    }

*/

/* class instantiation: creating an object from a class

class Person{
    // code goes here
}

const person = new Person();
console.log(person)

*/

/* class constructor: is a builtin function which allows as to create a blueprint for our object. 
The constructor function starts with a keyword constructor followed by a parenthesis. 
Inside the parenthesis we pass the properties of the object as parameter. 
We use the this keyword to attach the constructor parameters with the class. */

class Person {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

const person1 = new Person("Nilisha", "Maharjan", 20, "Nepal", "Lalitpur");
const person2 = new Person("Rida", "Maharjan", 20, "Nepal", "Lalitpur");
const person3 = new Person("Abraham", "Lincon", 20, "Nepal", "Lalitpur");
console.log(person1);
console.log(person2);
console.log(person3);

// default values with constructor: The constructor function properties may have a default value like other regular functions.

class PersonOne {
  constructor(
    firstName = "Asabeneh",
    lastName = "Yetayeh",
    age = 250,
    country = "Finland",
    city = "Helsinki"
  ) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }
}

const personOne = new PersonOne(); // default value
const personTwo = new PersonOne("Nilisha", "Maharjan", 30, "Nepal", "Lalitpur");
console.log(personOne);
console.log(personTwo);

// class Methods: javascript functions inside the class

class PersonMethod {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
  }

  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }
}

const personobj = new PersonMethod(
  "Nilisha",
  "Maharjan",
  23,
  "Nepal",
  "Lalitpur"
);
console.log(personobj.getFullName());

// Properties with initial value

class PersonProperties {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 0;
    this.skills = [];
  }
  getFullName() {
    const fullName = this.fullName + " " + this.lastName;
    return fullName;
  }
}

const personobj1 = new PersonProperties(
  "Lidiya",
  "Tekle",
  28,
  "Finland",
  "Espoo"
);
console.log(personobj1.score);
console.log(personobj1.skills);

/* Methods could be regular method or a getter or setter
1. getter: get method allow us to access value from the object.
    - keyword get followed by a function.
    -  Instead of accessing properties directly from the object we use getter to get the value.

2. setter: 
    - allows us to modify the value of certain properties
    - used for the validation- stop bad values from beimg set.

basically you can control getting the value and setting the value.
*/

class PersonGetSet {
  constructor(firstName, lastName, age, country, city) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.country = country;
    this.city = city;
    this.score = 550;
    this.skills = ["Coding"];
  }

  getFullName() {
    const fullName = this.firstName + " " + this.lastName;
    return fullName;
  }

  get getScore() {
    return this.score;
  }

  get getSkills() {
    return this.skills;
  }

  set setScore(score) {
    this.score += score;
  }

  set setSkills(skills) {
    this.skills.push(skills);
  }
}

const personObjGet = new PersonGetSet(
  "Nilisha",
  "Maharjan",
  233,
  "Nepal",
  "Lalitpur"
);
console.log(personObjGet.getScore);

console.log(personObjGet.getSkills);

personObjGet.setScore = 600;
personObjGet.setSkills = "HTML";

console.log(personObjGet.score);

/* static Methods: satic methods are not called on instances of the class. 
    - they are called on the class itself.
    - functions to create or clone objects
    eg: Date.now()

*/
