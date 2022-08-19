/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = [
  { name: "diamond", symbol: "♦" },
  { name: "heart", symbol: "♥" },
  { name: "spade", symbol: "♠" },
  { name: "club", symbol: "♣" }
];
const numbers = [
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K"
];

const genRandom = array => {
  return Math.floor(Math.random() * array.length);
};

window.onload = function() {
  //write your code here
  let card = document.querySelector("div");
  let suit = suits[genRandom(suits)];
  card.classList.add(suit.name);
  let number = document.querySelectorAll("span")[1];
  number.innerHTML = numbers[genRandom(numbers)];
  let upperSymbol = document.querySelectorAll("span")[0];
  let lowerSymbol = document.querySelectorAll("span")[2];
  upperSymbol.innerHTML = suit.symbol;
  lowerSymbol.innerHTML = suit.symbol;
};
