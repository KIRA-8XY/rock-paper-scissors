function getComputerChoice(){
    const choice = Math.floor(Math.random() * 3);
    if (choice === 0){
        return 'rock';
    } else if (choice === 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}

function getHumanChoice(){
    let humanInput = prompt('One, two, three, shoot!')
    return humanInput
}

function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    function playRound(humanChoice, computerChoice){
        humanChoice = humanChoice.toLowerCase()

        if (humanChoice === computerChoice) {
            console.log("It's a tie!")
        } else if ((humanChoice === 'paper' && computerChoice === 'rock') || (humanChoice === 'scissors' && computerChoice === 'paper') || (humanChoice === 'rock' && computerChoice === 'scissors')){
            humanScore++
            console.log('You win!')
        } else {
            computerScore++
            console.log('You lose.')
        }
    }

    for (let i=0; i<5 ; i++){
        const humanSelection = getHumanChoice()
        const computerSelection = getComputerChoice()

        playRound(humanSelection, computerSelection)
    }

    if (humanScore > computerScore){
        console.log("You won the game!")
    } else if (computerScore > humanScore){
        console.log('The computer won the game.')
    } else {
        console.log('The game was a tie.')
    }

}

playGame()