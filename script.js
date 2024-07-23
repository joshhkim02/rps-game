"use strict";
let humanScore = 0;
let computerScore = 0;
let gameActive = true;

// Create R/P/S buttons
const body = document.querySelector(".buttons");

const btnRock = document.createElement("button");
const btnPaper = document.createElement("button");
const btnScissors = document.createElement("button");

btnRock.textContent = "Rock";
btnPaper.textContent = "Paper";
btnScissors.textContent = "Scissors";

btnRock.setAttribute("class", "gameBtn");
btnPaper.setAttribute("class", "gameBtn");
btnScissors.setAttribute("class", "gameBtn");

body.appendChild(btnRock);
body.appendChild(btnPaper);
body.appendChild(btnScissors);

// Select score
const scoreSelector = document.querySelector(".score");

btnRock.addEventListener("click", () => {
  const choice = 0;
  playRound(choice, getComputerChoice());
  scoreSelector.textContent = `Player score: ${humanScore}, Computer score: ${computerScore}`;
  if (humanScore === 5 || computerScore === 5) {
    const winner = humanScore === 5 ? "Player wins!" : "Computer wins!";
    scoreSelector.textContent = winner;
    gameActive = false;
  }
});

btnPaper.addEventListener("click", () => {
  const choice = 1;
  playRound(choice, getComputerChoice());
  scoreSelector.textContent = `Player score: ${humanScore}, Computer score: ${computerScore}`;
  if (humanScore === 5 || computerScore === 5) {
    const winner = humanScore === 5 ? "Player wins!" : "Computer wins!";
    scoreSelector.textContent = winner;
    gameActive = false;
  }
});

btnScissors.addEventListener("click", () => {
  const choice = 2;
  playRound(choice, getComputerChoice());
  scoreSelector.textContent = `Player score: ${humanScore}, Computer score: ${computerScore}`;
  if (humanScore === 5 || computerScore === 5) {
    const winner = humanScore === 5 ? "Player wins!" : "Computer wins!";
    scoreSelector.textContent = winner;
    gameActive = false;
  }
});
// End of Create R/P/S buttons

// Update round outcome
const divSelector = document.querySelector(".outcome");

divSelector.textContent = "Pick any button! The computer is ready.";

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

function playRound(humanChoice, computerChoice) {
  if (humanChoice === 0 && computerChoice === 1) {
    divSelector.textContent = "You lose! Rock doesn't beat paper.";
    computerScore++;
  } else if (humanChoice === 0 && computerChoice === 2) {
    divSelector.textContent = "You win! Rock beats scissors.";
    humanScore++;
  } else if (humanChoice === 1 && computerChoice === 0) {
    divSelector.textContent = "You win! Paper beats rock.";
    humanScore++;
  } else if (humanChoice === 1 && computerChoice === 2) {
    divSelector.textContent = "You lose! Paper doesn't beat scissors.";
    computerScore++;
  } else if (humanChoice === 2 && computerChoice === 0) {
    divSelector.textContent = "You lose! Scissors doesn't beat rock.";
    computerScore++;
  } else if (humanChoice === 2 && computerChoice === 1) {
    divSelector.textContent = "You win! Scissors beats paper.";
    humanScore++;
  } else {
    divSelector.textContent = "It's a tie!";
  }
}
