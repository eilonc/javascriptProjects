"use strict";

// Bank of colors
const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
// Declaring button for simplify
const btnClickMe = document.getElementById("btn");

// Function that will return a color from the bank
function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

// Function that will actually change the background and the display
const colorChanger = function () {
  const randColor = randomColor();
  document.body.style.background = randColor;
  document.getElementById("color").textContent = randColor;
};

// Event creator for clicling the "click me" button
btnClickMe.addEventListener("click", colorChanger);
