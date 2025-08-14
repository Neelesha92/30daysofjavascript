const wrapper = document.querySelector(".wrapper");
const h1 = document.querySelector("h1");
const h2 = document.querySelector("h2");
const listItems = document.querySelectorAll("li");

const dateTime = document.createElement("h3");
dateTime.style.padding = "10px";
dateTime.style.color = "white";
dateTime.style.textAlign = "center";
wrapper.insertBefore(dateTime, wrapper.children[2]);

// function to generate random color

const randomColor = () => {
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  return `rgb(${r},${g},${b})`;
};

// year color changes every second
const yearText = h1.textContent;
h1.innerHTML = yearText.replace(/2020/, `<span id="year">2020</span>`);
const yearSpan = document.getElementById("year");

setInterval(() => {
  yearSpan.style.color = randomColor();
}, 1000);

// date and time background color changes every second

setInterval(() => {
  const now = new Date();
  dateTime.textContent = now.toLocaleString();
  dateTime.style.backgroundColor = randomColor();
}, 1000);

// style list items based on challenge status

listItems.forEach((item) => {
  item.style.listStyle = "none";
  item.style.padding = "10px";
  item.style.margin = "5px 0";
  item.style.color = "white";

  if (item.textContent.includes("Done")) {
    item.style.backgroundColor = "green";
  } else if (item.textContent.includes("Ongoing")) {
    item.style.backgroundColor = "Yellow";
  } else if (item.textContent.includes("Coming")) {
    item.style.backgroundColor = "red";
  }
});
