function Quiz(questions) {
	this.score = 0; 
	this.questions = questions;
	this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function () {
	return this.questions[this.questionIndex]
}

Quiz.prototype.isEnded = function() {
	return this.questions.length === this.questionIndex;
}

Quiz.prototype.guess = function(answer) {

	if (this.getQuestionIndex().correctAnswer(answer)) {
        this.score++;
        alert("CORRECT! + 1 point");
	} else {
        alert("INCORRECT! - 1 point");
        (this.score - 1);
    }

	this.questionIndex++;
}


function Question (text, choices, answer) {
	this.text = text;
	this.choices = choices;
	this.answer = answer;
}

Question.prototype.correctAnswer = function(choice) {
	return choice === this.answer;
}



// populate quiz
function populate() {
	if (quiz.isEnded()) {
		showScores();
	} else {
		var element = document.getElementById('question');
		element.innerHTML = quiz.getQuestionIndex().text;

		//show choices
		var choices = quiz.getQuestionIndex().choices;
		for (var i = 0; i < choices.length; i++) {
			var element = document.getElementById('choice' + i);
			element.innerHTML = choices[i];

			guess("btn" + i, choices[i]);
		}

	}
}


function guess(id, guess) {
	var button = document.getElementById(id);
	button.onclick = function() {
		quiz.guess(guess);
		populate();
	}
}



function showScores() {
	var gameOverHTML = "<h1>Scoreboard</h1>";
	gameOverHTML += "<h2 id='score'> Final Score: " + quiz.score + "</h2>";
	var element = document.getElementById('quiz');
	element.innerHTML = gameOverHTML;
}


var questions = [
	new Question("1. Commonly used data types do not include...", ["Strings", "Booleans", "Alerts", "Numbers"], "Alerts"),
	new Question("2. The condition in an if/then is enclosed within...", ["Quotes", "Curly Braces", "Parenthesis", "Square Brackets"], "Curly Braces"),
	new Question("3. Arrays in Javascript can be used to store...", ["Numbers in a string", "Other arrays", "Booleans", "All of the above"], "All of the above"),
	new Question("4. Strings values must be enclosed within _________ when being assigned to variables.", ["Quotes", "Commas", "Curly Brackets", "Parenthesis"], "Quotes"),
    new Question("5. A very useful tool used during development and debugging for printing content to the debugger is..", ["JavaScript", "Terminal/Bash", "Console.log", "For Loops"], "Console.log"),
];


var quiz = new Quiz (questions);