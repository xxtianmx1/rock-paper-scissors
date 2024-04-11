console.log("Hola Mundo")

playerScore = 0
cpuScore = 0

function getComputerChoice(){
    myArray = ["rock","paper", "scissors"]

    return myArray[ Math.floor( Math.random()*3 )  ]
}

function getPlayerSelection(){
    return prompt("Pick one : rock, paper, scissors").toLowerCase()
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


function playGame(){

    numGames = 5;
    i=0
    winner = "DRAW"

    while( i<numGames ){
        i++
        console.log( "Game 1 " + playRound( getPlayerSelection(), getComputerChoice() ) )
    }

    if( playerScore>cpuScore ){
        winner="PLAYER"
    }else if( cpuScore>playerScore ){
        winner="CPU"
    }
    console.log( "The winner is "+ winner + "\n player: "+ playerScore + ", computer: " + cpuScore)
    
}



playGame()