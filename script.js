
let computerChoice;
let humanScore = 0;
let computerScore = 0;
let gameOver = false;

const result = document.querySelector("#result");
const score = document.querySelector("#score");

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    if (randomNumber === 0) {
        return "rock";
    } else if (randomNumber === 1) {
        return "paper";
    } else {
        return "scissors";
    }
}

function getHumanChoice() {
    const container = document.querySelector("#container");
    container.addEventListener("click", (Event) => {
        const target = Event.target;
        if (target.id === "rock" || target.id === "paper" || target.id === "scissors") {
            playRound(target.id);
        }
    });
};

function playRound(humanChoice) {
    if (gameOver) {
        return;
    }

    let computerChoice = getComputerChoice();

    score.textContent = "Human Choice:" + " " + humanChoice;
    score.textContent = "Computer Choice:" + " " + computerChoice;

    if (humanChoice === computerChoice) {
        result.textContent = "It's a tie!!!";
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        result.textContent = "paper beats rock, Human wins.";
        humanScore = humanScore + 1;
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        result.textContent = "paper beats rock, computer wins.";
        computerScore = computerScore + 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        result.textContent = "scissors beats paper, Human wins.";
        humanScore = humanScore + 1;
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        result.textContent = "scissors beats paper , computer wins.";
        computerScore = computerScore + 1;
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        result.textContent = "rock beats scissors, Human wins.";
        humanScore = humanScore + 1;
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        result.textContent = "rock beats scissors, computer wins.";
        computerScore = computerScore + 1;
    }

    displayScores();

    if (humanScore === 5) {
        result.textContent = "Congratulations! You won the Game!";
        gameOver = true;
    }
    else if (computerScore === 5) {
        result.textContent = "computer wins the Game!";
        gameOver = true;
    }

}

function displayScores() {
    score.textContent = "Human Scored: " + humanScore + "  | Computer Scored: " + computerScore;

};

getHumanChoice();

const restart = document.querySelector("#restart");
restart.addEventListener("click", () => {
    humanScore = 0;
    computerScore = 0;
    gameOver = false;

    result.textContent = "Game Restarted! Make your selection.";

    displayScores();
});









