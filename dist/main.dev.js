"use strict";

// Selecting HTML elements
var statusBox = document.querySelector(".status");
var reset = document.querySelector(".reset");
var tiles = document.querySelectorAll(".board__tile"); // Game symbols

var x = "x";
var o = "o"; // Game variables

var isLive = true;
var xIsNext = true; // Functions for the game

var letterToSymbol = function letterToSymbol(letter) {
  return letter === "x" ? x : o;
}; // Handle winning


var handleWin = function handleWin(letter) {
  isLive = false;

  if (letter === "x") {
    statusBox.innerHTML = "".concat(letterToSymbol(letter), " has won!");
  } else {
    statusBox.innerHTML = "<span>".concat(letterToSymbol(letter), " has won!</span>");
  }
}; // Main function to check game status


var checkGameStatus = function checkGameStatus() {
  // Select all board elements to compare them after
  var topLeft = tiles[0].classList[1];
  var topMiddle = tiles[1].classList[1];
  var topRight = tiles[2].classList[1];
  var middleLeft = tiles[3].classList[1];
  var middleMiddle = tiles[4].classList[1];
  var middleRight = tiles[5].classList[1];
  var bottomLeft = tiles[6].classList[1];
  var bottomMiddle = tiles[7].classList[1];
  var bottomRight = tiles[8].classList[1]; // check the winner

  if (topLeft && topLeft === topMiddle && topLeft === topRight) {
    handleWin(topLeft);
    tiles[0].classList.add("won");
    tiles[1].classList.add("won");
    tiles[2].classList.add("won");
  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    handleWin(middleLeft);
    tiles[3].classList.add("won");
    tiles[4].classList.add("won");
    tiles[5].classList.add("won");
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    handleWin(bottomLeft);
    tiles[6].classList.add("won");
    tiles[7].classList.add("won");
    tiles[8].classList.add("won");
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    tiles[0].classList.add("won");
    tiles[3].classList.add("won");
    tiles[6].classList.add("won");
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
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
  } else if (topLeft && topMiddle && topRight && middleLeft && middleMiddle && middleRight && bottomLeft && bottomMiddle && bottomRight) {
    gameIsLive = false;
    statusBox.innerHTML = "Game is tied!";
  } else {
    xIsNext = !xIsNext;

    if (xIsNext) {
      statusBox.innerHTML = "".concat(x, " is next");
    } else {
      statusBox.innerHTML = "<span>".concat(o, " is next</span>");
    }
  }
}; // Event handlers


var handleReset = function handleReset() {
  xIsNext = true;
  statusBox.innerHTML = "".concat(x, " is next");
  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = tiles[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var tile = _step.value;
      tile.classList.remove("x");
      tile.classList.remove("o");
      tile.classList.remove("won");
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator["return"] != null) {
        _iterator["return"]();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  gameIsLive = true;
};