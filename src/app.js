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

let card = document.querySelector("div");
let number = document.querySelectorAll("span")[1];
let upperSymbol = document.querySelectorAll("span")[0];
let lowerSymbol = document.querySelectorAll("span")[2];
let currentSuitName = "";

const genRandomNum = array => {
  return Math.floor(Math.random() * array.length);
};

const generateRandomCard = () => {
  let suit = suits[genRandomNum(suits)];
  if (currentSuitName) {
    card.classList.remove(currentSuitName);
  }
  currentSuitName = suit.name;
  card.classList.add(currentSuitName);
  number.innerHTML = numbers[genRandomNum(numbers)];
  upperSymbol.innerHTML = suit.symbol;
  lowerSymbol.innerHTML = suit.symbol;
};

window.onload = () => {
  generateRandomCard();
};

window.setInterval(generateRandomCard, 10000);
window.generate = generateRandomCard;
