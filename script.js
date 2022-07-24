const computerChoice = getComputerChoice();
console.log(computerChoice);
console.log(getRoundWinner("rock", computerChoice));

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function getRoundWinner(playerSelection, computerSelection) {
    let playerWin = false;
    playerSelection = uppercaseFirstLetter(playerSelection);
    if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
        playerWin = true;
    } else if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    return playerWin;
        //`You won! ${playerSelection} wins ${computerSelection}` :
        //`You lose! ${computerSelection} wins ${playerSelection}`;
}

//Write a function to uppercase the first letter of a string.
function uppercaseFirstLetter(string) {
    string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function game() {
    for (let i = 0; i < 5; i++) {
        let playerPoints, computerPoints;
        const playerSelection = prompt("Rock, paper or scissors?");

    }
}
