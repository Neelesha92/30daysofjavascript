/* Closure:
- allows writing function inside an outer function.
- we can write as many inner functions as we want
- if inner function access the variables of outer function then it is called closure.
*/

function outerFunction() {
  let count = 0;
  function plusOne() {
    count++;
    return count;
  }

  function minusOne() {
    count--;
    return count;
  }

  return {
    plusOne: plusOne(),
    minusOne: minusOne(),
  };
}

const innerFunc = outerFunction();

console.log(innerFunc.plusOne);
console.log(innerFunc.minusOne);
