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

let card = document.querySelector("div");
let cardSpans = document.querySelectorAll(".card>span");
let number = cardSpans[1];
let upperSymbol = cardSpans[0];
let lowerSymbol = cardSpans[2];
let currentSuitName = "";

const width = document.querySelector("#width");
const height = document.querySelector("#height");

const genRandomNum = array => {
  return Math.floor(Math.random() * array.length);
};

const generateRandomCard = () => {
  let suit = suits[genRandomNum(suits)];
  //suit = { name: "spade", symbol: "♠" }
  if (currentSuitName) {
    card.classList.remove(currentSuitName);
  }

  currentSuitName = suit.name;
  //currentSuitName = spade
  card.classList.add(currentSuitName);
  number.innerHTML = numbers[genRandomNum(numbers)];
  upperSymbol.innerHTML = suit.symbol;
  lowerSymbol.innerHTML = suit.symbol;
};

const changeHeight = () => {
  if (height.value) {
    document.documentElement.style.setProperty(
      "--cardHeight",
      `${height.value}px`
    );
  }
  // height.value = null;
};

const changeWidth = () => {
  if (width.value) {
    document.documentElement.style.setProperty(
      "--cardWidth",
      `${width.value}px`
    );
  }
  // width.value = null;
};

window.onload = generateRandomCard;
window.setInterval(generateRandomCard, 10000);
window.generate = generateRandomCard;

window.changeWidth = changeWidth;
window.changeHeight = changeHeight;
