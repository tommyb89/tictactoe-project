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
};