const title = document.getElementById("title");
const text = title.textContent;
title.textContent = "";

// Wrap each letter in a <span>
for (let i = 0; i < text.length; i++) {
  const span = document.createElement("span");
  span.textContent = text[i];
  title.appendChild(span);
}

const spans = document.querySelectorAll("#title span");
const body = document.body;

function randomColor(min = 0, max = 255) {
  const r = Math.floor(Math.random() * (max - min) + min);
  const g = Math.floor(Math.random() * (max - min) + min);
  const b = Math.floor(Math.random() * (max - min) + min);
  return `rgb(${r}, ${g}, ${b})`;
}

function randomPastelColor() {
  return randomColor(150, 230); // light color for background
}

function randomVibrantColor() {
  return randomColor(50, 220); // brighter colors for letters
}

function changeColors() {
  // change background smoothly
  body.style.backgroundColor = randomPastelColor();

  // change each letter’s color smoothly
  spans.forEach((span) => {
    span.style.color = randomVibrantColor();
  });
}

// initial colors
changeColors();

// repeat every 2 seconds
setInterval(changeColors, 2000);
