
let restart = document.querySelector('.restart')
let playerScore = document.querySelector('.player-score')
let computerScore = document.querySelector('.computer-score')
let choices = document.querySelectorAll('.choice')
let result = document.querySelector('#msg')

let pScore = 0
let cScore = 0

let choicesArray = ['rock', 'paper', 'scissors']

restart.addEventListener('click', () =>
    {
        pScore = 0
        cScore = 0
    playerScore.innerText = pScore
    computerScore.innerText = cScore

})

const drawGame = () => {
    result.style.display = 'block'
    result.innerText = "The game is Draw, Play Again!"
    result.style.color = 'blue'
}

const computerChoice = (arr) => {
    const randomChoice = Math.floor(Math.random() * arr.length);
    return arr[randomChoice]
}

const winner = (playerWin, playerChoice, compChoice) => {
    if (playerWin) {
        result.style.display = 'block'
        result.style.color = 'gold'
        result.innerText = `${playerChoice} beats ${compChoice}, Player Won!`;
        playerScore.innerText = ++pScore;
    }else{
        result.style.display = 'block'
        result.style.color = 'red'
        result.innerText = `${compChoice} beats ${playerChoice}, Computer Wins!`;
        computerScore.innerText = ++cScore;
    }
}

const playGame = (playerChoice) => {

    let compChoice = computerChoice(choicesArray)

    if (playerChoice === compChoice){
        drawGame();
    }else{
        let playerWin = true;
    if (playerChoice === "rock" ){
        playerWin = compChoice === 'paper' ? false : true;
    }else if (playerChoice === 'paper'){
        playerWin = compChoice === 'scissors' ?  false : true;
    }else{
        playerWin = compChoice == 'rock' ? false : true; 
    }

    winner(playerWin, playerChoice, compChoice)

    }
    

}
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.getAttribute("id");
        playGame(playerChoice)
    })
})



