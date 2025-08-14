/* Callbacks: 
- JS used callbackfunctions to handle these asynchronous tasks.
- A callback function passed as an argument to another function, to be "called back" laster
- when you have multiple asynchronous operations that depend on each other, you end up nesting callbacks.(callback hell / Pyramid doom)
- 

*/

/* Promise:
    - a way to handle asynchronous operations(eutai time ma nahune) in javascript
    - is an object that represents the eventual completion / failure of an asynchronous operation and it's resulting value
    
A promise can be in three states:
- Pending: The initial state; the operation has not completed yet.
- fulfilled: The operation completed successfully, and the promise now has
            a resulting value.
- rejected: The operation failed, and the promise has a reason for the failure.(an error)
*/

// promise constructor, which takes a function with two parameters: resolve and reject

const myPromise = new Promise((resolve, reject) => {
  //Asynchronous operation here
  let operationSuccessful = true;

  if (operationSuccessful) {
    resolve("The operation was successful!");
  } else {
    reject("The operation failed.");
  }
});

/* to consume the value of a promise, you use the .then() and .catch() methods 
 - .then(): is called when the promise is fulfilled. It takes a callback function that
 receives the resolved value.
 - .catch(): is called when the promise is rejected. It takes a callback function that receives the error.

 .then() and .catch(), themselves return a new promise. this allows you to chain promises together
*/

myPromise
  .then((successMessage) => {
    console.log(successMessage);
  })
  .catch((errorMessage) => {
    console.error(errorMessage);
  });

const doPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const skills = ["HTML", "CSS", "JS"];
    if (skills.includes("Node")) {
      resolve("fullstack developer");
    } else {
      reject("something wrong has happened");
    }
  }, 2000);
});

doPromise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => console.error(error));

/* Fetch API with Promises
- fetch() method is a modern replacement for XMLHttpRequest and returns a promise that 
resolves to the Response object representing the response to uour request.
*/

const url = "https://restcountries.com/v2/all";
fetch(url)
  .then((response) => response.json())
  .then((data) => {
    console.log(data);
  })
  .catch((error) => console.error(error));

/* Async/Await: 
- yesle asynchronous code lai synchronous (ek pachi arko line ma chalne) jastai dekhaucha
- jasle garda code padhna ajhai sajilo huncha

Async: yo function le sadhai euta promise farkaucha
await: it can be used inside async function. 
- yesle promise ko result na aayedamma wait garcha ra code lai teii rokcha(tara background ma aru kam vairako huncha)

*/

const fetchData = async () => {
  try {
    const response = await fetch(url); // response na aaye samma parkhine
    const countries = await response.json(); // JSON  ma convert navayesamma wait garne
    console.log(countries);
  } catch (err) {
    console.error(err);
  }
};

fetchData();
