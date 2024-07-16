"use strict";

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

function playGame() {
  let humanScore = 0;
  let computerScore = 0;

  function playRound(humanChoice, computerChoice) {
    if (humanChoice === 0 && computerChoice === 1) {
      console.log("You lose! Rock doesn't beat paper.");
      computerScore++;
    } else if (humanChoice === 0 && computerChoice === 2) {
      console.log("You win! Rock beats scissors.");
      humanScore++;
    } else if (humanChoice === 1 && computerChoice === 0) {
      console.log("You win! Paper beats rock.");
      humanScore++;
    } else if (humanChoice === 1 && computerChoice === 2) {
      console.log("You lose! Paper doesn't beat scissors.");
      computerScore++;
    } else if (humanChoice === 2 && computerChoice === 0) {
      console.log("You lose! Scissors doesn't beat rock.");
      computerScore++;
    } else if (humanChoice === 2 && computerChoice === 1) {
      console.log("You win! Scissors beats paper.");
      humanScore++;
    } else {
      console.log("It's a tie!");
    }
  }

  for (let i = 0; i <= 4; i++) {
    let compChoice = getComputerChoice();
    let playerChoice = getHumanChoice();
    playRound(playerChoice, compChoice);
  }
  console.log(`Player score: ${humanScore}`);
  console.log(`Computer score: ${computerScore}`);
}

playGame();
