// Create a countdown timer
var timer = document.getElementById("timer");
const startQuizButton = document.querySelector("#startQuiz");
const highScores = document.querySelector("#highScoresBtn");

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

for(i = 0; i < questions.length; i++) {
    console.log(questions[i]);
}

function setTime() {
    // Set interval in variable
    var secondsLeft = 101;

    // Set timer function
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timer.textContent = "Time Remaining: " + secondsLeft;        
        
        if(highScores.clicked) {
            secondsLeft = 0;
        }

        if(secondsLeft = 0) {
            // Stops execution of action at set interval
            window.clearInterval(timerInterval);
            timer.innerText = "";
            timer.style.display = "none";
        }
    }, 1000);
}

function checkAnswer(answer, option) {
    var correct;
    var incorrect;
    if(answer === option) {
        correct = true;
        return correct;
    } else {
        incorrect = false;
        return incorrect;
    }
}

function showQuestions() {
    // Hide main page title
    document.getElementById("quizTitle").style.display = "none";
    document.getElementById("quizDescription").style.display = "none";
    startQuizButton.style.display = "none";
    var quizCard = document.getElementById("quizCard");
    quizCard.style.display = "";
    var optionsParent = document.getElementById("options");
    var optionsChildren = optionsParent.querySelectorAll("button");
    console.log(optionsChildren.length);

    // Initiate timer
    setTime();
    var questionTitle = document.getElementById("question");

    // Iterate through each question and its options
    for(var i = 0; i < questions.length; i++) {
        questionTitle.innerText = questions[i].question;
        for(var j = 0; j < optionsChildren.length; j++) {
            optionsChildren[j].innerHTML = questions[i].options[j];
        }
    }
};

function goHome() {
    document.getElementById("quizTitle").style.display = "";
    document.getElementById("quizDescription").style.display = "";
    startQuizButton.style.display = "";
    highScores.innerText = "View High Scores";
}

function showHighScores() {
    document.getElementById("quizTitle").style.display = "none";
    document.getElementById("quizDescription").style.display = "none";
    startQuizButton.style.display = "none";
    highScores.innerText = "Home";
    highScores.addEventListener("click", goHome);
    quizCard.style.display = "none";
}

startQuizButton.addEventListener("click", showQuestions);

highScores.addEventListener("click", showHighScores);