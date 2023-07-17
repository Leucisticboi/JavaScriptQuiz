var goHomeBtn = document.getElementById('goHome');
var highScores = document.getElementById('highScores');
var resetScoresBtn = document.getElementById('resetHighScores');
var scoresTable = document.getElementById('scoreTable');

function resetScores() {
    for(let i = 0; i < 3; i++) {
        var tableChild = scoresTable.children[i];
        for(let k = 1; k < 3; k++) {
            tableChild.children[k].innerText = "";
        }
    }
}

resetScoresBtn.onclick = resetScores;

function goHome() {
    console.log("Hit goHome");
    window.location.assign(
        "./index.html"
    );
}

goHomeBtn.onclick = goHome;