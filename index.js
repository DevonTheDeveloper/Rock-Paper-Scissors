const container = document.querySelector("#container");
const title = document.createElement("h1");
const rockButton = document.createElement("button", "#rock");
const paperButton = document.createElement("button", "#paper");
const scissorsButton = document.createElement("button", "#scissors");

let computerScore = 0;
let playerScore = 0;
let playerSelection = undefined;
let computerSelection = getComputerChoice();

rockButton.textContent = "ROCK";
rockButton.setAttribute("id", "rock");
paperButton.textContent = "PAPER";
paperButton.setAttribute("id", "paper");
scissorsButton.textContent = "SCISSORS";
scissorsButton.setAttribute("id", "scissors");

container.appendChild(rockButton);
container.appendChild(paperButton);
container.appendChild(scissorsButton);

function getComputerChoice() {
  const choices = ['rock', 'paper', 'scissors'];
  let numberPicker = Math.floor(Math.random() * choices.length);
  return choices[numberPicker];
};


// User Interface (UI)
container.addEventListener("click", function (event) {
  if (
    event.target === rockButton ||
    event.target === paperButton ||
    event.target === scissorsButton
  ) {
    playerSelection = event.target.getAttribute("id");
  }
  for (let i = 0; i < 5;) {
    playRound(playerSelection, computerSelection)
      i++;
  };
});
