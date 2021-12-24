"use strict";

const btnClickMe = document.getElementById("btn");

const randomColorFlipper = function () {
  // Generate a random color using random number and toString function and assign to a variable
  const randomColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
  // Change the CSS file body background
  document.body.style.background = randomColor;
  // Displaying the color serial number to the page
  document.getElementById("color").textContent = randomColor;
};

// Event creator for clicling the "click me" button
btnClickMe.addEventListener("click", randomColorFlipper);
