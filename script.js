// Elements

// Scoreboard link
var scoreboardEl = document.querySelector(".scoreboard");
scoreboardEl.textContent = "View Scoreboard";

// 60 second timer on display
var timeEl = document.querySelector(".time");
timeEl.textContent = "60 seconds left";

// h1 Title
var titleEl = document.querySelector(".title");
titleEl.textContent= "Coding Quiz Challenge";

// h2 directions
var directionsEl = document.querySelector(".directions");
directionsEl.textContent= "Try to answer the following code related questions within the time limit. Keep in mind that incorrect answers will penalize your score/time by 10 seconds.";

// quiz container
var quizContainerEl = document.querySelector("#quiz");
quizContainerEl.setAttribute("style", "visibility:hidden");

// Start Timer function, 60 Second Countdown
function startTime() {
    event.preventDefault();
    // populate quiz
    populate();

    // hide start button and directions, and display quiz
    var startButtonEl = document.querySelector("#startButton");
    startButtonEl.setAttribute("style", "display:none");

    var quizContainerEl = document.querySelector("#quiz");
    quizContainerEl.setAttribute("style", "visibility:visible");

    var directionsEl = document.querySelector(".directions");
    directionsEl.setAttribute("style", "display:none");

    // countdown
    var secondsLeft = 60;

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
    showScores();
  
  }