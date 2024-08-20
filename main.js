function getUserChoice(userInput) {
    const userChoiceLowerCase = userInput.toLowerCase();

    if (userChoiceLowerCase === 'rock' || userChoiceLowerCase === 'paper' || userChoiceLowerCase === 'scissors' || userChoiceLowerCase === 'bomb') {
        return userChoiceLowerCase;
    } else {
        console.log('error')
    }
}

// console.log(getUserChoice('Rock'));
// console.log(getUserChoice('Paper'));
// console.log(getUserChoice('Scissors'));
// getUserChoice('Banana');


function getComputerChoice() {
    var randomNumber = Math.floor(Math.random() * 3) + 1;
    if (randomNumber === 1) {
        return 'rock';
    } else if (randomNumber === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

// console.log(getComputerChoice());

function determineWinner(userChoice, computerChoice) {
    var winner;
    if (userChoice === computerChoice) {
        return 'The game was a tie';
    }
    if (userChoice === 'bomb') {
        return 'The user wins!'
    }
    if (userChoice === 'rock' && computerChoice === 'paper') {
        return 'The computer wins!'
    } else if (userChoice === 'rock' && computerChoice === 'scissors')
        return 'The user wins!';
    if (userChoice === 'paper' && computerChoice === 'rock') {
        return 'The user wins!';
    } else if (userChoice === 'paper' && computerChoice === 'scissors') {
        return 'The computer wins!';
    }
    if (userChoice === 'scissors' && computerChoice === 'rock') {
        return 'The computer wins!';
    } else if (userChoice === 'scissors' && computerChoice === 'paper') {
        return 'The user wins!';
    }
}

// console.log(determineWinner('scissors', 'scissors'));

function playGame() {
    var userChoice = getUserChoice('Paper');
    console.log(userChoice);
    var computerChoice = getComputerChoice();
    console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice));
}

playGame();
