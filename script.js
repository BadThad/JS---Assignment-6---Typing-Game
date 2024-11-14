// Variables for the DOM elements

let word = document.getElementById("word");
let text = document.getElementById("text");
let scorekeeper = document.getElementById("score");
let timekeeper = document.getElementById("time");
let settingsbtn = document.querySelector(".settings-btn");
let gameover = document.getElementById("end-game-container");



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
let score=0;      // Score is set to start at 0.
let time=10;      // Timer starts at 10.
let timeInterval = setInterval(updateTime, 1000);

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];
}

function addWordtoDOM() {
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}
addWordtoDOM();

function updateScore() {
  score++;
  scorekeeper.innerHTML = score;
}

function updateTime () {
  time--;                             // Reduces the time counter.
  timekeeper.innerHTML = time+ "s";   // Adds an "s" after the counter to indicate seconds.
  if (time === 0) {
    clearInterval(timeInterval);
    gameOver();
  }                             // If statement which clears the timeInterval and displays the Game Over message.
}

function gameOver() {
  gameover.innerHTML=` 
  <h1>Game Over</h1>
  <p>You scored ${score} points!</p>
  <button onClick="location.reload()">Try Again</button>
  `
  gameover.style.display = "flex";    // Changes the display property of the CSS element from "none" to "flex".
}

text.addEventListener("input", (event) => {     // Adds an EventListener to the input field of the HTML document.
  const inputText = event.target.value;
  if (inputText === randomWord) {
    addWordtoDOM();                 // If statement which adds a new random word to the input field.
    event.target.value = "";        // Clears the input field when user types the correct word.
    updateScore();
    time+=5;                    // Adds 5s to the timer when the updateScore functions runs.
  }
});