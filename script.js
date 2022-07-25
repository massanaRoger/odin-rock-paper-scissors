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
    const resultsDiv = document.querySelector('.results-container');
    let playerWin = -1;
    if ((playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")) {
        playerWin = 1;
        addPToDOM(resultsDiv, `You won! ${playerSelection} wins ${computerSelection}`)
    } else if (playerSelection === computerSelection) {
        playerWin = 0;
        addPToDOM(resultsDiv, "It's a tie!");
    }
    playerWin !== -1 || addPToDOM(resultsDiv, `You lose! ${computerSelection} wins ${playerSelection}`);
    return playerWin;
}

function addPToDOM(elementToBeAdded, message) {
    const p = document.createElement('p');
    const text = document.createTextNode(message);
    p.appendChild(text);
    elementToBeAdded.appendChild(p);
}


