// 1. forEach():Executes a provided function once for each array element.
const numbers = [10, 20, 30, 40, 50];
numbers.forEach(function (num) {
  console.log("Number is:", num);
});

//2. map(): when you want to change every item in the array and keep the result.

const increased = numbers.map(function (num) {
  return num + 5;
});

console.log("Increased numbers:", increased);

// 3. filter():  when you want to pick specific items from the array based on a rule.

const greaterThan30 = numbers.filter(function (num) {
  return num > 30;
});

console.log("Filtered numbers:", greaterThan30);
