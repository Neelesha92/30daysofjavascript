// 1. for loop
for (let i = 0; i <= 5; i++) {
  console.log(i);
}

// 0 1 2 3 4 5

for (let x = 5; x >= 0; x--) {
  console.log(x);
}

for (i = 0; i <= 5; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

//Creating a new array based on the existing array
const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const newArr = [];
for (let i = 0; i < countries.length; i++) {
  newArr.push(countries[i].toUpperCase());
}
console.log(newArr);
// ["FINLAND", "SWEDEN", "DENMARK", "NORWAY", "ICELAND"]

/* 2. while loop */
let j = 0;

while (j <= 5) {
  console.log(j);
  j++;
}

/* 3. do while  */
let k = 0;
do {
  console.log(k);
  k++;
} while (k <= 5);

/* 4. for of : We use for of loop for arrays. It is very hand way to iterate through an array if we are not interested in the index of each element in the array. */

const numbers = [1, 2, 3, 4, 5];

for (const num of numbers) {
  console.log(num);
}

for (const num of numbers) {
  console.log(num * num);
}

let sum = 0;

for (const num of numbers) {
  sum = sum + num;
}

console.log(sum);

const webTechs = [
  "HTML",
  "CSS",
  "JavaScript",
  "React",
  "Redux",
  "Node",
  "MongoDB",
];

for (const tech of webTechs) {
  console.log(tech.toUpperCase());
}

// HTML CSS JAVASCRIPT REACT NODE MONGODB

for (const tech of webTechs) {
  console.log(tech[0]); // get only the first letter of each element,  H C J R N M
}

/* break: Break is used to interrupt a loop.  */
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    break;
  }
  console.log(i);
}

// 0 1 2

/* continue:  skips a certain iterations  */
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    continue;
  }
  console.log(i);
}

// 0 1 2 4 5
