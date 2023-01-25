let computerScore = 0;
let playerScore = 0;
let playerSelection = "";
let computerSelection = getComputerChoice();
const choices = ["rock", "paper", "scissors"];

// ↓ RANDOMIZE COMPUTER CHOICE ↓

function getComputerChoice(computerSelection) {
  const choices = ["rock", "paper", "scissors"];
  let numberPicker = Math.floor(Math.random() * choices.length);
  return choices[numberPicker];
}

// ↓ ROUND RESULTS ↓

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

// ↓ LETS THE GAME GO 5 ROUNDS ↓

for (let i = 1; i <= 5; i++) {
  playerSelection = prompt(
    `Round ${i}, Choose. Rock, Paper or Scissors?`
  ).toLowerCase();


  // ↓ VALIDATES INPUT ↓
  if (
    playerSelection.toLowerCase() != "rock" &&
    playerSelection.toLowerCase() != "paper" &&
    playerSelection.toLowerCase() != "scissors"
  ) {
    console.log(`${playerSelection} is not a choice.`);
    i--;
  }

  // ↓ CALLS playRound FUNCTION ↓

  playRound(playerSelection, computerSelection);

  // ↓ REPORTS FINAL RESULTS ↓

  if (i === 5 && computerScore == playerScore) {
    console.log(`Game over! You tied.`);
  }

  if (i === 5 && computerScore > playerScore) {
    console.log(`Game over! You lost.`);
  }

  if (i === 5 && playerScore > computerScore) {
    console.log(`Game over! You won!`);
  }
}
