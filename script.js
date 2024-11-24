// Variables for the DOM elements

let word = document.getElementById("word");
let text = document.getElementById("text");
let scorekeeper = document.getElementById("score");
let timekeeper = document.getElementById("time");
let settingsbtn = document.querySelector(".settings-btn");
let settings = document.getElementById("settings");
let settingsForm = document.getElementById("settings-form");
let difficultySetting = document.getElementById("difficulty");
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

// JS code

let randomWord;
let score=0;      // Score is set to start at 0.
let time=10;      // Timer starts at 10.
let timeInterval = setInterval(updateTime, 1000);     // Timer counts down in intervals of 1 second.
let difficulty = 
  localStorage.getItem("difficulty")!=null            // getItem method retrieves the paired string/object assigned
    ? localStorage.getItem("difficulty")              // using the setItem method at bottom of code.
    : "medium";
difficultySetting.value =
  localStorage.getItem("difficulty")!=null
    ? localStorage.getItem("difficulty")
    : "medium"

function getRandomWord() {
  return words[Math.floor(Math.random() * words.length)];     // Math methods which return a random word from the array.
}

function addWordtoDOM() {           // Function which assigns the random word to the HTML <word> tag.
  randomWord = getRandomWord();
  word.innerHTML = randomWord;
}
addWordtoDOM();

function updateScore() {
  score++;                          // Updates the score by 1 every time correct word is input.
  scorekeeper.innerHTML = score;    // Changes the HTML to display the updated score.
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
  `                                   // This HTML will be generated when the gameOver function runs.
  gameover.style.display = "flex";    // Changes the display property of the CSS element from "none" to "flex".
}

text.addEventListener("input", (event) => {     // Adds an EventListener to the input field of the HTML document.
  const inputText = event.target.value;
  if (inputText === randomWord) {
    addWordtoDOM();                 // If statement which adds a new random word to the input field.
    event.target.value = "";        // Clears the input field when user types the correct word.
    if(difficulty==="hard") {       // If/else statement which regulates time added to counter depending on difficulty setting.
      time+=2;
    } else if (difficulty==="medium") {
      time+=3;
    } else {
      time+=5;
    }
    updateScore();
    //time+=5;            // Adds 5s to the timer when the updateScore functions runs, but redundant due to above if/else statements.
  }
});

settingsbtn.addEventListener("click", ()=>{
  settings.classList.toggle("hide");          // Eventlistener on button which responds to click action.
})                                            // This functions as a toggle for the difficulty selection tab.

settingsForm.addEventListener("change", (event) => {    // Eventlistener for "change" event on the HTML <select> tag which assigns difficulty.
  difficulty = event.target.value;
  localStorage.setItem("difficulty", difficulty)    // Using localStorage to access the object from the document and pairing that value to
})                                                  // that of the object named difficulty.