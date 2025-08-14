const allTitles = document.getElementsByTagName("h1");
console.log(allTitles);
console.log(allTitles.length);

for (let i = 0; i < allTitles.length; i++) {
  console.log(allTitles[i].innerText);
}
console.log("hello");
//getElementById()

let firstTitle = document.getElementById("first-title");
console.log(firstTitle);

// getting elements using query selector

let firstTitleQuery = document.querySelector("h1");
let firstTitleId = document.querySelector("#first-title");
let firstTitleClass = document.querySelector(".title");

// query selector all
const allTitle1 = document.querySelectorAll("h1");

console.log(allTitle1.length);
for (let i = 0; i < allTitle1.length; i++) {
  console.log(allTitle1[i].innerText);
}

const allTitles2 = document.querySelectorAll(".title");
allTitles2.forEach((title) => console.log(title));
