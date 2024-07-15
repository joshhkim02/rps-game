"use strict";

let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let choice = Math.floor(Math.random() * 3);
  if (choice === 0) {
    console.log("Computer: Rock");
  } else if (choice === 1) {
    console.log("Computer: Paper");
  } else if (choice === 2) {
    console.log("Computer: Scissors");
  }
  return choice;
}
let compChoice = getComputerChoice();
console.log(compChoice);
