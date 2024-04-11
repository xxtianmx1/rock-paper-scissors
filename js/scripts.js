console.log("Hola Mundo")

function getComputerChoice(){
    myArray = ["rock","paper", "scissors"]

    return myArray[ Math.floor( Math.random()*3 )  ]
}

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase()
    result = "none"

    if( playerSelection == computerSelection ){
        result = "TIE"
    }else if( playerSelection == "rock" && computerSelection == "paper" ){
        result = "LOSE"
    }else if( playerSelection == "rock" && computerSelection == "scissors" ){
        result = "WIN"
    }else if( playerSelection == "paper" && computerSelection == "rock" ){
        result = "WIN"
    }
    else if( playerSelection == "paper" && computerSelection == "scissors" ){
        result = "LOSE"
    }else if( playerSelection == "scissors" && computerSelection == "rock" ){
        result = "LOSE"
    }else if( playerSelection == "scissors" && computerSelection == "paper" ){
        result = "WIN"
    }

    return ( result + "!, playerSelection: " + playerSelection + ", computerSelection: " + computerSelection)
}


console.log( "Game 1 " + playRound( "RoCK", getComputerChoice() ) )
console.log( "Game 2 " + playRound( "RoCK", getComputerChoice() ) )
console.log( "Game 3 " + playRound( "RoCK", getComputerChoice() ) )