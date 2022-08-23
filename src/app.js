/* eslint-disable */
import "bootstrap";
import "./style.css";

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

const width = document.querySelector("#width");
const height = document.querySelector("#height");

let card;
let number;
let upperSymbol;
let lowerSymbol;

let currentSuitName = "";

const genRandomNum = array => {
  return Math.floor(Math.random() * array.length);
};

const generateBlankCard = () => {
  card = document.createElement("div");
  upperSymbol = document.createElement("span");
  number = document.createElement("span");
  lowerSymbol = document.createElement("span");

  card.classList.add("card");
  card.append(upperSymbol);
  card.append(number);
  card.append(lowerSymbol);
  document.querySelector("body").append(card);
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

const changeDim = dim => {
  if (dim === "h") {
    if (height.value) {
      document.documentElement.style.setProperty(
        "--cardHeight",
        `${parseInt(height.value)}px`
      );
    }
  } else if (dim === "w") {
    if (width.value) {
      document.documentElement.style.setProperty(
        "--cardWidth",
        `${parseInt(width.value)}px`
      );
    }
  }
};

window.setInterval(generateRandomCard, 10000);
window.generate = () => {
  if (!card) {
    generateBlankCard();
  }
  generateRandomCard();
};
window.changeDim = changeDim;
