// time object
const now = new Date();
console.log(now);

console.log(now.getFullYear());
console.log(now.getMonth());

console.log(now.getDate());
console.log(now.getDay());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getTime());

const allSeconds = Date.now(); //
console.log(allSeconds);

const timeInSeconds = new Date().getTime();
console.log(allSeconds == timeInSeconds); // true
