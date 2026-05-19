let humanScore = 0;
let computerScore = 0;

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
        console.log("Tied you and the computer choiced " + computerChoice + ".");

    } else if (normalizedHumanChoice === "rock" && computerChoice === "scissors") {
        humanScore++;
        console.log("You win, computer choose scissors.");

    } else if (normalizedHumanChoice === "rock" && computerChoice === "paper") {
        computerScore++;
        console.log("You lose, computer choose paper.");

    } else if (normalizedHumanChoice === "paper" && computerChoice === "scissors") {
        computerScore++;
        console.log("You lose, computer choose scissors.");

    } else if (normalizedHumanChoice === "paper" && computerChoice === "rock") {
        humanScore++;
        console.log("You win, computer choose rock.");

    } else if (normalizedHumanChoice === "scissors" && computerChoice === "rock") {
        computerScore++;
        console.log("You lose, computer choose rock.");

    } else if (normalizedHumanChoice === "scissors" && computerChoice === "paper") {
        humanScore++;
        console.log("You win, computer choose paper.");
    } else {
        console.log("You entered an invalid choice");
    }

    // return console.log(normalizedHumanChoice + computerChoice);
} 

function playGame() {
    for (let roundCount = 0; roundCount<5; roundCount++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
        
    if (humanScore === computerScore) {
        console.log("Tie!!! you scored: " + humanScore + " | Computer Scored: " + computerScore);

    } else if (humanScore < computerScore) {
        console.log("GGWP You lost you scored: " + humanScore + " | Computer Scored: " + computerScore);

    } else {
        console.log("GGWP You win you scored: " + humanScore + " | Computer Scored: " + computerScore);
    }

    humanScore = 0;
    computerScore = 0;
}


playGame();

// getComputerChoice();
// getHumanChoice();