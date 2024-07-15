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

function getHumanChoice() {
  let choice = parseInt(prompt("0 = Rock, 1 = Paper, 2 = Scissors"));
  if (choice === 0) {
    console.log("Player: Rock");
  } else if (choice === 1) {
    console.log("Player: Paper");
  } else if (choice === 2) {
    console.log("Player: Scissors");
  }
  return choice;
}
let playerChoice = getHumanChoice();
console.log(playerChoice);

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 0 && computerChoice === 1) {
    console.log("lose");
  } else if (humanChoice === 0 && computerChoice === 2) {
    console.log("win");
  } else if (humanChoice === 1 && computerChoice === 0) {
    console.log("win");
  } else if (humanChoice === 1 && computerChoice === 2) {
    console.log("lose");
  } else if (humanChoice === 2 && computerChoice === 0) {
    console.log("lose");
  } else if (humanChoice === 2 && computerChoice === 1) {
    console.log("win");
  } else {
    console.log("tie");
  }
}

playRound(playerChoice, compChoice);
