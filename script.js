// Set humanScore to 0
// Set computerScore to 0

let humanScore = 0;
let computerScore = 0;

/*
FUNCTION getComputerChoice
    Generate a random number from 0 to 2
    IF number is 0, RETURN "rock"
    ELSE IF number is 1, RETURN "paper"
    ELSE, RETURN "scissors"
*/

function getComputerChoice(){
    choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        return 'rock';
    } else if (choice === 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}

/*
FUNCTION getHumanChoice
    Ask the player for a choice
    Return the player's answer
*/

function getHumanChoice(){
    let humanInput = prompt('One, two, three, shoot!')
    return humanInput
}

/*
FUNCTION playRound(humanChoice, computerChoice)
    Convert humanChoice to lowercase (case-insensitive)

    IF humanChoice equals computerChoice
        Print "It's a tie!"
    
    ELSE IF humanChoice beats computerChoice
        Increase humanScore by 1
        Print "You win!"

    ELSE 
        Increase computerScore by 1
        Print "You lose!"

END FUNCTION
*/

function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase()

    if (humanChoice === computerChoice) {
        console.log("It's a tie!")
    } else if ((humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'rock') || (humanChoice === 'rock' && computerChoice === 'scissors')){
        console.log('You win!')
    } else {
        console.log('You lose.')
    }
}



