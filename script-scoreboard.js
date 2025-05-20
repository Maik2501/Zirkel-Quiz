let scoreA = 0;
let scoreB = 0;

const scoreADisplay = document.getElementById('scoreA');
const scoreBDisplay = document.getElementById('scoreB');

// Optional: Load scores from localStorage if they exist
function loadScores() {
    const savedScoreA = localStorage.getItem('quizScoreA');
    const savedScoreB = localStorage.getItem('quizScoreB');
    if (savedScoreA !== null) {
        scoreA = parseInt(savedScoreA, 10);
    }
    if (savedScoreB !== null) {
        scoreB = parseInt(savedScoreB, 10);
    }
    updateDisplay();
}

// Optional: Save scores to localStorage
function saveScores() {
    localStorage.setItem('quizScoreA', scoreA);
    localStorage.setItem('quizScoreB', scoreB);
}

function updateDisplay() {
    scoreADisplay.textContent = scoreA;
    scoreBDisplay.textContent = scoreB;
}

function addPoint(team) {
    if (team === 'A') {
        scoreA++;
    } else if (team === 'B') {
        scoreB++;
    }
    updateDisplay();
    saveScores(); // Save after change
}

function subtractPoint(team) {
    if (team === 'A' && scoreA > 0) {
        scoreA--;
    } else if (team === 'B' && scoreB > 0) {
        scoreB--;
    }
    updateDisplay();
    saveScores(); // Save after change
}

function resetScores() {
    if (confirm("Sollen die Punktestände wirklich zurückgesetzt werden?")) {
        scoreA = 0;
        scoreB = 0;
        updateDisplay();
        saveScores(); // Save after reset
    }
}

// Initial load
loadScores(); // Load scores when the page starts