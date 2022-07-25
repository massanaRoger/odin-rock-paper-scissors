const winner = document.querySelector('.winner');
game();

function getComputerChoice() {
    const choices = ["Rock", "Paper", "Scissors"];
    const random = Math.floor(Math.random() * 3);
    return choices[random];
}

function addPToDOM(elementToBeAdded, message) {
    const p = document.createElement('p');
    const text = document.createTextNode(message);
    p.appendChild(text);
    elementToBeAdded.appendChild(p);
}

function game() {
    let playerPoints = 0, computerPoints = 0, i = 0;
    const buttons = document.querySelectorAll('.play-buttons');
    buttons.forEach(button => {
        button.addEventListener('click', checkPlayerWins);
    });

    function checkPlayerWins() {
        const playerSelection = this.textContent;
        const computerSelection = getComputerChoice();
        i++;
        if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
            (playerSelection === "Paper" && computerSelection === "Rock") ||
            (playerSelection === "Scissors" && computerSelection === "Paper")) {
            winner.textContent = `You won! ${playerSelection} wins ${computerSelection}`;
            playerPoints++;
        } else if (playerSelection === computerSelection) {
            winner.textContent = "It's a tie!";
        } else {
            winner.textContent = `You lose! ${computerSelection} wins ${playerSelection}`;
            computerPoints++;
        }
        document.querySelector('.scores').textContent = `${playerPoints} vs ${computerPoints}`;
        if (i >= 5) {

            document.querySelector('.button-container').remove();
            displayEndWinner(playerPoints, computerPoints);
        }

    }
}

function displayEndWinner(playerPoints, computerPoints) {
    if (playerPoints > computerPoints) {
        winner.textContent = `You won! Score: ${playerPoints} vs ${computerPoints}`;
    } else if (playerPoints < computerPoints) {
        winner.textContent = `You lose! Score: ${playerPoints} vs ${computerPoints}`;
    } else {
        winner.textContent = `It's a tie! Score: ${playerPoints} vs ${computerPoints}`;
    }
}
