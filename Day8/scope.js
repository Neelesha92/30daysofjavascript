/* scope: determines the accessibility or visibility of variables. 
    3 types of scope
    - block scope
    - function scope 
    - global scope
*/

/* 1. Block scope: let and const provides block scope in javascript
    -Variables declared inside a { } block cannot be accessed from outside the block
    {
        let x= 2;
    } 
    x cannot be used outside {}
    - variables declared with var keyword cannot have block scope.
    {
        var x =2;
    }
    x can be used outside {}
*/

/* 2. local scope:  
    1. block scope
    2. function scope
    Variables declared within a JavaScript function,
    are LOCAL to the function
    -variables with the same name can be used in different functions.
    -Variables declared with var, let and const 
    are quite similar when declared inside a function.
*/

// code here can NOT use carName

function myFunction() {
  let carName = "Volvo";
  // code here CAN use carName
}

// code here can NOT use carName
//

//variable scopes can be global , local
/* Window global object:  */
a = "javascript";
b = 10;
function letsLearnScope() {
  console.log(a, b);
  if (true) {
    console.log(a, b);
  }
}
console.log(a, b); // accessible

//Global scope:A variable declared outside a function, becomes GLOBAL.
let carName = "Volvo";
// code here can use carName

function myFunction() {
  // code here can also use carName
}

// If you assign a value to a variable that has not been declared, it will automatically become a GLOBAL variable.
