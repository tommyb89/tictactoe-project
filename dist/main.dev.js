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
    cellDivs[0].classList.add("won");
    cellDivs[1].classList.add("won");
    cellDivs[2].classList.add("won");
  } else if (middleLeft && middleLeft === middleMiddle && middleLeft === middleRight) {
    handleWin(middleLeft);
    cellDivs[3].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[5].classList.add("won");
  } else if (bottomLeft && bottomLeft === bottomMiddle && bottomLeft === bottomRight) {
    handleWin(bottomLeft);
    cellDivs[6].classList.add("won");
    cellDivs[7].classList.add("won");
    cellDivs[8].classList.add("won");
  } else if (topLeft && topLeft === middleLeft && topLeft === bottomLeft) {
    handleWin(topLeft);
    cellDivs[0].classList.add("won");
    cellDivs[3].classList.add("won");
    cellDivs[6].classList.add("won");
  } else if (topMiddle && topMiddle === middleMiddle && topMiddle === bottomMiddle) {
    handleWin(topMiddle);
    cellDivs[1].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[7].classList.add("won");
  } else if (topRight && topRight === middleRight && topRight === bottomRight) {
    handleWin(topRight);
    cellDivs[2].classList.add("won");
    cellDivs[5].classList.add("won");
    cellDivs[8].classList.add("won");
  } else if (topLeft && topLeft === middleMiddle && topLeft === bottomRight) {
    handleWin(topLeft);
    cellDivs[0].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[8].classList.add("won");
  } else if (topRight && topRight === middleMiddle && topRight === bottomLeft) {
    handleWin(topRight);
    cellDivs[2].classList.add("won");
    cellDivs[4].classList.add("won");
    cellDivs[6].classList.add("won");
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

  isLive = true;
};

var handleTileClick = function handleTileClick() {
  var classList = e.target.classList;

  if (!isLive || classList[1] === "x" || classList[1] === "o") {
    return;
  }

  if (xIsNext) {
    classList.add("x");
    checkGameStatus();
  } else {
    classList.add("o");
    checkGameStatus();
  }
}; // Event listeners


reset.addEventListener("click", handleReset);
var _iteratorNormalCompletion2 = true;
var _didIteratorError2 = false;
var _iteratorError2 = undefined;

try {
  for (var _iterator2 = tiles[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
    var tile = _step2.value;
    tile.addEventListener("click", handleTileClick);
  }
} catch (err) {
  _didIteratorError2 = true;
  _iteratorError2 = err;
} finally {
  try {
    if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
      _iterator2["return"]();
    }
  } finally {
    if (_didIteratorError2) {
      throw _iteratorError2;
    }
  }
}