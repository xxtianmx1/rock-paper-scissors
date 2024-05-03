console.log("Hola Mundo")

playerScore = 0
cpuScore = 0
games = 0

function getComputerChoice(){
    myArray = ["rock","paper", "scissors"]

    return myArray[ Math.floor( Math.random()*3 )  ]
}

function getPlayerSelection( selection ){
    return selection
}

function playRound(playerSelection, computerSelection){

    result = "none"

    if( playerSelection == computerSelection ){
        result = "TIE"
    }else if( playerSelection == "rock" && computerSelection == "paper" ){
        result = "LOSE"
        cpuScore++
    }else if( playerSelection == "rock" && computerSelection == "scissors" ){
        result = "WIN"
        playerScore++
    }else if( playerSelection == "paper" && computerSelection == "rock" ){
        result = "WIN"
        playerScore++
    }
    else if( playerSelection == "paper" && computerSelection == "scissors" ){
        result = "LOSE"
        cpuScore++
    }else if( playerSelection == "scissors" && computerSelection == "rock" ){
        result = "LOSE"
        cpuScore++
    }else if( playerSelection == "scissors" && computerSelection == "paper" ){
        result = "WIN"
        playerScore++
    }

    const resultado = document.querySelector("#result")
    resultado.textContent = result 

    const player_points = document.querySelector("#player-points")
    player_points.textContent = playerScore

    const cpu_points = document.querySelector("#cpu-points")
    cpu_points.textContent = cpuScore


}


function playGame(selection){

    numGames = 5;
    i=0
    winner = "DRAW"

    const game = document.querySelector("#game")
    games++
    game.textContent = "Game # "+ games 
    
    const player = document.querySelector("#player")
    player.textContent = "Player choose " + selection

    const cpuChoice = getComputerChoice() 

    const computer = document.querySelector("#computer")
    computer.textContent = "Computer choose " + cpuChoice

    playRound( getPlayerSelection(selection), cpuChoice)
    

    if( playerScore == 5 ){
        winner="PLAYER"
        const win = document.querySelector("#winner")
        win.textContent = "CONGRATULATION!!!, you are the winner"
    }else if( cpuScore == 5 ){
        winner="CPU"
        const win = document.querySelector("#winner")
        win.textContent = "The winner is : " + winner
    }

    
    
    
}


const imgPaper = document.querySelector("#paper");
const imgRock = document.querySelector("#rock");
const imgScissors = document.querySelector("#scissors");

imgPaper.addEventListener("click", () => playGame("paper") );
imgRock.addEventListener("click", () => playGame("rock") );
imgScissors.addEventListener("click", () => playGame("scissors") );



