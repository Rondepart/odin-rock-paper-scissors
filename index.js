console.log("Hello World!");

const humanScore = 0;
const computerScore = 0;

function getComputerChoice() {
    let rndmNum = Math.floor(Math.random() * 3) + 1;

    if (rndmNum === 1) {
        return "rock";
    } else if (rndmNum === 2) {
        return "paper";
    } else if (rndmNum === 3) {
        return "scissors";
    }

}

function getHumanChoice() {
    let userInput = prompt("Enter rock, paper, or scissors");
    return userInput;
}

function playRound(humanChoice, computerChoice) {
    const normalizedHumanChoice = humanChoice.toLowerCase().replace(/\s+/g, '');

    if (normalizedHumanChoice === computerChoice){
        return console.log("Tied you and the computer choiced " + computerChoice + ".");

    } else if (normalizedHumanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        return console.log("You win, computer choose scissors.");

    } else if (normalizedHumanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        return console.log("You lose, computer choose paper.");

    } else if (normalizedHumanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        return console.log("You lose, computer choose scissors.");

    } else if (normalizedHumanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        return console.log("You win, computer choose rock.");

    } else if (normalizedHumanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        return console.log("You lose, computer choose rock.");

    } else if (normalizedHumanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        return console.log("You win, computer choose paper.");
    } else {
        return console.log("You entered an invalid choice");
    }

    // return console.log(normalizedHumanChoice + computerChoice);
} 

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);

// getComputerChoice();
// getHumanChoice();