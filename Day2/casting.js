// checking datatypes
// Different javascript data types
// Let's declare different data types

let firstName = "Nilisha"; // string
let lastName = "Maharjan"; // string
let country = "Nepal"; // string
let city = "Lalitpur"; // string
let age = 25; // number
let job; // undefined, because a value was not assigned

console.log(typeof "Nilisha"); // string
console.log(typeof firstName); // string
console.log(typeof 10); // number
console.log(typeof 3.14); // number
console.log(typeof true); // boolean
console.log(typeof false); // boolean
console.log(typeof NaN); // number
console.log(typeof job); // undefined
console.log(typeof undefined); // undefined
console.log(typeof null); // object

// casting: Converting one data type to another data type

// 1. string to int
/* Methods to convet string to integer:
  - ParseInt()
  - Number()
  - Plus sign(+)
*/
let num = "10";
let numInt = parseInt(num);
console.log(numInt); // 10

let num1Int = Number(num);
console.log(num1Int); // 10

let num2Int = +num;
console.log(num2Int); // 10

/* 2. String to float:
    - parseFloat()
    - Number()
    - plus sign(+)
*/

let num1 = "9.81";
let numFloat = parseFloat(num1);

console.log(numFloat); // 9.81

let num1Float = Number(num1);
console.log(num1Float); // 9.81

let num2Float = +num1;
console.log(num2Float);

/* Float to int :
    - parseInt()
*/

let number = 9.81;
let numberInt = parseInt(number);

console.log(numberInt); // 9
