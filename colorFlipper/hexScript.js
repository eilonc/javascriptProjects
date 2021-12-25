"use strict";

// All letters/numbers that possible in a color id
const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

// Declaring button for simplify
const btnClickMe = document.getElementById("btn");

// Function that will actial change the color and the display on screen
function hexColorFlipper() {
  document.body.style.background = hexGenerator();
  document.getElementById("color").textContent = hexGenerator();
}

// Function that will generate a color through the hex array
function hexGenerator() {
  let hexColor = "#";
  for (let i = 0; i < 6; i++) {
    hexColor += hex[getRandomNumber()];
    //   console.log(hexColor);
  }
  return hexColor;
}

// Function that will generate a random number with maximum of hex length
function getRandomNumber() {
  return Math.floor(Math.random() * hex.length);
}

// Event creator for clicling the "click me" button
btnClickMe.addEventListener("click", hexColorFlipper);
