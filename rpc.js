// Create buttons for human choices
const rock = document.createElement('button');
rock.textContent = "Rock";
document.body.appendChild(rock);

const paper = document.createElement('button');
paper.textContent = "Paper";
document.body.appendChild(paper);

const scissors = document.createElement('button');
scissors.textContent = "Scissors";
document.body.appendChild(scissors);

// Create divs for displaying results and scores
const resultDiv = document.createElement('div');
document.body.appendChild(resultDiv);

const scoreDiv = document.createElement('div');
document.body.appendChild(scoreDiv);

// Initialize scores
let humanScore = 0;
let computerScore = 0;

// Function to get computer choice
const getComputerChoice = () => {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * choices.length)];
};

// Function to display results
const displayResult = (message) => {
    resultDiv.textContent = message;
};

// Function to update the score display
const updateScores = () => {
    scoreDiv.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;
};

// Function to check for a winner
const checkWinner = () => {
    if (humanScore === 5) {
        displayResult("You win the game!");
        disableButtons();
    } else if (computerScore === 5) {
        displayResult("Computer wins the game!");
        disableButtons();
    }
};

// Function to disable buttons after the game ends
const disableButtons = () => {
    rock.disabled = true;
    paper.disabled = true;
    scissors.disabled = true;
};

// Function to play a single round
const playRound = (humanChoice, computerChoice) => {
    if (humanChoice === computerChoice) {
        displayResult(`It's a tie! Both chose ${humanChoice}`);
    } else if (
        (humanChoice === "rock" && computerChoice === "scissors") ||
        (humanChoice === "paper" && computerChoice === "rock") ||
        (humanChoice === "scissors" && computerChoice === "paper")
    ) {
        humanScore++;
        displayResult(`You win this round! ${humanChoice} beats ${computerChoice}`);
    } else {
        computerScore++;
        displayResult(`You lose this round! ${computerChoice} beats ${humanChoice}`);
    }

    // Update scores and check for a winner
    updateScores();
    checkWinner();
};

// Add event listeners for buttons
rock.addEventListener('click', () => playRound("rock", getComputerChoice()));
paper.addEventListener('click', () => playRound("paper", getComputerChoice()));
scissors.addEventListener('click', () => playRound("scissors", getComputerChoice()));

// Initialize score display
updateScores();
