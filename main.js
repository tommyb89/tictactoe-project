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

  // check the winner

  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    handleWin(topLeft);
    tiles[0].classList.add("won");
    tiles[1].classList.add("won");
    tiles[2].classList.add("won");
  } else if (
    middleLeft &&
    middleLeft === middleMiddle &&
    middleLeft === middleRight
  ) {
    handleWin(middleLeft);
    tiles[3].classList.add("won");
    tiles[4].classList.add("won");
    tiles[5].classList.add("won");
  } else if (
    bottomLeft &&
    bottomLeft === bottomMiddle &&
    bottomLeft === bottomRight
  ) {
    handleWin(bottomLeft);
    tiles[6].classList.add("won");
    tiles[7].classList.add("won");
    tiles[8].classList.add("won");
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    tiles[0].classList.add("won");
    tiles[3].classList.add("won");
    tiles[6].classList.add("won");
  } else if (
    topMiddle &&
    topMiddle === middleMiddle &&
    topMiddle === bottomMiddle
  ) {
    handleWin(topMiddle);
    tiles[1].classList.add("won");
    tiles[4].classList.add("won");
    tiles[7].classList.add("won");
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
    tiles[2].classList.add("won");
    tiles[5].classList.add("won");
    tiles[8].classList.add("won");
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
    tiles[0].classList.add("won");
    tiles[4].classList.add("won");
    tiles[8].classList.add("won");
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
    tiles[2].classList.add("won");
    tiles[4].classList.add("won");
    tiles[6].classList.add("won");
  } else if (
    topLeft &&
    topMiddle &&
    topRight &&
    middleLeft &&
    middleMiddle &&
    middleRight &&
    bottomLeft &&
    bottomMiddle &&
    bottomRight
  ) {
    gameIsLive = false;
    statusBox.innerHTML = "Game is tied!";
  } else {
    xIsNext = !xIsNext;
    if (xIsNext) {
      statusBox.innerHTML = `${x} is next`;
    } else {
      statusBox.innerHTML = `<span>${o} is next</span>`;
    }
  }
};

// Event handlers
const handleReset = () => {
  xIsNext = true;
  statusBox.innerHTML = `${x} is next`;
  for (const tile of tiles) {
    tile.classList.remove("x");
    tile.classList.remove("o");
    tile.classList.remove("won");
  }
  gameIsLive = true;
};
