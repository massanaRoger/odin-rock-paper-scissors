game();

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function checkPlayerWins(playerSelection, computerSelection) {
    let playerWin = -1;
    playerSelection = uppercaseFirstLetter(playerSelection);
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

//Write a function to uppercase the first letter of a string.
function uppercaseFirstLetter(string) {
    string.toLowerCase();
    return string.charAt(0).toUpperCase() + string.slice(1);
}

function game() {
    let playerPoints = 0, computerPoints = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper or scissors?");
        const playerWins = checkPlayerWins(playerSelection, getComputerChoice())
        if (playerWins === 1) {
            playerPoints++;
        } else if (playerWins === -1) {
            computerPoints++;
        }
    }
    if (playerPoints > computerPoints) {
        console.log(`You won! Score: ${playerPoints} vs ${computerPoints}`)
    } else if (playerPoints < computerPoints) {
        console.log(`You lose! Score: ${playerPoints} vs ${computerPoints}`)
    } else {
        console.log(`It's a tie! Score: ${playerPoints} vs ${computerPoints}`)
    }
}
