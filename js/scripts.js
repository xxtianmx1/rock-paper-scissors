console.log("Hola Mundo")

playerScore = 0
cpuScore = 0

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

    return ( result + "!, playerSelection: " + playerSelection + ", computerSelection: " + computerSelection)
}


function playGame(selection){

    numGames = 5;
    i=0
    winner = "DRAW"

    
    console.log( "Game 1 " + playRound( getPlayerSelection(selection), getComputerChoice() ) )
    

    if( playerScore>cpuScore ){
        winner="PLAYER"
    }else if( cpuScore>playerScore ){
        winner="CPU"
    }
    console.log( "The winner is "+ winner + "\n player: "+ playerScore + ", computer: " + cpuScore)
    
}


const imgPaper = document.querySelector("#paper");
const imgRock = document.querySelector("#rock");
const imgScissors = document.querySelector("#scissors");

imgPaper.addEventListener("click", () => playGame("paper") );
imgRock.addEventListener("click", () => playGame("rock") );
imgScissors.addEventListener("click", () => playGame("scissors") );



