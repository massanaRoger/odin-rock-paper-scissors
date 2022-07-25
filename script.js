const buttons = document.querySelectorAll('.play-buttons');
buttons.forEach(button => {
    button.addEventListener('click', checkPlayerWins);
})

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function checkPlayerWins() {
    const playerSelection = this.textContent;
    const computerSelection = getComputerChoice();
    let playerWin = -1;
    if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
        playerWin = 1;
        console.log(`You won! ${playerSelection} wins ${computerSelection}`);
    } else if (playerSelection === computerSelection) {
        playerWin = 0;
        console.log("It's a tie!");
    }
    playerWin !== -1 || console.log(`You lose! ${computerSelection} wins ${playerSelection}`);
    return playerWin;
}



