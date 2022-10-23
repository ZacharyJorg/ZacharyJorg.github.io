//Computer gets its choice. Done.
//Ask the player what their choice is
//Reveal computer choice
//Display win or lose message
//const playerSelection = prompt("What is your choice?").toLowerCase();
//const computerSelection = getCompChoice().toLowerCase();
//console.log(playRound(playerSelection, computerSelection));
const choices = ['Rock', 'Paper', 'Scissors'];

function getCompChoice() {
    let randomValue = choices[Math.floor(Math.random() * 3)]
    return randomValue;
}

function playRound(playerSelection, computerSelection){
    const playerWin = `The player wins! ${playerSelection} beats ${computerSelection}!`;
    const compWin = `The computer wins! ${computerSelection} beats ${playerSelection}!`;
    
    if (playerSelection == computerSelection){
        return ("It's a tie!");
    } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection ==  "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
        return playerWin;
    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection ==  "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        return compWin;
    } else {
        console.log("Please input a correct option: Rock, Paper or Scissors.");
    }
}

const game = () => {
    myScore = 0;
    enemyScore = 0;
    scoreTotal = 0;
   /* for (let i = 0; i < 5; i++){
        const playerSelection = prompt("What is your choice?").toLowerCase();
        const computerSelection = getCompChoice().toLowerCase();
        console.log(playRound(playerSelection, computerSelection));
        if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection ==  "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
            myScore++;
            console.log(`My score is ${myScore}.`);
        } else if (playerSelection === computerSelection) {
            console.log("Nobody gets a point!")
        } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection ==  "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock"){
            enemyScore++;
            console.log(`The computer's score is ${enemyScore}.`)
        } else {
            i--;
        }
    } */

    if (myScore > enemyScore){
        console.log(`You won! Your score total was: ${myScore}. Enemy score was ${enemyScore}.`)
    } else if (enemyScore > myScore){
        console.log(`The computer won, better luck next time... Your score total was: ${myScore}. Enemy score was ${enemyScore}.`);
    } else {
        console.log("Huh, you and the computer tied!")
    }
}

game();
const gameStart = document.createElement('div');

const rockButton = document.createElement('button')
rockButton.setAttribute('id', 'rock-button')
rockButton.textContent = 'Rock'
rockButton.addEventListener("click", playRound())

const paperButton = document.createElement('button')
paperButton.setAttribute('id', 'paper-button')
paperButton.textContent = 'Paper'
paperButton.addEventListener('click', playRound())

const scissorsButton = document.createElement('button')
scissorsButton.setAttribute('id', 'scissors-button')
scissorsButton.textContent = 'Scissors'
scissorsButton.addEventListener("click", playRound())

gameStart.appendChild(rockButton)
gameStart.appendChild(paperButton)
gameStart.appendChild(scissorsButton)

const results = document.createElement('div')
