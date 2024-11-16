// Fragen und Antworten
const questions = [
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
];

let currentQuestionIndex = 0;
let score = 0;

// Start the quiz
function startQuiz() {
    document.getElementById("start-page").style.display = "none"; // Verstecke die Startseite
    document.getElementById("quiz-page").style.display = "block"; // Zeige das Quiz
    showQuestion();
}

// Zeigt die aktuelle Frage
function showQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById("question").textContent = question.question;
    document.querySelectorAll(".answer-btn").forEach((btn, index) => {
        const option = ['A', 'B', 'C', 'D'][index];
        btn.textContent = question.options[option];
    });
    
    // Setze das Feedback-Element zurück
    document.getElementById("answer-feedback").textContent = "";
    document.getElementById("answer-feedback").style.color = "black"; // Reset Farbe
}

// Überprüfe die Antwort
function checkAnswer(answer) {
    const question = questions[currentQuestionIndex];
    const isCorrect = answer === question.correctAnswer;
    
    const feedbackElement = document.getElementById("answer-feedback");

    // Punktestand aktualisieren
    if (isCorrect) {
        score++;
        feedbackElement.textContent = "Correct!"; // Feedback anzeigen
        feedbackElement.style.color = "green"; // Feedback grün färben
    } else {
        feedbackElement.textContent = `Incorrect! The correct answer is: ${question.correctAnswer}`; // Feedback anzeigen
        feedbackElement.style.color = "red"; // Feedback rot färben
    }
    
    // Gehe zur nächsten Frage oder zum Ergebnis
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showResult();
    }
}

// Zeige das Ergebnis
function showResult() {
    document.getElementById("quiz-page").style.display = "none"; // Verstecke das Quiz
    document.getElementById("result-page").style.display = "block"; // Zeige das Ergebnis
    document.getElementById("score").textContent = `${score} out of ${questions.length}`;
}

// Quiz neu starten
function restartQuiz() {
    score = 0;
    currentQuestionIndex = 0;
    document.getElementById("result-page").style.display = "none";
    document.getElementById("start-page").style.display = "block";
}
