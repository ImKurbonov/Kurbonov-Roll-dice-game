// Buttons
let btnRoll = document.querySelector(".btn--roll");
let btnNew = document.querySelector(".btn--new");
let btnHold = document.querySelector(".btn--hold");
// Dice img
let diceImg = document.querySelector(".dice");
diceImg.style.display = "none";

// Varibles
let currentScore = 0;
let activePlayer = 0;
let scores = [0, 0];
let gameOver = true;

function switchPlayer() {
  currentScore = 0;
  document.getElementById(`current--${activePlayer}`);
  activePlayer = activePlayer === 0 ? 1 : 0;
  document.querySelector(".player--0").classList.toggle("player--active");
  document.querySelector(".player--1").classList.toggle("player--active");
}

// eventes
btnRoll.addEventListener("click", () => {
  if (gameOver) {
    diceImg.style.display = "block";

    let randomNumber = Math.floor(Math.random() * 6 + 1);
    diceImg.src = `./dice-${randomNumber}.png`;

    if (randomNumber !== 1) {
      currentScore += randomNumber;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      switchPlayer();
    }
  }
});

// btn hold
btnHold.addEventListener("click", () => {
  if (gameOver) {
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];

    if (scores[activePlayer] >= 20) {
      gameOver = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add("player--winner");
    }
    switchPlayer();
  }
});

// newGameBtn
btnNew.addEventListener("click", () => {
  diceImg.style.display = "none";
  currentScore = 0;
  activePlayer = 0;
  scores = [0, 0];
  gameOver = true;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`current--0`).textContent = 0;
  document.getElementById(`score--0`).textContent = 0;
  document.getElementById(`score--1`).textContent = 0;
  document.querySelector(".player--0").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--winner");
  document.querySelector(".player--1").classList.remove("player--active");
  document.querySelector(".player--0").classList.add("player--active");
});
