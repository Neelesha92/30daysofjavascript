/* high order function: functions which take other function as a parameter or return a function 
        as a value.
        - function passed as a parameter is called callback.
*/

/* callback: a function which can be passed as parameter to other function. */

function square(n) {
  return n ** 2;
}

function cube(square, n) {
  return square(n) * n;
}

console.log(cube(square, 3));

/* returning function: Higher order functions return function as a value​ */
const highOrder = (n) => {
  const doSomething = (m) => {
    const doWhatEver = (t) => {
      return 2 * n + 3 * m + t;
    };
    return doWhatEver;
  };
  return doSomething;
};

console.log(highOrder(2)(3)(10));

const numbers = [1, 2, 3, 4];

const sumArray = (arr) => {
  let sum = 0;
  arr.forEach(function (element) {
    sum += element;
  });
  return sum;
};

console.log(sumArray(numbers));

function greet() {
  return function () {
    console.log("Hello from the returned fuction");
  };
}

const hello = greet();
hello();

/* settingtime: we can execute some activities in a certain interval of time or we can schedule(wait) for some time to execute some activities.
    - setInterval
    - setTimeout
*/

/* 1. setInterval:  */
