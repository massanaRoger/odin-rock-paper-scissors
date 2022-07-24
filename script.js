const computerChoice = getComputerChoice();
console.log(computerChoice);
console.log(playRound("Rock", computerChoice));

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function playRound(playerSelection, computerSelection) {
    let playerWin = false;
    if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
        playerWin = true;
    } else if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    return playerWin ? `You won! ${playerSelection} wins ${computerSelection}` :
        `You lose! ${computerSelection} wins ${playerSelection}`;
}
