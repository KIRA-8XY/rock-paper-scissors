

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

function getHumanChoice(){
    let humanInput = prompt('One, two, three, shoot!')
    return humanInput
}

