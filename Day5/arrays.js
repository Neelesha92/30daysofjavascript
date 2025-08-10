// create an array with values
const numbers = [0, 3.14, 9.81, 37, 98.6, 100]; // array of numbers
const fruit = ["banana", "orange", "mango", "lemon"]; // array of strings, fruits
const vegetables = ["Tomato", "Potato", "Cabbage", "Onion", "Carrot"];

//Array can have items of different data types
const arr = [
  "Asabeneh",
  250,
  true,
  { country: "Finland", city: "Helsinki" },
  { skills: ["HTML", "CSS", "JS", "React", "Python"] },
]; // arr containing different data types
console.log(arr);

//Creating an array using split
let js = "JavaScript";
const charsInJavaScript = js.split("");
console.log(charsInJavaScript); // ["J", "a", "v", "a", "S", "c", "r", "i", "p", "t"]

let companiesString = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
const companies = companiesString.split(",");
console.log(companies);

// accessing array items  using index
const fruits = ["banana", "orange", "mango", "lemon"];
let firstFruit = fruits[0]; // we are accessing the first item using its index
console.log(firstFruit); // banana

let lastIndex = fruits.length - 1;
lastFruit = fruits[lastIndex];

// modifying array element
const nums = [1, 2, 3, 4, 5];
nums[0] = 10; // changing 1 at index 0 to 10
nums[1] = 20; // changing  2 at index 1 to 20

console.log(nums); // [10, 20, 3, 4, 5]

// Methods to manipulate array
// 1. array constructor: to create an array
const arry = Array(); // creates an empty array
console.log(arry);

const eightEmptyValues = Array(8); // it creates eight empty values
console.log(eightEmptyValues); // [empty x 8]

// 2. fill : fills all the element with a static value
const eightXvalues = Array(8).fill("X"); // it creates eight element values filled with 'X'
console.log(eightXvalues); // ['X', 'X','X','X','X','X','X','X']

const eight0values = Array(8).fill(0); // it creates eight element values filled with '0'
console.log(eight0values); // [0, 0, 0, 0, 0, 0, 0, 0]

// 3. concatenating array using concat
const firstList = [1, 2, 3];
const secondList = [4, 5, 6];
const thirdList = firstList.concat(secondList);
console.log(thirdList);

//4. Length: to know the size of the array

const num = [1, 2, 3, 4, 5];
console.log(num.length);

//5. indexOf : to check if an item exist in an array. if it exists it returns the index else it returns -1

const list = [1, 2, 3, 4, 5];
console.log(list.indexOf(1)); //0
console.log(list.indexOf(5)); //4

// let us check if an avocado exist in the array
const fruitsList = ["banana", "orange", "mango", "lemon"];
let indexOfAvocado = fruitsList.indexOf("avocado"); // -1, if the element not found index is -1
if (indexOfAvocado === -1) {
  console.log("This fruit does not exist in the array");
} else {
  console.log("This fruit does exist in the array");
}
// This fruit does not exist in the array

// 6. lastIndexOf : it gives the position of the ;ast item in the array
const numList = [1, 2, 3, 4, 2, 1, 5, 3, 4];
console.log(numList.lastIndexOf(2));

//7. includes: to check if an item exists in an array. returns true or false

console.log(numbers.includes(1));
console.log(numbers.includes(0));

// 8. Array.isArray: To check if the data type is an array
const numbersOne = [1, 2, 3, 4, 5];
console.log(Array.isArray(numbersOne)); // true

const numberTwo = 100;
console.log(Array.isArray(numberTwo)); // false

// Converting array to string
console.log(numbersOne.toString()); // 1,2,3,4,5

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
console.log(names.toString()); // Asabeneh,Mathias,Elias,Brook

// joining array elements
//join: It is used to join the elements of the array, the argument we passed in the join method will be joined in the array and return as a string

console.log(numbers.join()); // 1,2,3,4,5

/* Slice: To cut out a multiple items in range. It takes two parameters:starting and ending position. It doesn't include the ending position.*/
console.log(numbers.slice()); // -> it copies all  item
console.log(numbers.slice(0)); // -> it copies all  item
console.log(numbers.slice(0, numbers.length)); // it copies all  item
console.log(numbers.slice(1, 4)); // -> [2,3,4] // it doesn't include the ending position

/* Splice: It takes three parameters:Starting position, number of times to be removed and number of items to be added. */

const numberList = [1, 2, 3, 4, 5, 6];
numberList.splice(3, 3, 7, 8, 9);
console.log(numberList.splice(3, 3, 7, 8, 9)); // -> [1, 2, 3, 7, 8, 9] //it removes three item and replace three items

// adding item to an array using push
/* Push: adding item in the end. To add item to the end of an existing array we use the push method.*/
const cars = ["toyota", "tesla"];
cars.push("renault");
console.log(cars);

/*pop: Removing item in the end. */
const listItems = ["item1", "item2", "item3"];
listItems.pop(); //removes one item from the end
console.log(listItems);

/* shift: removing one array element from the beginning of the array */
listItems.shift();
console.log(listItems);

/* unchift: add an element in the beginning */
listItems.unshift("Item0");
console.log(listItems);

/* reverse: reverse the order of an array */
listItems.reverse();
console.log(listItems);

/* sort: arrange array elements in ascending order. */
const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

webTechs.sort();
console.log(webTechs); // ["CSS", "HTML", "JavaScript", "MongoDB", "Node", "React", "Redux"]

webTechs.reverse(); // after sorting we can reverse it
console.log(webTechs); // ["Redux", "React", "Node", "MongoDB", "JavaScript", "HTML", "CSS"]

// Array of arrays
const arrayOfArray = [
  [1, 2, 3],
  [1, 2, 3],
];
console.log(arrayOfArray[0]); // [1, 2, 3]

const frontEnd = ["HTML", "CSS", "JS", "React", "Redux"];
const backEnd = ["Node", "Express", "MongoDB"];
const fullStack = [frontEnd, backEnd];
console.log(fullStack); // [["HTML", "CSS", "JS", "React", "Redux"], ["Node", "Express", "MongoDB"]]
console.log(fullStack.length); // 2
console.log(fullStack[0]); // ["HTML", "CSS", "JS", "React", "Redux"]
console.log(fullStack[1]); // ["Node", "Express", "MongoDB"]
