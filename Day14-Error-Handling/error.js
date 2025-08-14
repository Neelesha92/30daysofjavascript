/* Javascript is a loosely-typed language.
- runtime error ko lagi try-catch error block nai use garincha.
 */

/* try{
    // code that may throw an error.
}catch(err){
    // code to be executed if an error occurs
    // takes a parameter. common to pass e,err or error as a parameter to the catch block.
} finally{
    // code to be executed regardless of an error occurs or not
}
*/

try {
  let lastName = "Maharjan";
  let fullName = firstName + " " + lastName;
} catch (err) {
  console.log("Name of the error", err.name);
  console.log("Error message", err.message);
} finally {
  console.log("In any case I will be executed");
}

/* throw: the throw statement allows us to create a custom erro.
- use the throw statement to throw an exception.

throw 'Error2' - generates an exception with a string value
throw 42 - generates an exception with the value 42
throw true 
throw new Error('Requires') - generates an error object with the me
*/

const throwErrorExampleFun = () => {
  const readline = require("readline");

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  rl.question("Enter a number between 5 and 10: ", (x) => {
    try {
      if (x === "") throw "empty";
      if (isNaN(x)) throw "not a number";

      x = Number(x);
      if (x < 5) throw "too low";
      if (x > 10) throw "too high";

      console.log(`✅ Valid input: ${x}`);
    } catch (err) {
      console.log(`⚠ Error: ${err}`);
    } finally {
      rl.close();
    }
  });
};

throwErrorExampleFun();
