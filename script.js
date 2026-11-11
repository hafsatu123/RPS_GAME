console.log("======ROCK,PAPER,SCISSORS GAME======");
function getHumanChoice() {
    let userChoice = prompt("Enter your choice(rock, paper or scissors): ");
    return userChoice;
}

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

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice) {
        humanChoice = humanChoice.toLowerCase();

        console.log("Human Choice:" +" "+ humanChoice);
        console.log("Computer Choice:" +" "+ computerChoice);
       
         if (humanChoice === computerChoice) {
            console.log("It's a tie!!!")
         }
        else if (humanChoice === "paper" && computerChoice === "rock") {
            console.log("paper beats rock, Human wins.");
            humanScore = humanScore + 1;
        } 
        else if (humanChoice === "rock" && computerChoice === "paper") {
            console.log("paper beats rock, computer wins.");
            computerScore = computerScore + 1;
        }
        else if (humanChoice === "scissors" && computerChoice === "paper") {
            console.log("scissors beats paper, Human wins.");
            humanScore = humanScore + 1;
        }
        else if (humanChoice === "paper" && computerChoice === "scissors") {
            console.log("scissors beats paper , computer wins.");
            computerScore = computerScore + 1;
        }
        else if (humanChoice === "rock" && computerChoice === "scissors") {
            console.log("rock beats scissors, Human wins.");
            humanScore = humanScore + 1;
        }
        else if (humanChoice === "scissors" && computerChoice === "rock") {
            console.log("rock beats scissors, computer wins.");
            computerScore = computerScore + 1;
        } 
    }

    for(let round=1; round<=5; round++){
        console.log("ROUND" +" "+ round);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();
    playRound(humanChoice,computerChoice);
    } 

    function displayScores(){
        console.log("Human Scored:" +" "+ humanScore);
        console.log("Computer Scored:" +" "+ computerScore);
    }
    displayScores();
    
    if(humanScore > computerScore){
        console.log("CONGRATULATIONS!!!, YOU HAVE WON THE GAME");
    }
    else if(computerScore > humanScore){
        console.log("COMPUTER WINS!!!,YOU LOOSE.");  
    }
    else if(humanScore === computerScore){
        console.log("Draw!!!, Refresh the webpage to start the game.")
    }
    
}

playGame();






