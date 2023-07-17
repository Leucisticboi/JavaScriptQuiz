// Set all required variables for JavaScript functions
var timer = document.getElementById("timer");
var startQuizButton = document.querySelector("#startQuiz");
var highScores = document.querySelector("#highScoresBtn");
var cardBody = document.getElementById("card-body");
var questionEl = document.getElementById("question");
var optionsEl = document.getElementById("options");
var rightWrongText = document.getElementById("rightWrong");
var currentScore = document.getElementById("currentScore");
var rightWrongAnswer = "";
var currentIndex = 0;
var secondsLeft = 60;
var score = 0;


// Store questions and answers in an array
let questions = [
    {
        number: 1,
        question: "What does HTML stand for?",
        answer: "3. Hyper Text Markup Language",
        options: [
            "1. How To Make Lemonade",
            "2. Hyper Text Management Language",
            "3. Hyper Text Markup Language",
            "4. Hangry Toddlers Making Lasagna"
        ]
    },
    {
        number: 2,
        question: "Commonly used data types DO NOT include:",
        answer: "3. Alerts",
        options: [
            "1. Strings",
            "2. Booleans",
            "3. Alerts",
            "4. Numbers"
        ]
    },
    {
        number: 3,
        question: "The condition in an if / else statement is enclosed with _______.",
        answer: "4. Parenthesis",
        options: [
            "1. Curly brackets",
            "2. Quotes",
            "3. Square brackets",
            "4. Parenthesis"
        ]
    },
    {
        number: 4,
        question: "Arrays in JavaScript can be used to store ________.",
        answer: "4. All of the above",
        options: [
            "1. Numbers and strings",
            "2. Booleans",
            "3. Other arrays",
            "4. All of the above"
        ]
    },
    {
        number: 5,
        question: "String values must be enclosed within ______ when being assigned to variables.",
        answer: "2. Quotes",
        options: [
            "1. Commas",
            "2. Quotes",
            "3. Curly brackets",
            "4. Parenthesis"
        ]
    },
    {
        number: 6,
        question: "A very useful tool used during development and debugging for printing content to the debugger is:",
        answer: "4. console.log",
        options: [
            "1. JavaScript",
            "2. terminal/bash",
            "3. for loops",
            "4. console.log",
        ]
    }
];

// Timer function
function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time Remaining: " + secondsLeft;        

        // Stop timer if time hits 0
        if(secondsLeft <= 0) {
            window.clearInterval(timerInterval);
            timer.textContent = "0";
        }
    }, 1000);
}

// Update question title and dynamically create new answer buttons
function nextQuestion(event) {
    var element = event.target.innerHTML;
    console.log(element);
    // Compare selected answer with correct answer
    if(element === questions[currentIndex].answer) {
        score += 1;
        rightWrongAnswer = "Correct!"
    } else if(element !== questions[currentIndex].answer) {
        secondsLeft -= 10;
        timer.textContent = "Time Remaining: " + secondsLeft;
        rightWrongAnswer = "Incorrect!"
    }
    currentScore.innerText = "Current score: " + score;
    currentIndex++;
    showQuestions();
}

function showQuestions() {
    // Hide main page title
    optionsEl.innerHTML = "";
    document.getElementById("quizTitle").style.display = "none";
    document.getElementById("quizDescription").style.display = "none";
    startQuizButton.style.display = "none";
    var quizCard = document.getElementById("quizCard");
    quizCard.style.display = "flex";
    var currentObj = questions[currentIndex];
    questionEl.textContent = currentObj.question;
    var optionArray = currentObj.options;
    for(let i = 0; i < optionArray.length; i++) {
        var optionBtn = document.createElement('button');
        optionBtn.innerHTML = optionArray[i]; 
        optionBtn.setAttribute('class', 'btn btn-primary p-10');
        // TODO create onclick for buttons
        optionBtn.onclick = nextQuestion;
        optionsEl.appendChild(optionBtn);
        rightWrongText.innerText = rightWrongAnswer;
    }
};

function goHome() {
    console.log("Hit goHome");
    window.location.assign(
        "./index.html"
    );
}

function showHighScores() {
    console.log("Hit");
    window.location.assign(
        "./highscore.html"
    );
}

startQuizButton.addEventListener("click", showQuestions);
startQuizButton.addEventListener("click", setTime);

highScores.addEventListener("click", showHighScores);