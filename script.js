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

function getRandomWord () {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordtoDOM () {
  randomWord = getRandomWord();
  word.innerhtml = randomWord;
}
addWordtoDOM();

text.addEventListener("input", (event) => {     // Adds an EventListener to the input field of the HTML document.
  const inputText = event.target.value;
  if (inputText === randomWord) {
    addWordtoDOM();                 // If statement which adds a new random word to the input field.
    event.target.value = "";        // Clears the input field when user types the correct word.
  }
});

updateScore ();

updateTime ();

GameOver ();

