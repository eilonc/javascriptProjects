"use strict";

const resetBtn = document.getElementById("resetBtn");
const incBtn = document.getElementById("incBtn");
const decBtn = document.getElementById("decBtn");
let counter = 0;
const counterEl = document.getElementById("value");
let counterValue = document.getElementById("value").textContent;

function colorChange() {
  if (counter === 0) {
    counterEl.style.color = "black";
  } else if (counter < 0) {
    counterEl.style.color = "red";
  } else {
    counterEl.style.color = "green";
  }
}

function initState() {
  counter = 0;
  counterEl.textContent = counter;
  colorChange();
  // console.log("Reset button clicked");
}

function dec() {
  counter--;
  // console.log(counter);
  document.getElementById("value").textContent = counter;
  // console.log(counterValue);
  // console.log("Decrease button clicked");
  colorChange();
}

function inc() {
  counter++;
  // console.log(counter);
  document.getElementById("value").textContent = counter;
  colorChange();
}

resetBtn.addEventListener("click", initState);
decBtn.addEventListener("click", dec);
incBtn.addEventListener("click", inc);
