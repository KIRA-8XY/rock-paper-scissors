function getRandomInt(max){
    return Math.floor(Math.random() * max)
}

function getComputerChoice(){
    choice = getRandomInt(3);
    if (choice === 0){
        return 'rock';
    } else if (choice === 1){
        return 'paper';
    } else {
        return 'scissors';
    }
}

