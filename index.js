let computerScore = 0;
let playerScore = 0;

// Computer Choice Generator

function getComputerChoice() {
  const choices = ["Scissors", "Paper", "Rock"];
  let numberPicker = Math.floor(Math.random() * choices.length);
  return choices[numberPicker];
}

// Game Logic

function playRound(playerSelection, computerSelection) {
  if (
    (playerSelection === "Rock" && computerSelection === "Paper") ||
    (playerSelection === "Scissors" && computerSelection === "Rock") ||
    (playerSelection === "Paper" && computerSelection === "Scissors")
  ) {
    roundStatus.innerText = `You lost this round! ${computerSelection} beats ${playerSelection}`;
    computerScore++;
    displayComputerScore.innerText = `Computer Score: ${computerScore}`;
  }

  if (
    (playerSelection === "Paper" && computerSelection === "Rock") ||
    (playerSelection === "Rock" && computerSelection === "Scissors") ||
    (playerSelection === "Scissors" && computerSelection === "Paper")
  ) {
    roundStatus.innerText = `You won this round! ${playerSelection} beats ${computerSelection}`;
    playerScore++;
    displayPlayerScore.innerText = `Your Score: ${playerScore}`;
  }

  if (playerSelection === computerSelection) {
    roundStatus.innerText = `You tied! You both chose ${playerSelection}`;
  }

  if (playerScore === 5) {
    roundStatus.innerText = `Game over! You won!`;
    playerScore = 0;
    computerScore = 0;
    displayPlayerScore.innerText = `Your Score: ${playerScore}`;
    displayComputerScore.innerText = `Computer Score: ${playerScore}`;
  }

  if (computerScore === 5) {
    roundStatus.innerText = `Game over! You lost, try again.`;
    playerScore = 0;
    computerScore = 0;
    displayPlayerScore.innerText = `Your Score: ${playerScore}`;
    displayComputerScore.innerText = `Computer Score: ${playerScore}`;
  }
}

// Player Choice Listener
function addContainerEventListener() {
  container.addEventListener("click", function (event) {
    if (
      event.target === rockButton ||
      event.target === paperButton ||
      event.target === scissorsButton
    ) {
      let playerSelection = event.target.getAttribute("id");
      let computerSelection = getComputerChoice();
      playRound(playerSelection, computerSelection);
    }
  });
}

// User Interface (UI)
const container = document.querySelector("#container");
const title = document.createElement("h1", "#title");
const roundStatus = document.createElement("h2");
const selectRoundStatus = document.querySelector("h2", "#roundStatus");
const displayComputerScore = document.createElement("p");
const displayPlayerScore = document.createElement("p");
const rockButton = document.createElement("button");
const paperButton = document.createElement("button");
const scissorsButton = document.createElement("button");

rockButton.textContent = "✊";
rockButton.setAttribute("id", "Rock");
paperButton.textContent = "🤚";
paperButton.setAttribute("id", "Paper");
scissorsButton.textContent = "✌️";
scissorsButton.setAttribute("id", "Scissors");
title.textContent = "Rock Paper Scissors";
title.setAttribute("id", "title");
displayComputerScore.innerText = `Computer: ${computerScore}`;
displayComputerScore.setAttribute("id", "computerScore");
displayPlayerScore.innerText = `Player: ${playerScore}`;
displayPlayerScore.setAttribute("id", "playerScore");

container.appendChild(title);
container.appendChild(displayComputerScore);
container.appendChild(displayPlayerScore);
container.appendChild(roundStatus);
container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

addContainerEventListener();

// Coded by DevonTheDeveloper on GitHub