console.log(typeof "Hello!");

let myAge = 24;
let yourAge = 25;

console.log("I am " + myAge + "Years old.");
console.log("You are" + yourAge + "Years old.");

let nums = [1, 2, 3];
nums[0] = 10;

console.log(nums);

let numbers = [1, 2, 3];

console.log(nums == numbers); // false

let userOne = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};

let userTwo = {
  name: "Asabeneh",
  role: "teaching",
  country: "Finland",
};

console.log(userOne == userTwo); // false
