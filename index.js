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
    if (playerSelection === computerSelection) {
        console.log('You tied, you both chose ' + playerSelection + '\nComputer Score: ' + computerScore + ' Your Score: ' + playerScore);
    }
    
    if (
        playerSelection === 'rock' && computerSelection === 'scissors' ||
        playerSelection === 'paper' && computerSelection === 'rock' ||
        playerSelection === 'scissors' && computerSelection === 'paper') {
        playerScore++
        console.log('You won the round! ' + playerSelection + ' beats ' + computerSelection + '\nComputer Score: ' + computerScore + ' Your Score: ' + playerScore)
    }

    if (
        computerSelection === 'rock' && playerSelection === 'scissors' ||
        computerSelection === 'paper' && playerSelection === 'rock' ||
        computerSelection === 'scissors' && playerSelection === 'paper') {
        computerScore++
        console.log('You lost the round. ' + computerSelection + ' beats ' + playerSelection + '\nComputer Score: ' + computerScore + ' Your Score: ' + playerScore )
    }

}
console.log(playRound(playerSelection, computerSelection));