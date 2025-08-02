/* Conditions : 
    - if
    - if else
    - if else if else
    - switch
    - ternary operator
*/

// 1. If
let num = 3;
if (num > 0) {
  console.log(`${num} is a positive number`);
}

//2. If ELse
let num2 = 3;
if (num2 > 0) {
  console.log(`${num2} is a positive number`);
} else {
  console.log(`${num2} is a negative number`);
}
//  3 is a positive number

let num3 = -3;
if (num3 > 0) {
  console.log(`${num3} is a positive number`);
} else {
  console.log(`${num3} is a negative number`);
}

// if else if else

let a = 0;
if (a > 0) {
  console.log(`${a} is a positive  number`);
} else if (a < 0) {
  console.log(`${a} is a negative number`);
} else if (a == 0) {
  console.log(`${a} is zero`);
} else {
  console.log(`${a} is not a number`);
}

// switch
let weather = "cloudy";
switch (weather) {
  case "rainy":
    console.log("You need a rain coat.");
    break;
  case "cloudy":
    console.log("It might be cold, you need a jacket.");
    break;
  case "sunny":
    console.log("Go out freely.");
    break;
  default:
    console.log(" No need for rain coat.");
}

// Ternary Operators
let isRaining = true;
isRaining
  ? console.log("You need a rain coat.")
  : console.log("No need for a rain coat.");
