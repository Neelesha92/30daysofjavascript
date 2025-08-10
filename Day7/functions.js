/* A function can be declared or created in couple of ways 
    1. Declaration function
    2. Expression function
    3. Anonymous function
    4. Arrow function

*/

// function without parameter,  a function which make a number square
function square() {
  let num = 2;
  let sq = num * num;
  console.log(sq);
}

square(); // 4

// function without parameter
function addTwoNumbers() {
  let numOne = 10;
  let numTwo = 20;
  let sum = numOne + numTwo;

  console.log(sum);
}

addTwoNumbers();

// functions returning value:  if a function does not return values the value of the function is undefined

function printFullName() {
  let firstName = "Asabeneh";
  let lastName = "Yetayeh";
  let space = " ";
  let fullName = firstName + space + lastName;
  return fullName;
}
console.log(printFullName());

// function with a parameter

function areaOfCircle(r) {
  let area = Math.PI * r * r;
  return area;
}

console.log(areaOfCircle(10));

// function with two parameters

function sumOfTwoNumbers(numOne, numTwo) {
  let sum = numOne + numTwo;
  console.log(sum);
}

sumOfTwoNumbers(1, 5);

// function with many parameters

function sumArrayValues(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum = sum + arr[i];
  }
  return sum;
}

const numbers = [1, 2, 3, 4, 5];
console.log(sumArrayValues(numbers));

//Unlimited number of parameters in regular function

function sumAllNums() {
  let sum = 0;
  for (let i = 0; i < arguments.length; i++) {
    sum += arguments[i];
  }
  return sum;
}

console.log(sumAllNums(1, 2, 3, 4));

//3. Anonymous Function: function without name

const anonymousFun = function () {
  console.log(
    "I am an anonymous function and my value is stored in anonymousFun"
  );
};

// 2. Expression function:  After we create a function without a name and we assign it to a variable.

const squared = function (n) {
  return n * n;
};
console.log(squared(2));

//3. self invoking function : anonymous functions which do not need to be called to return a value.
/* Function expressions will execute automatically if the expression is followed by (). */
(function () {
  let x = "Hello!";
})();

// function with default parameter
function greetings(name = "Peter") {
  let message = `${name}, welcome to 30 Days Of JavaScript!`;
  return message;
}

console.log(greetings());
console.log(greetings("Nilisha"));

function calculateAge(birthyear, currentYear = 2025) {
  let currentAge = currentYear - birthyear;
  return currentAge;
}

console.log(calculateAge(2000));

// 4. arrow functions: alternative to write a function
/* Arrow function uses arrow instead of the keyword function to declare a function. 
    - With arrow functions the this keyword always represents the object that defined the arrow function.
*/

const squareArrow = (n) => {
  return n * n;
};
console.log(squareArrow(2));

const changeToUpperCase = (arr) => {
  const newArr = [];
  for (const element of arr) {
    newArr.push(element.toUpperCase());
  }
  return newArr;
};
const countries = ["nepal", "india", "veitnam"];
console.log(changeToUpperCase(countries));

// if the function has only one statement that returns a value
let hello = () => "Hello World!";

let myFunction = (x, y) => {
  x * y;
};
