// Fragen und Antworten für jedes Sprachformat
const questions = {
    en: [
        {
            question: "What is the capital of Croatia?",
            options: {
                A: "Zagreb",
                B: "Split",
                C: "Dubrovnik",
                D: "Rijeka"
            },
            correctAnswer: "A"
        },
        {
            question: "Which currency is used in Croatia?",
            options: {
                A: "Euro",
                B: "Kuna",
                C: "Dollar",
                D: "Pound"
            },
            correctAnswer: "B"
        },
        {
            question: "What is the largest city in Croatia?",
            options: {
                A: "Zagreb",
                B: "Split",
                C: "Osijek",
                D: "Pula"
            },
            correctAnswer: "A"
        }
    ],
    de: [
        {
            question: "Was ist die Hauptstadt von Kroatien?",
            options: {
                A: "Zagreb",
                B: "Split",
                C: "Dubrovnik",
                D: "Rijeka"
            },
            correctAnswer: "A"
        },
        {
            question: "Welche Währung wird in Kroatien verwendet?",
            options: {
                A: "Euro",
                B: "Kuna",
                C: "Dollar",
                D: "Pfund"
            },
            correctAnswer: "B"
        },
        {
            question: "Was ist die größte Stadt in Kroatien?",
            options: {
                A: "Zagreb",
                B: "Split",
                C: "Osijek",
                D: "Pula"
            },
            correctAnswer: "A"
        }
    ],
    hr: [
        {
            question: "Koji je glavni grad Hrvatske?",
            options: {
                A: "Zagreb",
                B: "Split",
                C: "Dubrovnik",
                D: "Rijeka"
            },
            correctAnswer: "A"
        },
        {
            question: "Koja valuta se koristi u Hrvatskoj?",
            options: {
                A: "Euro",
                B: "Kuna",
                C: "Dollar",
                D: "Pound"
            },
            correctAnswer: "B"
        },
        {
            question: "Koji je najveći grad u Hrvatskoj?",
            options: {
                A: "Zagreb",
                B: "Split",
                C: "Osijek",
                D: "Pula"
            },
            correctAnswer: "A"
        }
    ]
};

let currentQuestionIndex = 0;
let score = 0;
let language = 'en'; // Standardmäßig Englisch

// Start the quiz
function startQuiz() {
    document.getElementById("start-page").style.display = "none"; // Verstecke die Startseite
    document.getElementById("quiz-page").style.display = "block"; // Zeige das Quiz
    showQuestion();
}

// Zeigt die aktuelle Frage basierend auf der gewählten Sprache
function showQuestion() {
    const question = questions[language][currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    document.querySelectorAll(".answer-btn").forEach((btn, index) => {
        const option = ['A', 'B', 'C', 'D'][index];
        btn.textContent = question.options[option];
    });
    
    // Setze das Feedback-Element zurück
    const feedbackElement = document.getElementById("answer-feedback");
    feedbackElement.textContent = "";
    feedbackElement.style.color = "black"; // Reset Farbe
    feedbackElement.classList.remove("correct", "incorrect");
}

// Überprüfe die Antwort
function checkAnswer(answer) {
    const question = questions[language][currentQuestionIndex];
    const isCorrect = answer === question.correctAnswer;
    
    const feedbackElement = document.getElementById("answer-feedback");

    // Punktestand aktualisieren
    if (isCorrect) {
        score++;
        feedbackElement.textContent = "Correct!"; // Feedback anzeigen
        feedbackElement.classList.add("correct"); // Feedback grün färben
    } else {
        feedbackElement.textContent = `Incorrect! The correct answer is: ${question.correctAnswer}`; // Feedback anzeigen
        feedbackElement.classList.add("incorrect"); // Feedback rot färben
    }
    
    // Gehe zur nächsten Frage oder zum Ergebnis
    currentQuestionIndex++;
    if (currentQuestionIndex < questions[language].length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Zeige das Ergebnis
function showResult() {
    document.getElementById("quiz-page").style.display = "none"; // Verstecke das Quiz
    document.getElementById("result-page").style.display = "block"; // Zeige das Ergebnis
    document.getElementById("score").textContent = `${score} out of ${questions[language].length}`;
}

// Quiz neu starten
function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("result-page").style.display = "none";
    document.getElementById("start-page").style.display = "block";
}

// Sprache ändern
function changeLanguage(selectedLanguage) {
    language = selectedLanguage;
    currentQuestionIndex = 0;
    score = 0;
    document.getElementById("start-page").style.display = "none"; // Verstecke die Startseite
    document.getElementById("quiz-page").style.display = "block"; // Zeige das Quiz
    showQuestion(); // Zeige die erste Frage der neuen Sprache
}
