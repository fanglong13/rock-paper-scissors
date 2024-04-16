const choices = ["rock", "paper", "scissors"];

function getComputerChoice(){
    const computerChoice = choices[Math.floor(Math.random() * choices.length)];
    return computerChoice;
}

function getPlayerChoice(){
    let validatedInput = false;
    while(validatedInput == false){
        const playerChoice = prompt("Rock, Paper or Scissors?");
        if(playerChoice == null){
            continue;
        }
        const playerChoiceInLower = playerChoice.toLowerCase();
        if(choices.includes(playerChoiceInLower)){
            validatedInput = true;
            return playerChoiceInLower;
        }
    }
}

function checkWinner(playerSelection, computerSelection){
    if (playerSelection == computerSelection){
        return "Tie";
    }
    else if(
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "paper" && computerSelection == "rock") ||
        (playerSelection == "scissors" && computerSelection == "paper")
    ){
        return "Player";
    }
    else{
        return "Computer";
    }
}

function playRound(playerSelection, computerSelection){
    const result = checkWinner(playerSelection, computerSelection);
    if(result == "Tie"){
        return "It's a Tie!"
    }
    else if(result == "Player"){
        return `You win! ${playerSelection} beats ${computerSelection}`
    }
    else{
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;
    for (let i = 0; i < 5; i++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
        console.log("___________")
        if(checkWinner(playerSelection, computerSelection) == "Player"){
            scorePlayer++;
        }
        else if(checkWinner(playerSelection, computerSelection) == "Computer"){
            scoreComputer++;
        }
    }
    console.log("Game Over!")
    if(scorePlayer > scoreComputer){
        console.log("Player was the winner!");
    }
    else if(scoreComputer > scorePlayer){
        console.log("Computer was the winner!")
    }
    else{
        console.log("We have a tie!")
    }
}

game();
