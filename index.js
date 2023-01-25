let computerScore = 0;
let playerScore = 0;
let playerSelection = "";
let computerSelection = getComputerChoice();

function getComputerChoice(computerSelection) {
  const choices = ["rock", "paper", "scissors"];
  let numberPicker = Math.floor(Math.random() * choices.length);
  return choices[numberPicker];
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection.toLowerCase() === computerSelection) {
    return console.log(
      "You tied, you both chose " +
        computerSelection +
        "\nComputer Score: " +
        computerScore +
        " Your Score: " +
        playerScore
    );
  }

  if (
    (playerSelection.toLowerCase() === "rock" &&
      computerSelection === "scissors") ||
    (playerSelection.toLowerCase() === "paper" &&
      computerSelection === "rock") ||
    (playerSelection.toLowerCase() === "scissors" &&
      computerSelection === "paper")
  ) {
    playerScore++;
    return console.log(
      "You won the round! " +
        playerSelection.toLowerCase() +
        " beats " +
        computerSelection +
        "\nComputer Score: " +
        computerScore +
        " Your Score: " +
        playerScore
    );
  }

  if (
    (computerSelection === "rock" &&
      playerSelection.toLowerCase() === "scissors") ||
    (computerSelection === "paper" &&
      playerSelection.toLowerCase() === "rock") ||
    (computerSelection === "scissors" &&
      playerSelection.toLowerCase() === "paper")
  ) {
    computerScore++;
    return console.log(
      "You lost the round. " +
        computerSelection +
        " beats " +
        playerSelection.toLowerCase() +
        "\nComputer Score: " +
        computerScore +
        " Your Score: " +
        playerScore
    );
  }
}

for (let i = 1; i <= 5; i++) {
  playerSelection = prompt(
    `Round ${i}, Choose. Rock, Paper or Scissors?`
  ).toLowerCase();
  playRound(playerSelection, computerSelection);
}
