let computerScore = 0;
let playerScore = 0;
let roundsPlayed = 0;
const playerSelection = prompt(`Rock, Paper or Scissors?`)
const computerSelection = getComputerChoice()

function getComputerChoice(computerSelection){
    const choices = ['rock', 'paper', 'scissors'];
    let numberPicker = Math.floor(Math.random() * choices.length);
    return choices[numberPicker];
}
