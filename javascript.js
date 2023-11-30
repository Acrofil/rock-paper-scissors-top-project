
let playerScore = 0;
let computerScore = 0;
let roundCounter = 1;

const container = document.querySelector('.container');
const display2 = document.querySelector('.display2');

container.style.cssText = "display: flex; justify-content: space-around;";

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

const gameResult = document.querySelector('.gameResult');

let playerCurrentResult = document.createElement('p');
let computerCurrentResult = document.createElement('p');

playerCurrentResult.textContent = `Your score ${playerScore}`;
computerCurrentResult.textContent = `Computer score ${computerScore}`;

gameResult.appendChild(playerCurrentResult);
gameResult.appendChild(computerCurrentResult);

const playerRoundChoice = document.querySelectorAll('button');
let playerChoice = '';

playerRoundChoice.forEach((buttonPressed) => {


    buttonPressed.addEventListener('click', () => {

        playerChoice = buttonPressed.value;

        let computerRoundChoice = getComputerChoice();
        let roundWinner = playRound(playerChoice, computerRoundChoice);

        const displayRoundResult = document.createElement('div');
        const roundScorePara = document.createElement('p');
        const scoreBoard = document.querySelector('.scores');
        
        roundScorePara.textContent = `Round ${roundCounter}: ` + roundWinner;
        displayRoundResult.appendChild(roundScorePara);

        scoreBoard.append(displayRoundResult);

        playerCurrentResult.textContent = `Your score ${playerScore}`;
        computerCurrentResult.textContent = `Computer score ${computerScore}`;
        roundCounter += 1;

        if (playerScore === 5 || computerScore === 5) {
            gameWinner();
            alert("Game finish: Check the result")
            return
    
        }

    });

});

function gameWinner() {

    const finalResult = document.querySelector('.finalResult');
    let gameFinalText = document.createElement('p');

    if (playerScore > computerScore) {
        
        gameFinalText.textContent = 'You won the game!';
        gameFinalText.style.color = 'green';


    }  else {

        gameFinalText.textContent = 'The computer won the game!';
        gameFinalText.style.color = 'red';
    }

    finalResult.appendChild(gameFinalText);
}

