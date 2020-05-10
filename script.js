// create all necessary elements
var startButton = document.querySelector("#startButton");
var timeEl = document.querySelector(".time");
var titleEl = document.querySelector(".title");
var directionsEl = document.querySelector(".directions");
var questionEl = document.querySelector(".question");
var multipleChoiceEl = document.querySelector(".multipleChoice");
var viewHighScoresEl = document.querySelector(".viewHighScores");
 
// original style elements
timeEl.textContent = "60 seconds left";
viewHighScoresEl.textContent="View High Scores";
timeEl.setAttribute("style", "color:red; float: right; text-align:right;")
viewHighScoresEl.setAttribute("style", "float: left; text-align:left;")

titleEl.textContent= "Coding Quiz Challenge";
directionsEl.textContent= "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds.";
questionEl.textContent="";
multipleChoiceEl.textContent="";

// 60 second countdown
var secondsLeft = 60;

function startTime() {
    event.preventDefault();
    hideFirstElements();

    var timerInterval = setInterval(function() {
      secondsLeft--;
      timeEl.textContent = secondsLeft + " seconds left";
  
      if(secondsLeft === 0) {
        clearInterval(timerInterval);
        sendMessage();
      }
  
    }, 1000);
  }
  
  function sendMessage() {
    timeEl.textContent = "Time is up!";
  
  }
  

// hide start button and directions once quiz begins
function hideFirstElements() {
var hideStartButton = document.getElementById("startButton").style.display = 'none';
directionsEl.textContent="";
}

// start timer when start quiz button is clicked
document.getElementById("startButton").addEventListener("click", startTime)
  




// quiz questions

// timer at the top right
// view highscores link at the top left

// 1. Commonly used data types do not include
//     strings, booleans, alerts, numbers

// 2. The condition in an if/then is enclosed within
//  quotes, curly braces, paranthesis, square brackets

// 3. Arrays in Javascript can be used to store
//  numbers in a string, other arrays, booleans, all of the above

// 4. Strings values must be enclosed within _____ when being assigned to variables.
//  commas, curly brackets, quotes, parenthesis

// 5. A very useful tool used during development and debugging for printing content to the debugger is
//  JavaScript, terminal/bash, for loops, console.log

// All done!
//  Your final score is __
//  Enter initials (submit)


// HighScores
//  (to do list app)
//  (go back) (clear highscores)