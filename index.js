console.log("Hello World!");

function getComputerChoice() {
    let rndmNum = Math.floor(Math.random() * 3);

    if (rndmNum === 0) {
        return console.log("rock");
    } else if (rndmNum === 1) {
        return console.log("paper");
    } else if (rndmNum === 2) {
        return console.log("scissors");
    }

}

function getHumanChoice() {
    let userInput = prompt("Enter 0 for rock, 1 for paper, 2 scissors");
    return console.log(userInput);
}

getComputerChoice();
getHumanChoice();