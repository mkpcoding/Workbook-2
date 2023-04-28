"use strict";

// Grab HTML elements
// Get number 1 input
const numberOneInput = document.getElementById("numberOneInput");
// Get number 2 input
const numberTwoInput = document.getElementById("numberTwoInput");
// Get answer input
const answerOutput = document.getElementById("answerOutput");

// Get the values
function add() {
  // Get the number 1 input value
  const numberOne = Number(numberOneInput.value);
  // Get the number 2 input value
  const numberTwo = Number(numberTwoInput.value);
  // Calculate the answer
  const answer = numberOne + numberTwo;
  // Set answer input to the answer
  answerOutput.value =  answer;
}