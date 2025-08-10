// Iterate 0 to 10 using for loop, do the same using while and do while loop

for (let i = 0; i <= 10; i++) {
  console.log(i);
}

let j = 0;
while (j <= 10) {
  console.log(j);
  j++;
}

let pattern = "";

for (let i = 1; i <= 7; i++) {
  pattern += "#";
  console.log(pattern);
}

for (i = 0; i <= 10; i++) {
  console.log(`${i} * ${i} = ${i * i}`);
}

for (i = 0; i <= 10; i++) {
  console.log(`${i}  ${i ** 2}  ${i ** 3}`);
}

// Use for loop to iterate from 0 to 100 and print only even numbers

for (i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}

//Use for loop to iterate from 0 to 100 and print only odd numbers

for (i = 0; i <= 100; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}

// prime numbers

for (let i = 2; i <= 100; i++) {
  let isPrime = true;

  for (let j = 2; j <= Math.sqrt(i); j++) {
    if (i % j == 0) {
      isPrime = false;
      break;
    }
  }

  if (isPrime) {
    console.log(i);
  }
}

for (let i = 2; i <= 100; i++) {
  let count = 0;

  for (let j = 1; j <= i; j++) {
    if (i % j === 0) {
      count++;
    }
  }

  if (count === 2) {
    console.log(i);
  }
}

//Use for loop to iterate from 0 to 100 and print the sum of all numbers.

let sum = 0;
for (let i = 0; i <= 100; i++) {
  sum = sum + i;
}

console.log("the sum of all numbers from 0 to 100 is: ", sum);

// Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.

let sumEven = 0;
let sumOdd = 0;

for (let i = 0; i <= 100; i++) {
  if (i % 2 == 0) {
    sumEven = sumEven + i;
  } else {
    sumOdd = sumOdd + i;
  }
}

console.log(
  `The sum of all evens from 0 to 100 is ${sumEven} and sum of all odds from 0 to 100 is ${sumOdd} `
);

console.log([sumEven, sumOdd]);

const randomNumbers = [];

for (let i = 0; i < 5; i++) {
  const num = Math.floor(Math.random() * 101); // 0 to 100
  randomNumbers.push(num);
}

console.log("Random numbers:", randomNumbers);
