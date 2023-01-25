let computerScore = 0;
let playerScore = 0;
const playerSelection = prompt(`Rock, Paper or Scissors?`)
const computerSelection = getComputerChoice()


function getComputerChoice(computerSelection){
    const choices = ['rock', 'paper', 'scissors'];
    let numberPicker = Math.floor(Math.random() * choices.length);
    return choices[numberPicker];
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === computerSelection) {
        console.log('You tied, you both chose ' + computerSelection + '\nComputer Score: ' + computerScore + ' Your Score: ' + playerScore);
    }
    
    if (
        playerSelection.toLowerCase() === 'rock' && computerSelection === 'scissors' ||
        playerSelection.toLowerCase() === 'paper' && computerSelection === 'rock' ||
        playerSelection.toLowerCase() === 'scissors' && computerSelection === 'paper') {
        playerScore++
        console.log('You won the round! ' + playerSelection.toLowerCase() + ' beats ' + computerSelection + '\nComputer Score: ' + computerScore + ' Your Score: ' + playerScore)
    }

    if (
        computerSelection === 'rock' && playerSelection.toLowerCase() === 'scissors' ||
        computerSelection === 'paper' && playerSelection.toLowerCase() === 'rock' ||
        computerSelection === 'scissors' && playerSelection.toLowerCase() === 'paper') {
        computerScore++
        console.log('You lost the round. ' + computerSelection + ' beats ' + playerSelection.toLowerCase() + '\nComputer Score: ' + computerScore + ' Your Score: ' + playerScore )
    }

}
console.log(playRound(playerSelection, computerSelection));