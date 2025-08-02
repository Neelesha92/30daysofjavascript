// 1. Length: returns the number of character in a string included empty space.

let js = "JavaScript";
console.log(js.length); // 10
let firstName = "Nilisha";
console.log(firstName.length); // 7

// 2. Accessing characters in a string

let string = "JavaScript";
let firstLetter = string[0];

console.log(firstLetter); // J

let secondLetter = string[1]; // a
let thirdLetter = string[2];
let lastLetter = string[9];

console.log(lastLetter); // t

let lastIndex = string.length - 1;

console.log(lastIndex); // 9
console.log(string[lastIndex]); // t

// 3. toUpperCase(): changes the string to uppercase letters.
console.log(string.toUpperCase());

// 4. toLowerCase(): change the string to lowercase

console.log(string.toLowerCase());

// 5. substr(): it takes two arguments, the starting index and number of characters to slice.

console.log(string.substr(4, 6));

//6. substring(): it takes 2 args, starting index and stopping index but it doesn't include the char at the stopping index

console.log(string.substring(0, 4)); // java

// 7. split(): splits a string at a specified place
let stringOne = "30 Days Of JavaScript";
console.log(stringOne.split());
console.log(stringOne.split(" "));

//8. trim(): removes trailing space in the beginning or the ending of a string.

let stringTwo = "   30 Days Of JavaScript   ";

console.log(stringTwo);
console.log(stringTwo.trim(" "));

//9.includes(): it checks if substring argument exists in the string.

console.log(stringTwo.includes("Days"));
console.log(stringTwo.includes("days")); //false - it is case sensitive

// 10. replace(): takes as a parameter the old substring and anew substring.
// string.replace(oldsubstring, newsubstring);
console.log(stringTwo.replace("Days", "days"));

// 11. chatAt(): Takes index and returns the value at that index
console.log(stringOne.charAt(0));

// 12. charCodeAt(): Takes index and it returns char code of the value at that index
console.log(stringOne.charCodeAt(3));

// 13. indexOf():Takes a substring and if the substring exists in a string it returns the first position of the substring if does not exist it returns -1

console.log(stringOne.indexOf("D"));
console.log(stringOne.indexOf("Days"));
console.log(stringOne.indexOf("days")); // -1

// 14. lastIndexOf():Takes a substring and if the substring exists in a string it returns the last position of the substring if it does not exist it returns -1

let text =
  "I love JavaScript. If you do not love JavaScript what else can you love.";

console.log(text.lastIndexOf("love")); // 67
console.log(text.lastIndexOf("you")); // 63
console.log(text.lastIndexOf("JavaScript")); // 38

// 15. concat(): it takes many substrings and joins them

let country = "Fin";
console.log(country.concat("land"));

// startsWith(): it takes a substring as an argument and it checks if the string starts with that specified substring. It returns a boolean(true or false)

console.log(country.startsWith("Fin")); // true
console.log(country.startsWith("fin")); // false
console.log(country.startsWith("land")); //  false

// endsWith(): it takes a substring as an argument and it checks if the string ends with that specified substring. It returns a boolean(true or false).

console.log(country.endsWith("land")); // true
console.log(country.endsWith("fin")); // false
console.log(country.endsWith("Fin")); //  false

// 18. search:it returns the index of the first match , value can me string or regular exp
console.log(text.search("love"));
console.log(text.search(/javascript/gi)); // g-means to search in the whole text, i - case insensitive

//19. match:it takes a substring or regular expression pattern as an argument and it returns an array if there is match if not it returns null.
console.log(text.match("love"));

//20. repeat():it takes a number as argument and it returns the repeated version of the string.

let repeat_string = "test";
console.log(repeat_string.repeat(10));
