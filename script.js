/* 
    PLAN 
    1. This project doesn't have an user interface. It's entirely played in the console
    2. The program will get data from the user
    3. The output is a result between the user input and the computer choice
*/

/* 
    PSEUDOCODE
    write a function that randomly returns 'rock', 'paper' or 'scissors'
    write a function to get the user's choice
    declare variables to keep the human score and computer score
    write a round function that takes the human and computer choice as arguments
    make the human choice case sensitive
    output a string in the console of the result when playing a round
    increment the human score or computer score depending on the winner
    write a function that calls the round function 5 times
    declare a winner at the end
*/

function getComputerChoice() {
    let rockPaperScissors = Math.floor(Math.random() * 3) + 1;
    if (rockPaperScissors === 1) {
        rockPaperScissors = 'rock';
    } else if (rockPaperScissors === 2) {
        rockPaperScissors = 'paper';
    } else {
        rockPaperScissors = 'scissors';
    }
    return rockPaperScissors;
}

function getHumanChoice() {
    const userInput = prompt('Make your choice: rock, paper or scissors');
    return userInput.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === 'rock') {
        if (computerChoice === 'scissors') {
            humanScore++;
            console.log('You win! Rock beats Scissors'); 
        } else if (computerChoice === 'paper') {
            computerScore++;
            console.log('You lose! Paper beats Rock');
        } else {
            console.log("It's a tie!");
        }
    }

    if (humanChoice === 'scissors') {
        if (computerChoice === 'rock') {
            computerScore++;
            console.log('You lose! Rock beats Scissors')
        } else if (computerChoice === 'paper') {
            humanScore++;
            console.log('You win! Scissors beat Paper')
        } else {
            console.log("It's a tie!");
        }
    }

    if (humanChoice === 'paper') {
        if (computerChoice === 'rock') {
            humanScore++;
            console.log('You win! Paper beats Rock')
        } else if (computerChoice === 'scissors') {
            computerScore++;
            console.log('You lose! Scissors beat Paper')
        } else {
            console.log("It's a tie!");
        }
    }
    return;
}


function playGame() {
    for (let rounds = 0; rounds < 5; rounds++) {
        playRound(getHumanChoice(), getComputerChoice());
    }

    if (humanScore > computerScore) {
        console.log(`You won the game by ${humanScore} to ${computerScore}`);
    } else {
        console.log(`Computer won by ${computerScore} to ${humanScore}`);
    }
}

playGame();
