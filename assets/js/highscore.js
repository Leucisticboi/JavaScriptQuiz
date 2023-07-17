const goHomeBtn = document.querySelector('#goHome');

function goHome() {
    console.log("Hit goHome");
    window.location.assign(
        "./index.html"
    );
    /* document.getElementById("quizTitle").style.display = "";
    document.getElementById("quizDescription").style.display = "";
    startQuizButton.style.display = "";
    highScores.innerText = "View High Scores"; */
}


goHomeBtn.addEventListener("click", goHome);