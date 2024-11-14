// Variables for the DOM elements

let word = document.getElementById("word");
let text = document.getElementById("text");
let scorekeeper = document.getElementById("score");
let timekeeper = document.getElementById("time");

let settingsbtn = document.querySelector(".settings-btn");




// Array
const words = [
  "dependent",
  "dog",
  "superficial",
  "admit",
  "juice",
  "javascript",
  "developer",
  "airplane",
  "great",
  "fun",
  "manipulate",
  "cat",
  "transition",
  "school",
  "computer",
  "programming",
  "drag",
  "loving",
  "north",
];

let randomWord;
let score=0;
let time=10;

function randomWord () {
  return words[Math.floor(Math.random() * words.length)];
}



updateScore ();

updateTime ();

GameOver ();

