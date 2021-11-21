// Selecting HTML elements
const statusBox = document.querySelector(".status");
const reset = document.querySelector(".reset");
const tiles = document.querySelectorAll(".board__tile");

// Game symbols
const x = "x";
const o = "o";

// Game variables
let isLive = true;
let xIsNext = true;

// Functions for the game
const letterToSymbol = (letter) => (letter === "x" ? x : o);

// Handle winning
const handleWin = (letter) => {
  isLive = false;
  if (letter === "x") {
    statusBox.innerHTML = `${letterToSymbol(letter)} has won!`;
  } else {
    statusBox.innerHTML = `<span>${letterToSymbol(letter)} has won!</span>`;
  }
};
