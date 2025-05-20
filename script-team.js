const questions = [
    {
        id: "A1",
        text: "2014 * 2014 : 2014 - 2014 =",
        options: { A: "2", B: "0", C: "1", D: "4", E: "2014" },
        correctAnswer: "B"
    },
    {
        id: "A4",
        text: "Auf welche Ziffer endet das Ergebnis der Rechnung 1 + 1*3 + 1*3*5 + 1*3*5*7 + 1*3*5*7*9?",
        options: { A: "1", B: "3", C: "5", D: "7", E: "9" },
        correctAnswer: "E"
    },
    {
        id: "A8_mod",
        text: "Es gilt (X+3)/12 = (9+X)/20. Für welche Zahl steht X?",
        options: { A: "4", B: "5", C: "6", D: "8", E: "12" },
        correctAnswer: "C"
    },
    {
        id: "custom1",
        text: "Was ist die Hauptstadt von Deutschland?",
        options: { A: "Paris", B: "Berlin", C: "London", D: "Rom" },
        correctAnswer: "B"
    },
    {
        id: "custom2",
        text: "Wie viele Tage hat eine Woche?",
        options: { A: "5", B: "6", C: "7", D: "8" },
        correctAnswer: "C"
    }
];

let teamName = '';
let teamScore = 0;
let currentQuestionData; // Holds the data of the current question object
let questionPool = [...questions]; // Each team gets its own pool

const teamNameDisplay = document.getElementById('team-name-display');
const teamScoreDisplay = document.getElementById('team-score');
const questionTextDisplay = document.getElementById('question-text');
const optionsContainer = document.getElementById('options-container');
const answerForm = document.getElementById('answer-form');
const submitBtn = document.getElementById('submit-btn');
const feedbackDisplay = document.getElementById('feedback');
const nextQuestionBtn = document.getElementById('next-question-btn');
const gameOverMessage = document.getElementById('game-over-message');

function getTeamFromURL() {
    const params = new URLSearchParams(window.location.search);
    const team = params.get('team');
    if (team && (team.toUpperCase() === 'A' || team.toUpperCase() === 'B')) {
        return team.toUpperCase();
    }
    // Fallback or prompt if no valid team is in URL
    let chosenTeam = '';
    while (chosenTeam !== 'A' && chosenTeam !== 'B') {
        chosenTeam = prompt("Für welches Team spielst du? (A oder B)").toUpperCase();
    }
    return chosenTeam;
}

function updateTeamScoreDisplay() {
    teamScoreDisplay.textContent = teamScore;
}

function displayQuestion(question) {
    currentQuestionData = question; // Store current question data
    questionTextDisplay.textContent = question.text;
    optionsContainer.innerHTML = '';

    for (const key in question.options) {
        const optionDiv = document.createElement('div');
	optionDiv.className = 'option-item'; //
        const radioBtn = document.createElement('input');
        radioBtn.type = 'radio';
        radioBtn.name = 'answer';
        radioBtn.value = key;
        radioBtn.id = `option-${key}`;

        const label = document.createElement('label');
        label.htmlFor = `option-${key}`;
        label.textContent = `${key}) ${question.options[key]}`;

        optionDiv.appendChild(radioBtn);
        optionDiv.appendChild(label);
        optionsContainer.appendChild(optionDiv);
    }

    feedbackDisplay.textContent = '';
    submitBtn.disabled = false;
    answerForm.style.display = 'block';
    nextQuestionBtn.style.display = 'none';
}

function loadNextQuestion() {
    if (questionPool.length === 0) {
        questionTextDisplay.textContent = "Alle Fragen beantwortet!";
        optionsContainer.innerHTML = '';
        answerForm.style.display = 'none';
        nextQuestionBtn.style.display = 'none';
        gameOverMessage.style.display = 'block';
        return;
    }

    // For simplicity, take the first question. Could be randomized.
    const question = questionPool.shift();
    displayQuestion(question);
}

answerForm.addEventListener('submit', function(event) {
    event.preventDefault();
    const selectedOption = document.querySelector('input[name="answer"]:checked');

    if (!selectedOption) {
        feedbackDisplay.textContent = "Bitte wähle eine Antwort aus!";
        feedbackDisplay.className = 'incorrect';
        return;
    }

    const userAnswer = selectedOption.value;

    if (userAnswer === currentQuestionData.correctAnswer) {
        feedbackDisplay.textContent = "Richtig! Meldet den Punkt dem Spielleiter.";
        feedbackDisplay.className = 'correct';
        teamScore++;
        updateTeamScoreDisplay();
    } else {
        feedbackDisplay.textContent = `Falsch! Die richtige Antwort war ${currentQuestionData.correctAnswer}: ${currentQuestionData.options[currentQuestionData.correctAnswer]}.`;
        feedbackDisplay.className = 'incorrect';
    }

    submitBtn.disabled = true;
    document.querySelectorAll('input[name="answer"]').forEach(radio => radio.disabled = true);
    nextQuestionBtn.style.display = 'inline-block';
});

nextQuestionBtn.addEventListener('click', loadNextQuestion);

// Initial setup
teamName = getTeamFromURL();
teamNameDisplay.textContent = `Team ${teamName}`;
updateTeamScoreDisplay();
loadNextQuestion();