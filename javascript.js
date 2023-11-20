
let playerScore = 0;
let computerScore = 0;


function getComputerChoice() {
    let computerChoiceOptions = ["Rock", "Paper", "Scissors"];

    let randomNumber = Math.floor(Math.random() * 3);
    let computerChoice = computerChoiceOptions[randomNumber];

    return computerChoice;

}

function playRound(playerSelection, computerSelection) {

    let winner;
    let losser;
    let winnerText;

    playerSelectionSlice = playerSelection.slice(1);
    playerSelection = playerSelection.charAt(0).toUpperCase() + playerSelectionSlice;
    
    if (playerSelection === "Paper" && computerSelection === "Rock" 
    || playerSelection === "Scissors" && computerSelection === "Paper" 
    || playerSelection === "Rock" && computerSelection === "Scissors") {

        winner = playerSelection;
        losser = computerSelection;

        winnerText = `You Win! ${winner} beats ${losser}`;
        playerScore += 1;

    } else if (playerSelection === computerSelection) {

        winnerText = "Tie!";

    } else {
        winner = computerSelection;
        losser = playerSelection;

        winnerText = `You Lose! ${winner} beats ${losser}`;
        computerScore += 1;
    }

    return winnerText;
}

function game() {

    for (let i = 0; i <= 5; i++) {

        playerSelection = prompt("Rock, Paper or Scissors?: ")
        computerSelection = getComputerChoice();

        roundResult = playRound(playerSelection, computerSelection);

        console.log(roundResult);
    }

    gameWinner();
}

function gameWinner() {

    if (playerScore > computerScore) {
        
        console.log("You win the game!");

    } else if (playerScore == computerScore) {
        
        console.log("Game result is Tie!");

    } else {

        console.log("Computer wins the game!!")
    }

}

game();