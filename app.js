
let restart = document.querySelector('.restart')
let playerScore = document.querySelector('.player-score')
let computerScore = document.querySelector('computer-score')
let choices = document.querySelectorAll('.choice')
let result = document.querySelector('.result')

let pScore = 0
let cScore = 0

const playGame = (playerChoice) => {
    console.log(`The player chose ${playerChoice}`)
}
choices.forEach((choice) => {
    choice.addEventListener('click', () => {
        const playerChoice = choice.getAttribute("id");
        playGame(playerChoice)
    })
})

restart.addEventListener('click', () =>{
    console.log('restarting the game')
})
