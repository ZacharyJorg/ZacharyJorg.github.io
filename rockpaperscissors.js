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
        console.log("It's a tie!");
    } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection ==  "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
        console.log(playerWin);
    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection ==  "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        console.log(compWin);
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
const gameStart = document.querySelector('#game');

const rockButton = document.createElement('button')
rockButton.setAttribute('id', 'rock-button')
rockButton.textContent = 'Rock'
rockButton.addEventListener("click",  function(){
    playerSelection = "rock";
    computerSelection = getCompChoice().toLowerCase();
    playRound(playerSelection, computerSelection)
    if (playerSelection == computerSelection){
        roundTie.textContent = "It's a tie!"
        roundWon.textContent = ""
        roundLose.textContent = ""
    } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection ==  "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
        roundWon.textContent = `The player wins, ${playerSelection} beats ${computerSelection}!`
        roundLose.textContent = ""
        roundTie.textContent = ""
    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection ==  "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        roundLose.textContent = `The computer wins, ${computerSelection} beats ${playerSelection}!`;
        roundWon.textContent = ""
        roundTie.textContent = ""
}
});

const paperButton = document.createElement('button')
paperButton.setAttribute('id', 'paper-button')
paperButton.textContent = 'Paper'
paperButton.addEventListener('click',  function(){
    playerSelection = "paper";
    computerSelection = getCompChoice().toLowerCase();
    playRound(playerSelection, computerSelection)
    if (playerSelection == computerSelection){
        roundTie.textContent = "It's a tie!"
        roundWon.textContent = ""
        roundLose.textContent = ""
    } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection ==  "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
        roundWon.textContent = `The player wins, ${playerSelection} beats ${computerSelection}!`
        roundLose.textContent = ""
        roundTie.textContent = ""
    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection ==  "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        roundLose.textContent = `The computer wins, ${computerSelection} beats ${playerSelection}!`;
        roundWon.textContent = ""
        roundTie.textContent = ""
}
});

const scissorsButton = document.createElement('button')
scissorsButton.setAttribute('id', 'scissors')
scissorsButton.textContent = 'Scissors'
scissorsButton.addEventListener("click", function(){
    playerSelection = "scissors";
    computerSelection = getCompChoice().toLowerCase();
    playRound(playerSelection, computerSelection)
    if (playerSelection == computerSelection){
        roundTie.textContent = "It's a tie!"
        roundWon.textContent = ""
        roundLose.textContent = ""
    } else if (playerSelection == "rock" && computerSelection == "scissors" || playerSelection ==  "paper" && computerSelection == "rock" || playerSelection == "scissors" && computerSelection == "paper"){
        roundWon.textContent = `The player wins, ${playerSelection} beats ${computerSelection}!`
        roundLose.textContent = ""
        roundTie.textContent = ""
    } else if (playerSelection == "rock" && computerSelection == "paper" || playerSelection ==  "paper" && computerSelection == "scissors" || playerSelection == "scissors" && computerSelection == "rock") {
        roundLose.textContent = `The computer wins, ${computerSelection} beats ${playerSelection}!`;
        roundWon.textContent = ""
        roundTie.textContent = ""
}});

gameStart.append(rockButton)
gameStart.append(paperButton)
gameStart.append(scissorsButton)

const results = document.createElement('div')
gameStart.append(results)
const roundWon = document.createElement('h1')
const roundLose = document.createElement('h1')
const roundTie = document.createElement('h1')
const playerWins = document.createElement('h1')
const computerWins = document.createElement('h1')
results.append(roundWon)
//roundWon.textContent = `The player wins!`
results.append(roundLose)
//roundLose.textContent = `The computer wins!`
results.append(roundTie)
//roundTie.textContent = "It's a tie!"
results.append(playerWins)
//playerWins.textContent = `You won! Your score total was: ${myScore}. Enemy score was ${enemyScore}.`
results.append(computerWins)
//computerWins.textContent = `The computer won, better luck next time... Your score total was: ${myScore}. Enemy score was ${enemyScore}.`
