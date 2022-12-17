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

const game = () => {
    myScore = 0;
    enemyScore = 0;
    scoreTotal = 0;
   for (let i = 0; i < 5; i++){
       // const playerSelection = prompt("What is your choice?").toLowerCase();
      //  const computerSelection = getCompChoice().toLowerCase();
       // console.log(playRound(playerSelection, computerSelection));
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
    } 

    if (myScore > enemyScore){
        console.log(`You won! Your score total was: ${myScore}. Enemy score was ${enemyScore}.`)
    } else if (enemyScore > myScore){
        console.log(`The computer won, better luck next time... Your score total was: ${myScore}. Enemy score was ${enemyScore}.`);
    } else {
        console.log("Huh, you and the computer tied!")
    }
}

    let myScore = 0;
    let enemyScore = 0;
    let scoreTotal = 0;
function  playRound(playerSelection, computerSelection){
   
if (playerSelection == computerSelection){
    roundTie.textContent = "It's a tie!"
    roundWon.textContent = ""
    roundLose.textContent = ""
    playerWins.textContent = ""
    computerWins.textContent = ""
     console.log("tie")
} else if (playerSelection == "rock"){
    if (computerSelection == "scissors"){
        roundLose.textContent = ""
        roundTie.textContent = ""
        playerWins.textContent = ""
        computerWins.textContent = ""
        myScore++
        scoreTotal++
        playerScore.textContent = myScore;
        console.log("My score is " + myScore)
        roundWon.textContent = `The player wins, ${playerSelection} beats ${computerSelection}!`
    } else if (computerSelection == "paper"){
        roundWon.textContent = ""
        roundTie.textContent = ""
        playerWins.textContent = ""
        computerWins.textContent = ""
        enemyScore++
        scoreTotal++
        computerScore.textContent = enemyScore;
        console.log("Computer score is " + enemyScore)
        roundLose.textContent =`The computer wins, ${computerSelection} beats ${playerSelection}!`;
    }
} else if (playerSelection == "scissors"){
    if (computerSelection == "paper"){
        roundLose.textContent = ""
        roundTie.textContent = ""
        playerWins.textContent = ""
        computerWins.textContent = ""
        myScore++
        scoreTotal++
        playerScore.textContent = myScore;
        console.log("My score is " + myScore)
        roundWon.textContent = `The player wins, ${playerSelection} beats ${computerSelection}!`
    } else if (computerSelection == "rock"){
        roundWon.textContent = ""
        roundTie.textContent = ""
        playerWins.textContent = ""
        computerWins.textContent = ""
        enemyScore++
        scoreTotal++
        computerScore.textContent = enemyScore;
        console.log("Computer score is " + enemyScore)
        roundLose.textContent =`The computer wins, ${computerSelection} beats ${playerSelection}!`;
    }
} else if (playerSelection == "paper"){
    if (computerSelection == "rock"){
        roundLose.textContent = ""
        roundTie.textContent = ""
        playerWins.textContent = ""
        computerWins.textContent = ""
        myScore++
        scoreTotal++
        playerScore.textContent = myScore;
        console.log("My score is " + myScore)
        roundWon.textContent = `The player wins, ${playerSelection} beats ${computerSelection}!`
    } else if (computerSelection == "scissors"){
        roundWon.textContent = ""
        roundTie.textContent = ""
        playerWins.textContent = ""
        computerWins.textContent = ""
        enemyScore++
        scoreTotal++
        computerScore.textContent = enemyScore;
        console.log("Computer score is " + enemyScore)
        roundLose.textContent =`The computer wins, ${computerSelection} beats ${playerSelection}!`;
    }
}

    if (scoreTotal == 5 && myScore > enemyScore){
        console.log(`You won! Your score total was: ${myScore}. Enemy score was ${enemyScore}.`)
        roundWon.textContent = ""
        roundTie.textContent = ""
        roundLose.textContent = ""
        playerWins.textContent = `You won! Your score total was: ${myScore}. Enemy score was ${enemyScore}.`
        myScore = 0;
        enemyScore = 0;
        scoreTotal = 0;
    } else if (scoreTotal == 5 && enemyScore > myScore){
        console.log(`The computer won, better luck next time... Your score total was: ${myScore}. Enemy score was ${enemyScore}.`);
        roundWon.textContent = ""
        roundTie.textContent = ""
        roundLose.textContent = ""
        computerWins.textContent = `The computer won, better luck next time... Your score total was: ${myScore}. Enemy score was ${enemyScore}.`
        myScore = 0;
        enemyScore = 0;
        scoreTotal = 0;
    } 
};
//game();
const gameStart = document.querySelector('#game');
const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        welcomeMessage.innerHTML = ""
        selectOne.innerHTML = ""
        playerSelection = (button.id)
        computerSelection = getCompChoice().toLowerCase()
        playerScore.textContent = myScore;
        myScoreCounter.textContent = "Me"
        computerScoreCounter.textContent = "CPU"
        computerScore.textContent = enemyScore;
        playRound(playerSelection, computerSelection)
        
    });

});

const results = document.createElement('div')
gameStart.append(results)
const roundWon = document.createElement('h1')
const roundLose = document.createElement('h1')
const roundTie = document.createElement('h1')
const playerWins = document.createElement('h1')
const computerWins = document.createElement('h1')
const playerScore = document.createElement('h2')
const welcomeMessage = document.createElement('h1')
const selectOne = document.createElement('h2')
const myScoreCounter = document.createElement('h2')
const computerScoreCounter = document.createElement('h2')
selectOne.setAttribute("class", "select")
selectOne.innerHTML = "Select one."
welcomeMessage.setAttribute("class", "welcome")
welcomeMessage.innerHTML = "Welcome to Rock Paper Scissors!"
playerScore.setAttribute("class", "myScore")
myScoreCounter.setAttribute("class", "myScoreCounter")
computerScoreCounter.setAttribute("class", "computerScoreCounter")
const computerScore = document.createElement('h2')
computerScore.setAttribute("class", "computerScore")
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
results.append(playerScore)
results.append(computerScore)
results.append(welcomeMessage)
results.append(selectOne)
results.append(myScoreCounter)
results.append(computerScoreCounter)

//designs
