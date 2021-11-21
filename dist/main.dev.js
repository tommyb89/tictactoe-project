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
  var bottomRight = tiles[8].classList[1];
};