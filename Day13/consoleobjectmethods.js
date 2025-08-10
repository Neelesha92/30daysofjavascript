/* 
document.write: to shouw output on the browser document(view port).
for testing and debugging purposes.

- we use document.getElementById() when we like to interact with DOM 

*/

/* Console.log : to show output on the browser console. */
console.log("30 Days of JavaScript");

console.log("%d %s of JavaScript", 30, "Days");

console.log("%c30 Days Of JavaScript", "color:green"); // log output is green
console.log(
  "%c30 Days%c %cOf%c %cJavaScript%c",
  "color:green",
  "",
  "color:red",
  "",
  "color:yellow"
); // log output green red and yellow text

/* console.warn():to give warning on the browser */

console.warn("This is a warning");

/* console.error(): shows an error message */

console.error("This is an error message");

/* console.table(): display data as a table on the console  */
const names = ["Asabeneh", "Brook", "David", "John"];
console.table(names);

const user = {
  name: "Asabeneh",
  title: "Programmer",
  country: "Finland",
  city: "Helsinki",
  age: 250,
};
console.table(user);

// console.time(): Starts a timer you can use to track how long an operation takes

const countries = [
  ["Finland", "Helsinki"],
  ["Sweden", "Stockholm"],
  ["Norway", "Oslo"],
];

console.time("Regular for loop");
for (let i = 0; i < countries.length; i++) {
  console.log(countries[i][0], countries[i][1]);
}
console.timeEnd("Regular for loop");

console.time("for of loop");
for (const [name, city] of countries) {
  console.log(name, city);
}
console.timeEnd("for of loop");

console.time("forEach loop");
countries.forEach(([name, city]) => {
  console.log(name, city);
});
console.timeEnd("forEach loop");

// console.info(): it displays information message on browser console
console.info("30 Days Of JavaScript challenge is trending on Github");
console.info("30 Days Of fullStack challenge might be released");
console.info("30 Days Of HTML and CSS challenge might be released");

// console.assert ():writes an error message to the console if the assertion is false. If the assertion is true, nothing happens.

console.assert(4 > 3, "4 is greater than 3"); // no result
console.assert(3 > 4, "3 is not greater than 4"); // Assertion failed: 3 is not greater than 4

for (let i = 0; i <= 10; i += 1) {
  let errorMessage = `${i} is not even`;
  console.log("the # is " + i);
  console.assert(i % 2 === 0, { number: i, errorMessage: errorMessage });
}

//console.count():It prints the number of times the console.count() is called
/* used to count number of times a function is called. */

const func = () => {
  console.count("Function has been called");
};
func();
func();
func();

//console.clear(): cleans the browser
