let firstName = "Nilisha";

console.log(typeof firstName);

let num = 10;
let num2 = "10";

console.log(num == num2);

let x = parseInt(9.8);
console.log(x == 10);

console.log(Boolean(1));
console.log(Boolean("hello"));
console.log(Boolean([]));

console.log(Boolean(0)); // false: zero is falsy
console.log(Boolean("")); // false: empty string is falsy
console.log(Boolean(null)); // false: null is falsy

console.log(4 > 3); // true
console.log(4 >= 3); // true
console.log(4 < 3); // false
console.log(4 <= 3); // false
console.log(4 == 4); // true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != "4"); // false
console.log(4 == "4"); // true
console.log(4 === "4"); // false

let word1 = "python";
let word2 = "jargon";

console.log(word1.length); // 6
console.log(word2.length); // 6

// Falsy comparison
console.log(word1.length != word2.length);

//6.

console.log(4 > 3 && 10 < 12); // true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!false); // true
console.log(!(4 > 3 && 10 < 12)); // false
console.log(!(4 === "4")); // true

let text1 = "dragon";
let text2 = "python";

console.log(text1.includes("on")); // true
console.log(text2.includes("on")); // true

console.log(!text1.includes("on") && !text2.includes("on")); // false

const now = new Date();

// 1. What is the year today?
console.log(now.getFullYear());

// 2. What is the month today as a number?
console.log(now.getMonth() + 1);

// 3. What is the date today?
console.log(now.getDate());

// 4. What is the day today as a number?
console.log(now.getDay());

// 5. What are the hours now?
console.log(now.getHours());
// 6. What are the minutes now?
console.log(now.getMinutes());

// 7. Find out the number of seconds elapsed from January 1, 1970 to now
console.log(Math.floor(now.getTime() / 1000));

// level 2

//Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).

let base = prompt("Enter base of the triangle");
let height = prompt("Enter the height of the triangle.");

base = parseFloat(base);
height = parseFloat(height);

let area;
area = 0.5 * base * height;
alert("The area of the triangle is: " + area);
