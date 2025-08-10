/* Destructuring: unpack arrays and object then assign to distinct variable. */

const number = [1, 2, 3];
let [numOne, numTwo, numThree] = number;

console.log(numOne, numTwo, numThree);

const names = ["Asabeneh", "Brook", "David", "John"];
let [firstPerson, secondPerson, thirdPerson, fourthPerson] = names;

console.log(firstPerson, secondPerson, thirdPerson, fourthPerson);

const fullStack = [
  ["HTML", "CSS", "JS", "React"],
  ["Node", "Express", "MongoDB"],
];
const [frontEnd, backEnd] = fullStack;

console.log(frontEnd);
console.log(backEnd);

// if we want to skip any value provided in an array then we can use additional comma to omit the value at the specific index
const numbers = [1, 2, 3];
const [numFirst, , numSecond] = numbers;

console.log(numFirst, numSecond);

// we can use default value in case the value of array for that index is undefined

const nameOfPeople = [undefined, "Brook", "David"];
let [firstOne = "Nilisha", secondOne, thirdone, fourthOne = "John"] =
  nameOfPeople;

console.log(firstOne, secondOne, thirdone, fourthOne);

// to assign variables to all the element in an array , we use spread operator(...)

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let [num1, num2, num3, ...rest] = nums;
console.log(num1, num2, num3);
console.log(rest);

// destructuring during iteration
const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

for (const [country, city] of countries) {
  console.log(country, city);
}

// Destructuringobject

const rectangle = {
  width: 20,
  height: 10,
  area: 200,
};

let { width, height, area } = rectangle;

console.log(width, height, area);

// renaming during destructuring

let { width: w, height: h, area: a, perimeter: p } = rectangle;

console.log(w, h, a, p);

//If the key is not found in the object the variable will be assigned to undefined.
const rectangleOne = {
  widthOne: 30,
  heightOne: 10,
  areaOne: 200,
  perimeterOne: 80,
};
let { widthOne, heightOne, areaOne, perimeterOne = 60 } = rectangleOne;

console.log(widthOne, heightOne, areaOne, perimeterOne); //20 10 200 60
//Let us modify the object:width to 30 and perimeter to 80

// default values only apply when the property is undefined.

// object parameter with destructuring

const rect = {
  width: 15,
  height: 15,
};

const calculatePerimeter = ({ width, height }) => {
  return 2 * (width + height);
};

console.log(calculatePerimeter(rect));
