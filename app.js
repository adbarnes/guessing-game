let playerTurn = 1;
let playerGuess = [];
let randomNumber = Math.floor(Math.random() * 100) + 1;

let alertContainer = document.getElementById("alertContainer");
let guessInput = document.getElementById("input-guess");
let guessPara = document.getElementById("guess");
let guessCountPara = document.getElementById("guess-count");
let resetDiv = document.getElementById("resetContainer");
let guessInputDiv = document.getElementById("guessInputDiv");
let guessBtnDiv = document.getElementById("guessBtnDiv");
let resetBtn = document.getElementById("btn-reset");
let guessBtn = document.getElementById("btn-guess");

// Alert
function message(message) {
  alertContainer.classList.remove("hidden");
  alertContainer.innerHTML = message;
}
// Reset
function reset() {
  guessBtnDiv.classList.add("hidden");
  guessInputDiv.classList.add("hidden");
  resetDiv.classList.remove("hidden");
  resetBtn.addEventListener("click", restart);
}

//Restart
function restart() {
  guessBtnDiv.classList.remove("hidden");
  guessInputDiv.classList.remove("hidden");
  resetDiv.classList.add("hidden");
  alertContainer.classList.add("hidden");
  guessInput.value = " ";
  guessCountPara.innerHTML = " ";
  guessPara.innerHTML = " ";
  playerGuess = [];
  playerTurn = 1;
  guessInput.focus();
  randomNumber = Math.floor(Math.random() * 100) + 1;
}

// Guess
function recordGuess() {
  guessInput.focus();
  guess = guessInput.value;
  playerGuess.push(guess);
  guessPara.innerHTML = playerGuess;
  guessCountPara.innerHTML = playerTurn;

  if (playerTurn === 10) {
    reset();
    message("No guesses left!");
  } else {
    if (guess == randomNumber) {
      reset();
      message("Congrats!");
    } else if (guess < randomNumber) {
      guessInput.value = "";
      message("Higher!");
    } else {
      guessInput.value = "";
      message("Lower!");
    }
  }
  playerTurn++;
}

guessBtn.addEventListener("click", recordGuess);
