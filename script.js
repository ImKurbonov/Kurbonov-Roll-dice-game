// Buttons
let btnRoll = document.querySelector('.btn--roll')
let btnNew = document.querySelector('.btn--new')
let btnHold = document.querySelector('.btn--hold')
// Dice img
let diceImg = document.querySelector('.dice')
diceImg.style.display = 'none'

btnRoll.addEventListener('click', ()=> {
diceImg.style.display = 'block'
})