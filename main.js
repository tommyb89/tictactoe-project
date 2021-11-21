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

// Main function to check game status
const checkGameStatus = () => {
  // Select all board elements to compare them after

  const topLeft = tiles[0].classList[1];
  const topMiddle = tiles[1].classList[1];
  const topRight = tiles[2].classList[1];
  const middleLeft = tiles[3].classList[1];
  const middleMiddle = tiles[4].classList[1];
  const middleRight = tiles[5].classList[1];
  const bottomLeft = tiles[6].classList[1];
  const bottomMiddle = tiles[7].classList[1];
  const bottomRight = tiles[8].classList[1];
};
