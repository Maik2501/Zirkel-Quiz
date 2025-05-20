// script-team.js
const questions = [
    // Känguru 2014 Klassenstufen 7 und 8
    {
        id: "K2014_A1",
        text: "2014 · 2014 : 2014 – 2014 =",
        options: { A: "2", B: "0", C: "1", D: "4", E: "2014" },
        correctAnswer: "B" // Lösung: (2014*2014)/2014 - 2014 = 2014 - 2014 = 0
    },
    {
        id: "K2014_A4",
        text: "Auf welche Ziffer endet das Ergebnis der Rechnung 1 + 1·3 + 1·3·5 + 1·3·5·7 + 1·3·5·7·9?",
        options: { A: "1", B: "3", C: "5", D: "7", E: "9" },
        correctAnswer: "E" // Lösung: 1+3+15+105+945 = 1069. Endet auf 9.
    },
    {
        id: "K2014_A6",
        text: "Johann hat sein neues Aquarium schon mit Steinen ausgelegt. Er füllt Wasser ein, bis das Aquarium zur Hälfte gefüllt ist. Dann gießt er weitere 8 Liter Wasser hinein. Jetzt ist es zu drei Vierteln gefüllt. Welches Volumen hat das Aquarium insgesamt?",
        options: { A: "20 Liter", B: "24 Liter", C: "30 Liter", D: "32 Liter", E: "40 Liter" },
        correctAnswer: "D" // Lösung: 3/4 - 1/2 = 1/4. 1/4 des Volumens = 8 Liter. Gesamtvolumen = 4 * 8 = 32 Liter.
    },
    {
        id: "K2014_A8",
        text: "Es gilt (★+3)/12 = (9+★)/20. Für welche Zahl steht der Stern ★?",
        options: { A: "4", B: "5", C: "6", D: "8", E: "12" },
        correctAnswer: "C" // Lösung: 20(★+3) = 12(9+★) => 20★+60 = 108+12★ => 8★ = 48 => ★=6.
    },
    {
        id: "K2014_A10",
        text: "Melissa möchte neue Knieschützer kaufen. Die kosten eigentlich 10€, doch gerade gibt es 20 % Rabatt. Dank einer Sonderaktion erhält sie an der Kasse noch einmal 10% Rabatt auf den bereits reduzierten Preis. Wie viel muss Melissa für die Knieschützer zahlen?",
        options: { A: "7,20 €", B: "7,40 €", C: "7,60 €", D: "7,80 €", E: "8€" },
        correctAnswer: "A" // Lösung: 10 * 0.8 = 8€. 8 * 0.9 = 7.20€.
    },
    {
        id: "K2014_B3",
        text: "Wilma will wissen, zwischen welchen beiden aufeinanderfolgenden natürlichen Zahlen das Ergebnis der Rechnung 2 + 1/2 + 3 + 1/3 + 4 + 1/4 + 5 + 1/5 + 6 + 1/6 liegt.",
        options: { A: "20 und 21", B: "21 und 22", C: "22 und 23", D: "23 und 24", E: "24 und 25" },
        correctAnswer: "B" // Lösung: Ganze Zahlen: 2+3+4+5+6=20. Brüche: 0.5+0.33+0.25+0.2+0.166... ≈ 1.45. Summe ≈ 21.45
    },
    {
        id: "K2014_B4",
        text: "Mona und Lisa tauschen Adressen [...]. „Meine Postleitzahl ist 74336“, sagt Mona. „Die ist ja fast wie meine, es sind nur zwei Ziffern vertauscht“, stellt Lisa fest. Wie viele Möglichkeiten gibt es für Lisas Postleitzahl?",
        options: { A: "6", B: "8", C: "9", D: "10", E: "12" },
        correctAnswer: "C" // Lösung: 5 Ziffern. Anzahl Positionspaare 5C2 = 10. Wenn die zwei '3'en getauscht werden, ändert sich nichts. 10-1=9.
    },
    {
        id: "K2014_B5",
        text: "Welche der folgenden Rechnungen liefert das größte Ergebnis? (A) 33·777 (B) 55·666 (C) 66·444 (D) 77·333 (E) 99·222",
        options: { A: "33·777", B: "55·666", C: "66·444", D: "77·333", E: "99·222" },
        correctAnswer: "B" // A=25641, B=36630, C=29304, D=25641, E=21978
    },
    {
        id: "K2014_B6",
        text: "Julius [...] „Ich glaube, es sind doppelt so viele Guppys wie Platys“. Johann: „Da hast du wohl einen Guppy für einen Platy gehalten. In Wirklichkeit sind es dreimal so viele Guppys wie Platys.“ Wie viele Guppys hat Johann?",
        options: { A: "6", B: "8", C: "9", D: "12", E: "15" },
        correctAnswer: "C" // G_echt = 3P_echt. G_Julius = G_echt-1. P_Julius = P_echt+1. G_Julius = 2P_Julius => G_echt-1 = 2(P_echt+1) => 3P_echt-1=2P_echt+2 => P_echt=3. G_echt=9.
    },
    {
        id: "K2014_B9",
        text: "Sechs Studenten [...] nutzen [...] die beiden Badezimmer, jeweils einzeln und unterschiedlich lange: 5, 7, 9, 14, 18 und 19 Minuten [...]. Wann können die sechs Studenten – bei geschickter Aufteilung – frühestens gemeinsam am Frühstückstisch sitzen? (Start 7:00 Uhr)",
        options: { A: "um 7:36 Uhr", B: "um 7:37 Uhr", C: "um 7:38 Uhr", D: "um 7:39 Uhr", E: "um 7:40 Uhr" },
        correctAnswer: "B" // Gesamtdauer 72 Min. Ideal pro Bad: 36 Min. Bad1: 18,14,5 (37 Min). Bad2: 19,9,7 (35 Min). Max = 37 Min.
    },
    {
        id: "K2014_C2",
        text: "Heute ist großes Pflaumenknödelessen bei Oma Hilde [...]. Wenn 2 Enkel nicht gekommen wären, dann würden die anderen Enkel jeder 3 Knödel mehr bekommen. Und wenn es 20 Knödel weniger wären, dann würde jeder 2 Knödel weniger bekommen. Wie viele Pflaumenknödel hat Oma Hilde gemacht?",
        options: { A: "80", B: "90", C: "100", D: "120", E: "150" },
        correctAnswer: "D" // E Enkel, K Knödel/Enkel. Total T=EK. (E-2)(K+3)=T => 3E-2K=6. E(K-2)=T-20 => 2E=20 => E=10. 30-2K=6 => 2K=24 => K=12. T=120.
    },
    {
        id: "K2014_C5",
        text: "Der Durchschnitt zweier positiver Zahlen ist um 30% kleiner als die größere der beiden Zahlen. Um wie viel Prozent ist der Durchschnitt dann größer als die kleinere der beiden Zahlen?",
        options: { A: "um 75%", B: "um 70%", C: "um 50%", D: "um 30%", E: "um 25%" },
        correctAnswer: "A" // (x+y)/2 = 0.7x => x+y=1.4x => y=0.4x. Avg=0.7x. ((0.7x-0.4x)/0.4x)*100 = (0.3/0.4)*100 = 75%.
    },
    {
        id: "K2014_C7",
        text: "An der Tafel stehen einige positive ganze Zahlen, alle voneinander verschieden. Genau 2 davon sind durch 2 teilbar und genau 7 sind durch 7 teilbar. Wie groß ist die größte dieser Zahlen mindestens?",
        options: { A: "49", B: "56", C: "63", D: "70", E: "77" },
        correctAnswer: "C" // Um M zu minimieren, wähle 5 ungerade Vielfache von 7 (7,21,35,49,63) und 2 gerade Vielfache von 7 (14,28). Max ist 63.
    },
    {
        id: "K2014_C9",
        text: "Eine alte Waage ist defekt. Für alles bis 1000g exakt, darüber zeigt sie etwas willkürliches aber über 1000g an. Es werden Gewichte A,B,C,D,E jeweils paarweise gewogen. B+D=1200g, C+E=2100g, B+E=800g, B+C=900g, A+E=700g. Welches Gewicht ist am größten?",
        options: { A: "Gewicht A", B: "Gewicht B", C: "Gewicht C", D: "Gewicht D", E: "Gewicht E" },
        correctAnswer: "D" // B+E=800, B+C=900 => C-E=100. A+E=700. C+E>1000 (da 2100). (E+100)+E > 1000 => 2E>900 => E>450. E<700 (da A>0). D>200+E => D>C.
    },
    {
        id: "K2014_C10",
        text: "Insel Malsomalso: A-Leute (Wahrheit), B-Leute (Lüge), Malsomalsos (alternierend T/L). 20 Inselbewohner. 3 Fragen: 1. Bist du A? 2. Bist du M? 3. Bist du B? Antworten Ja: Q1=17, Q2=12, Q3=8. Wie viele A-Leute?",
        options: { A: "3", B: "5", C: "9", D: "13", E: "17" },
        correctAnswer: "B" // A-Leut (a): J,N,N. B-Leut (b): J,J,N (lügt über Typ B). M-T (m_t): N,N,N. M-L (m_l): J,J,J. Gl: a+b+m_l=17, b+m_l=12, m_l=8. => m_l=8, b=4, a=5.
    },
    // Känguru 2011 Klassenstufen 7 und 8
    {
        id: "K2011_1",
        text: "Bea hilft Lea beim Streichen [...]. Lea möchte senkrechte Streifen, abwechselnd rote und gelbe, je 50 cm breit. Der erste und der letzte Streifen sollen rot sein. Bea misst [...] „Das werden insgesamt 6 rote Streifen, das geht genau auf.“ Wie lang ist die Wand?",
        options: { A: "4,50 m", B: "5,50 m", C: "6,50 m", D: "7,50 m", E: "8,50 m" },
        correctAnswer: "B" // 6 rote, 5 gelbe. RGRGRGRGRGR. 11 Streifen * 50cm = 550cm = 5,50m.
    },
    {
        id: "K2011_2",
        text: "Welcher der folgenden Werte ist am größten? (A) 2011^1 (B) 1^2011 (C) 1 · 2011 (D) 1 + 2011 (E) 1/2011",
        options: { A: "2011^1", B: "1^2011", C: "1 · 2011", D: "1 + 2011", E: "1/2011" },
        correctAnswer: "D" // A=2011, B=1, C=2011, D=2012, E=klein.
    },
    {
        id: "K2011_3",
        text: "Für ein Spiel malt Emre sämtliche Seitenflächen zweier Würfel und eines Tetraeders farbig an. Wie viele Seitenflächen sind nun insgesamt farbig?",
        options: { A: "16", B: "18", C: "20", D: "22", E: "24" },
        correctAnswer: "A" // Würfel: 6 Flächen. Tetraeder: 4 Flächen. 2*6 + 4 = 16.
    },
    {
        id: "K2011_4",
        text: "Natascha hat einen Quatsch-Taschenrechner: Wenn sie multiplizieren will, dividiert er, und wenn sie addieren will, subtrahiert er. Rasch gibt Natascha (12·3) + (4·2) ein. Welches Ergebnis zeigt Nataschas Taschenrechner an?",
        options: { A: "2", B: "6", C: "12", D: "28", E: "38" },
        correctAnswer: "A" // Rechner macht: (12/3) - (4/2) = 4 - 2 = 2.
    },
    {
        id: "K2011_5",
        text: "Beim Blick auf ihre Digitaluhr muss Silvie schmunzeln: „20:11, das ist ja genau die Jahreszahl!“ Wann erscheint das nächste Mal eine Uhrzeit, in der wir die vier Ziffern 0,1,1,2 in irgendeiner Reihenfolge vorfinden?",
        options: { A: "in 40 Minuten", B: "in 45 Minuten", C: "in 50 Minuten", D: "in 55 Minuten", E: "in 60 Minuten" },
        correctAnswer: "C" // Ziffern {0,1,1,2}. Nach 20:11 ist die nächste mögliche Zeit 21:01. Das sind 50 Minuten später.
    }
];

let teamName = '';
let teamScore = 0;
let currentQuestionData; 
let questionPool = [...questions]; 

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
    currentQuestionData = question; 
    questionTextDisplay.textContent = question.text;
    optionsContainer.innerHTML = '';

    for (const key in question.options) {
        const optionDiv = document.createElement('div');
        optionDiv.className = 'option-item'; // Für das verbesserte CSS Styling

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
    feedbackDisplay.className = ''; // Klassen zurücksetzen
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
        // Hier könnte noch eine Meldung zum Endstand des Teams stehen.
        return;
    }

    // Fragen mischen und die nächste nehmen, um Wiederholungen bei Neuladen zu vermeiden (optional)
    // Für dieses Setup nehmen wir einfach die nächste aus dem (ggf. gemischten) Pool.
    if (questionPool === questions) { // Nur beim ersten Mal mischen, wenn questionPool noch die Referenz auf questions ist
       questionPool = [...questions].sort(() => Math.random() - 0.5); // Mische eine Kopie
    }
    
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

// Mischen des Fragenpools einmalig beim Laden für jedes Team, damit nicht alle Teams dieselbe Reihenfolge bekommen
questionPool = [...questions].sort(() => Math.random() - 0.5); 

loadNextQuestion();