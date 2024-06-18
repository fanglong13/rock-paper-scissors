const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.querySelector("#playerDisplay");
const computerDisplay = document.querySelector("#computerDisplay");
const resultDisplay = document.querySelector("#resultDisplay");
const playerScoreDisplay = document.querySelector("#playerScoreDisplay");
const computerScoreDisplay = document.querySelector("#computerScoreDisplay");
let playerScore = 0;
let computerScore = 0;

function playGame(playerChoice){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    let result = "";

    if (playerChoice == computerChoice){
        result = "IT'S A TIE!";
    }
    else if(
        (playerChoice == "rock" && computerChoice == "scissors") ||
        (playerChoice == "paper" && computerChoice == "rock") ||
        (playerChoice == "scissors" && computerChoice == "paper")
    ){
        result = "YOU WIN!";
    }
    else{
        result = "YOU LOSE!";
    }    

    playerDisplay.textContent = `PLAYER: ${playerChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    resultDisplay.classList.remove("greenText", "redText");

    if(result === "YOU WIN!"){
        resultDisplay.classList.add("greenText");
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    }
    else if(result === "YOU LOSE!"){
        resultDisplay.classList.add("redText");
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }
}
// function getComputerChoice(){
//     const computerChoice = choices[Math.floor(Math.random() * choices.length)];
//     return computerChoice;
// }

// function getPlayerChoice(){
//     let validatedInput = false;
//     while(validatedInput == false){
//         const playerChoice = prompt("Rock, Paper or Scissors?");
//         if(playerChoice == null){
//             continue;
//         }
//         const playerChoiceInLower = playerChoice.toLowerCase();
//         if(choices.includes(playerChoiceInLower)){
//             validatedInput = true;
//             return playerChoiceInLower;
//         }
//     }
// }

// function checkWinner(playerSelection, computerSelection){
    // if (playerSelection == computerSelection){
    //     return "Tie";
    // }
    // else if(
    //     (playerSelection == "rock" && computerSelection == "scissors") ||
    //     (playerSelection == "paper" && computerSelection == "rock") ||
    //     (playerSelection == "scissors" && computerSelection == "paper")
    // ){
    //     return "Player";
    // }
    // else{
    //     return "Computer";
    // }
// }

// function playRound(playerSelection, computerSelection){
//     const result = checkWinner(playerSelection, computerSelection);
//     if(result == "Tie"){
//         return "It's a Tie!"
//     }
//     else if(result == "Player"){
//         return `You win! ${playerSelection} beats ${computerSelection}`
//     }
//     else{
//         return `You lose! ${computerSelection} beats ${playerSelection}`
//     }
// }

// function game(){
//     let scorePlayer = 0;
//     let scoreComputer = 0;
//     for (let i = 0; i < 5; i++) {
//         const playerSelection = getPlayerChoice();
//         const computerSelection = getComputerChoice();
//         console.log(playRound(playerSelection, computerSelection));
//         console.log("___________")
//         if(checkWinner(playerSelection, computerSelection) == "Player"){
//             scorePlayer++;
//         }
//         else if(checkWinner(playerSelection, computerSelection) == "Computer"){
//             scoreComputer++;
//         }
//     }
//     console.log("Game Over!")
//     if(scorePlayer > scoreComputer){
//         console.log("Player was the winner!");
//     }
//     else if(scoreComputer > scorePlayer){
//         console.log("Computer was the winner!")
//     }
//     else{
//         console.log("We have a tie!")
//     }
// }

// game();
