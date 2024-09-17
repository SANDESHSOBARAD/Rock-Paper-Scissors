let rock = document.querySelector('.rock')
let paper = document.querySelector('.paper')
let scissors = document.querySelector('.scissors')
let restart = document.querySelector('.restart')
let playerScore = document.querySelector('.player-score')
let computerScore = document.querySelector('computer-score')

let count = 0
rock.addEventListener('click', () =>{
    console.log("you clicked on rock")
    playerScore.innerHTML = ++count
    console.log(count)

})

paper.addEventListener('click', () =>{
    console.log("you clicked on paper")
})

scissors.addEventListener('click', () =>{
    console.log("you clicked on scissors")
})

restart.addEventListener('click', () =>{
    console.log("you clicked on restart game")
})

