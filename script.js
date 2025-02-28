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

const btns = document.querySelectorAll(".choice");
const resultEl = document.querySelector(".results");

let humanChoice = undefined;
let computerChoice = undefined;


btns.forEach(btn => {
    btn.addEventListener('click', () => {
        humanChoice = btn.id;
        computerChoice = getComputerChoice();
        playGame();
    });
});

function getComputerChoice() {
    let rockPaperScissors = Math.floor(Math.random() * 3);
    if (rockPaperScissors === 0) {
        rockPaperScissors = 'rock';
    } else if (rockPaperScissors === 1) {
        rockPaperScissors = 'paper';
    } else {
        rockPaperScissors = 'scissors';
    }
    return rockPaperScissors;
}

let winScore = 0;
let loseScore = 0;
let tieScore = 0;


function playGame() {
    if (winScore >= 5 || loseScore >=5) {
        return;
    }
    if (humanChoice === computerChoice) {
        tieScore++;
        resultEl.innerHTML = `<p>It's a tie!</p>
        <p>Ties: ${tieScore};  Wins: ${winScore};  Losses: ${loseScore}</p>`;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'scissors' && computerChoice === 'paper' || 
        humanChoice === 'paper' && computerChoice === 'rock') {
        winScore++;
        resultEl.innerHTML = `<p>You won!</p>
        <p>Ties: ${tieScore};  Wins: ${winScore};  Losses: ${loseScore}</p>`;
    } else {
        loseScore++;
        resultEl.innerHTML = `<p>You Lost!</p>
        <p>Ties: ${tieScore};  Wins: ${winScore};  Losses: ${loseScore}</p>`;;
    }

    if (winScore === 5) {
        resultEl.innerHTML = `You won the game by ${winScore} to ${loseScore}`;
    } else if (loseScore === 5) {
        resultEl.innerHTML = `Computer won by ${loseScore} to ${winScore}`;
    }
    return;
}