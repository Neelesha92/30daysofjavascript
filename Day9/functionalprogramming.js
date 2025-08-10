/* Instead of writing regular loop, latest version of JavaScript introduced lots of built in methods which can help us to solve complicated problems.  */

/* 1. forEach: iterate an array elements. 
    it takes : callback function with elements, index parameter, array


    syntax:
    Arr.forEach(function(element, index, arr){
    console.log(index,element,arr)

    // using arrow function
    arr.forEach((element,index,arr)=>{
        console.log(element, index,arr);
        })

    // arrow fxn with explicit return
    arr.forEach((element,index,arr)=> console.log(element,index,arr);)
})
*/

let sum = 0;
const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num) {
  sum = sum + num;
});
console.log(sum);

// countries to Uppercase
const countriesArr = ["Finland", "Denmark", "Sweden", "Norway", "Iceland"];
countriesArr.forEach(function (country) {
  console.log(country.toUpperCase());
});

/* Map: iterate an array elements and modify the array elements
    it takes:
    - callback function with elements
    - index
    -array parameter
    and returns a new array

    syntax:
    const modifiedArray = arr.map(function(element,index,arr){
        return element;
    })
*/

const numbersArr = [1, 2, 3, 4, 5];
const numberSquare = numbersArr.map((num) => num * num);

console.log(numberSquare);

const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const modifiedNames = names.map((name) => name.toUpperCase());
console.log(modifiedNames);

/* filter: filter out items which fulfils filtering conditions and return a new array.
 */

const countries = [
  "Albania",
  "Bolivia",
  "Canada",
  "Denmark",
  "Ethiopia",
  "Finland",
  "Germany",
  "Hungary",
  "Ireland",
  "Japan",
  "Kenya",
];

const countriesContainingLand = countries.filter((country) =>
  country.includes("land")
);

console.log(countriesContainingLand);

const countriesWithia = countries.filter((country) => country.endsWith("ia"));
console.log(countriesWithia);

const countriesWithFiveLetters = countries.filter(
  (country) => country.length == 5
);
console.log(countriesWithFiveLetters);

/* reduce: reduce array to a single value 
    syntax: 
    const result = array.reduce((accumulator,currentValue) =>{
        return updatedAccumulator;
        },initialValue);

*/

const nums = [1, 2, 3, 4, 5];
const total = nums.reduce((sum, numEach) => sum + numEach, 0);
console.log(total);

/* every: checks if all the elements in the array match a condition
    -returns true or false
    syntax:
    const result = array.every((element) => condition);
    */

const people = ["Alice", "Bob", "Charlie"];
const allAreStrings = names.every((name) => typeof name === "string");

console.log(allAreStrings);

const bools = [true, true, true, true];
const allTrue = bools.every((item) => item === true);
console.log(allTrue);

/* find: return the first element which satisfies the condition */
const ages = [24, 22, 25, 32, 35, 18];
const age = ages.find((age) => age > 20);
console.log(age);

const result = names.find((name) => name.length > 7);
console.log(result);

/* findIndex: returns the position of the first element which satisfies the condition */

const nameLength = names.findIndex((name) => name.length > 7);
console.log(nameLength);

const ageIndex = ages.findIndex((age) => age < 20);
console.log(ageIndex);

/* some: check if some of the elements are similar in one aspect.
    - it returns boolean
*/

const areSomeTrue = bools.some((b) => b === true);
console.log(areSomeTrue);

const hasEven = numbers.some((num) => num % 2 === 0);
console.log(hasEven);

/* sort():  reorders the array based on the values.
- changes the original array.
*/

// basic sort

const fruits = ["Banana", "Apple", "Cherry"];
fruits.sort();
console.log(fruits); // ['Apple', 'Banana', 'Cherry']

//numeric sort

const numbersList = [100, 2, 25, 4];
numbersList.sort((a, b) => a - b); //ascending
console.log(numbersList);

numbersList.sort((a, b) => b - a);
console.log(numbersList);

// object arrays

/*
syntax:
objArr.sort(function (a, b) {
  if (a.key < b.key) return -1;
  if (a.key >b.key) return 1;
  return 0; 
});
 */
