// Elements

// Header - Timer
var timerEl = document.querySelector("#timer");
timerEl.textContent = "60";

// Landing Page - Title
var titleEl = document.querySelector(".title");
titleEl.textContent = "Coding Quiz Challenge";
// Landing Page - Directions
var directionsEl = document.querySelector(".directions");
directionsEl.textContent =
  "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds.";
// Landing Page - Start Button
var startButtonEl = document.querySelector("#startButton");

// Main Section
var mainEl = document.querySelector(".main");

var quizDivEl = document.querySelector("#quizDiv");
quizDivEl.setAttribute("style", "visibility:hidden");

// Correct vs Incorrect Display
var correctCheckEl = document.querySelector("#correctCheck");
var incorrectCheckEl = document.querySelector("#incorrectCheck");

// Final Scores
var finalScoreContainerEl = document.querySelector("#finalScoreContainer");
finalScoreContainerEl.setAttribute("style", "visibility:hidden");

var finalScorePEl = document.querySelector(".finalScoreP");

// Start Quiz, Start 60 Second Countdown
function startTime() {
  event.preventDefault();

  populate();

  // Display Quiz Question
  quizDivEl.setAttribute("style", "visibility:visible");

  // Hide Start Button, Landing Page and Correct vs Incorrect
  startButtonEl.setAttribute("style", "display:none");
  mainEl.setAttribute("style", "display:none");
  correctCheckEl.setAttribute("style", "visibility:hidden");
  incorrectCheckEl.setAttribute("style", "visibility:hidden");

  // Timer - 60 seconds starting time
  var secondsLeft = 60;

  // Timer - Count down by 1 second at a time
  var timerInterval = setInterval(function () {
    secondsLeft--;
    timerEl.textContent = secondsLeft;

    // If user guesses question correct, add 1 point to score, display correct message
    // If user guesses incorrectly, deduct 1 point to score, display incorrect message, deduct 10 seconds from timer
    // Display next question after answering
    Quiz.prototype.guess = function (answer) {
      if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
        correctCheckEl.setAttribute("style", "display:block");
        incorrectCheckEl.setAttribute("style", "display:none");
      } else {
        this.score--;
        correctCheckEl.setAttribute("style", "display:none");
        incorrectCheckEl.setAttribute("style", "display:block");
        timerEl.textContent = secondsLeft -= 10;
      }

      this.questionIndex++;
    };

    // When timer hits 0, sendMessage() function = announce time is up and go to scoreboard
    if (secondsLeft === 0) {
      clearInterval(timerInterval);
      sendMessage();
    }
  }, 1000);
}

// Announce time is up and go to scoreboard function
function sendMessage() {
  timerEl.textContent = "is up!";
  finalScoreContainer();
}

// Quiz Questions & Functions
function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
  return this.questions[this.questionIndex];
};

Quiz.prototype.isEnded = function () {
  return this.questions.length === this.questionIndex;
};

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.correctAnswer = function (choice) {
  return choice === this.answer;
};

function populate() {
  if (quiz.isEnded()) {
    finalScoreContainer();
    document.querySelector(".time").classList.add("hidden");
  } else {
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];

      guess("btn" + i, choices[i]);
    }
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function () {
    quiz.guess(guess);
    populate();
  };
}

// Quiz Questions
var questions = [
  new Question(
    "1. Commonly used data types do not include...",
    ["Strings", "Booleans", "Alerts", "Numbers"],
    "Alerts"
  ),
  new Question(
    "2. The condition in an if/then is enclosed within...",
    ["Quotes", "Curly Braces", "Parenthesis", "Square Brackets"],
    "Curly Braces"
  ),
  new Question(
    "3. Arrays in Javascript can be used to store...",
    ["Numbers in a string", "Other arrays", "Booleans", "All of the above"],
    "All of the above"
  ),
  new Question(
    "4. Strings values must be enclosed within _________ when being assigned to variables.",
    ["Quotes", "Commas", "Curly Brackets", "Parenthesis"],
    "Quotes"
  ),
  new Question(
    "5. A very useful tool used during development and debugging for printing content to the debugger is..",
    ["JavaScript", "Terminal/Bash", "Console.log", "For Loops"],
    "Console.log"
  ),
];

var quiz = new Quiz(questions);

// Final Score Function
function finalScoreContainer() {
  // Display Final Score Container
  mainEl.setAttribute("style", "visibility:visible");
  finalScoreContainerEl.setAttribute("style", "visibility:visible");

  // Hide Quiz
  startButtonEl.setAttribute("style", "display:none");
  quizDivEl.setAttribute("style", "display:none");

  titleEl.textContent = "Hall of Fame";
  directionsEl.textContent = "All done!";

  if (quiz.score <= 0) {
    finalScorePEl.textContent = "Oh No! Your final score is 0!";
  } else {
    finalScorePEl.textContent = "Nice job! Your final score is " + quiz.score + "!";
  }

}

// High Score Div
var highscoreInput = document.querySelector("#highscore-text");
var highscoreForm = document.querySelector("#highscore-form");
var highscoreList = document.querySelector("#highscore-list");
var finalScoreEl = document.querySelector("#finalScore");

var highscores = [];

init();

function renderHighscores() {
  highscoreList.innerHTML = "";

  for (var i = 0; i < highscores.length; i++) {
    var highscore = highscores[i];

    var li = document.createElement("li");
    li.textContent = highscore;
    li.setAttribute("data-index", i);

    var button = document.createElement("button");
    button.textContent = "Delete";
    button.setAttribute("class", "btn btn-danger");

    li.appendChild(button);
    highscoreList.appendChild(li);
  }
}

function init() {
  var storedHighscores = JSON.parse(localStorage.getItem("highscores"));

  if (storedHighscores !== null) {
    highscores = storedHighscores;
  }

  renderHighscores();
}

function storeHighscores() {
  localStorage.setItem("highscores", JSON.stringify(highscores));
}

highscoreForm.addEventListener("submit", function (event) {
  event.preventDefault();

  var highscoreText = highscoreInput.value.trim();

  if (highscoreText === "") {
    return;
  }

  highscores.push(highscoreText);
  highscoreInput.value = "";

  storeHighscores();
  renderHighscores();
});

highscoreList.addEventListener("click", function (event) {
  var element = event.target;

  if (element.matches("button") === true) {
    var index = element.parentElement.getAttribute("data-index");
    highscores.splice(index, 1);

    storeHighscores();
    renderHighscores();
  }
});
