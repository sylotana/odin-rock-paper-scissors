/*------------------------------------*\
  #VARIABLES
\*------------------------------------*/

const selection = {
  'rock': 'scissors',
  'paper': 'rock',
  'scissors': 'paper',
}

const buttons = document.querySelectorAll('button');
const playerScoreHTML = document.querySelector('.score__player')
const computerScoreHTML = document.querySelector('.score__enemy')
const roundHTML = document.querySelector('.round__count')
const extraRound = document.querySelector('.round')
const result = document.querySelector('.result')

let round = 0;

let playerScore = 0;
let computerScore = 0;

let playerChoice;





/*------------------------------------*\
  #FUNCTIONS
\*------------------------------------*/

function updateScore() {
  playerScoreHTML.textContent = playerScore;
  computerScoreHTML.textContent = computerScore;
}


function randomChoice() {
  const listSelection = Object.keys(selection);
  const randomChoice = Math.floor(Math.random() * listSelection.length); 
  return listSelection[randomChoice];
}


function gameResult() {
  
  if (playerScore === computerScore) {
    extraRound.textContent = 'Extra round'
  } else if (playerScore > computerScore) {
    result.textContent = 'Your Winner!'
  } else {
    result.textContent = 'Your Loser!'
  }



} 


function playRound(playerChoice) {

  const playerSelection = playerChoice;
  const computerSelection = 'rock';

  if (round < 5) {

    if (selection[playerSelection] === computerSelection) {
      playerScore += 1;
      updateScore();
    } else if (selection[computerSelection] === playerSelection) {
      computerScore += 1;
      updateScore();
    }

    round += 1;
    roundHTML.textContent = round;

  }
  
  if (round === 5 ) {

    gameResult()
  
  }
  
}


for (const btn of buttons) {
  btn.addEventListener('click', function () {
    playerChoice = this.getAttribute('data-choice');
    playRound(playerChoice);
  });
}

