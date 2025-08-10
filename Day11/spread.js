/* Spread or rest operator: 
    - They use the same syntax, but their meaning changes based on the context:
*/

/* 1. ... in function call/ array / object creation: it breaks apart iterable into elements 
   2. ... in destruturing : gathers remaining values into an array or object 
*/

// rest operator in destructuring arrays

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, nim3, ...rest] = nums;

// skipping elements in destructuring
const countries = [
  "Germany",
  "France",
  "Belgium",
  "Finland",
  "Sweden",
  "Norway",
  "Denmark",
  "Iceland",
];

let [germ, fran, , ...otherCountries] = countries;
console.log(germ, fran);
console.log(otherCountries);

// spread operator to copy array

const evens = [0, 2, 4, 6, 8, 10];
const evenNumbers = [...evens];

const odds = [1, 3, 5, 7, 9];
const oddNumbers = [...odds];

const wholeNumbers = [...evens, ...odds];
console.log(wholeNumbers);

// spread operator to copy object
const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

const copiedUser = { ...user };
console.log(copiedUser);

// modifying or changing the object while copying
const userOne = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
};

const copyUser = { ...userOne, title: "instructor" };
console.log(copyUser);

// spread operator with arrow function

const sumAllNums = (...args) => {
  console.log(args);
};

sumAllNums(1, 2, 3, 4, 5, 6, 7);

const sumAllNumbers = (...args) => {
  let sum = 0;
  for (const num of args) {
    sum = sum + num;
  }
  return sum;
};

console.log(sumAllNumbers(1, 2, 3, 4, 5));
