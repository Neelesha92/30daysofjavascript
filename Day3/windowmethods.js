/* Window alert() method:displays an alert box with a specified message and an OK button.
 It is a builtin method and it takes on argument.    
*/

alert("Welcome to 30DaysOfJavaScript");

/* Window prompt():display a prompt box with an input on your browser to take input values
 and the input data can be stored in a variable.   */
let number = prompt("Enter number", "number goes here");
console.log(number);

/* Window confirm(): The confirm() method displays a dialog box with a
 specified message, along with an OK and a Cancel button. */
const agree = confirm("Are you sure you like to delete? ");
console.log(agree); // result will be true or false based on what you click on the dialog box
