/*1, setInterval: to do some activity continuously with in some interval of time. 
        repeats every x milliseconds 
    syntax:
    setInterval(callback, intervalInMilliseconds);        
*/

function sayHello() {
  console.log("Hello");
}

setInterval(sayHello, 1000); // prints hello every 1 second.

/* 2.setTimeout(): delays once then runs 
    - It runs the callback just once, after waiting.
    setTimeOut(callback, delayMilliseconds);
*/

function sayHello() {
  console.log("Hello");
}

setTimeout(sayHello, 2000); //prints "Hello" only once after 2 seconds

let count = 0;

const counter = () => {
  count++;
  console.log(`⏱️ ${count} seconds passed...`);
  if (count === 5) {
    clearInterval(timer); // stop after 5 times
    console.log("✅ Done!");
  }
};

const timer = setInterval(counter, 1000);
