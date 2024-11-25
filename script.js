// Texte für die Einleitung
const introTexts = {
    en: `On our website, you can help make a difference by answering questions and collecting funds for important causes. 
By participating, you contribute to a charitable fund dedicated to supporting the homeless across Croatia, as well as children living in poverty in the country.

For every question you answer, you help raise money that will be donated to these groups in need. In addition to answering questions, you also have the option to make a direct donation to support these worthy causes.

Many people in Croatia are facing difficult circumstances, especially after the devastating earthquakes of 2020. Countless individuals are living on the brink of poverty or on the streets. This is your chance to make a real impact. Help us help those in need – together, we can make a difference.

Thank you for your support!`,
    de: `Auf unserer Website können Sie helfen, einen Unterschied zu machen, indem Sie Fragen beantworten und Geld für wichtige Zwecke sammeln. 
Durch Ihre Teilnahme tragen Sie zu einem Wohltätigkeitsfonds bei, der den Obdachlosen in ganz Kroatien sowie Kindern in Armut im Land zugutekommt.

Für jede beantwortete Frage helfen Sie, Geld zu sammeln, das diesen bedürftigen Gruppen zugutekommt. Zusätzlich zur Beantwortung von Fragen haben Sie auch die Möglichkeit, eine direkte Spende zu leisten, um diesen guten Zwecke zu unterstützen.

Viele Menschen in Kroatien haben es schwer, besonders nach den verheerenden Erdbeben von 2020. Zahlreiche Menschen leben an der Armutsgrenze oder auf der Straße. Dies ist Ihre Chance, einen echten Unterschied zu machen. Helfen Sie uns, den Bedürftigen zu helfen – gemeinsam können wir etwas bewegen.

Vielen Dank für Ihre Unterstützung!`,
    hr: `Na našoj web stranici možete pomoći napraviti razliku tako što ćete odgovarati na pitanja i prikupljati novac za važne svrhe. 
Doprinosite dobrotvornoj fondaciji koja pomaže beskućnicima širom Hrvatske, kao i djeci koja žive u siromaštvu u lijepoj našoj.

Za svako pitanje koje odgovorite, pomažete skupiti novac koji će biti doniran ovim potrebitim grupama. Pored odgovaranja na pitanja, također imate mogućnost da direktno donirate za podršku ovim plemenitim ciljevima.

Mnogi ljudi u Hrvatskoj suočavaju se s teškim okolnostima, naročito nakon razornih potresa 2020. godine. Bezbroj ljudi živi na ivici siromaštva ili na ulicama. Ovo je vaša prilika da napravite stvarnu promjenu. Pomozite nam pomoći onima kojima je najpotrebnije – zajedno možemo napraviti razliku.

Hvala vam na podršci!`
};

// Fragen und Antworten für jedes Sprachformat
const questions = {
    // ... keine Änderungen hier ...
};

// Standardmäßig Englisch
let currentQuestionIndex = 0;
let score = 0;
let language = 'en';

// Text auf der Startseite setzen
function updateIntroText() {
    document.getElementById("intro-text").textContent = introTexts[language];
}

// Start das Quiz
function startQuiz() {
    document.getElementById("start-page").style.display = "none"; 
    document.getElementById("quiz-page").style.display = "block"; 
    showQuestion();
}

// Zeige die aktuelle Frage
function showQuestion() {
    // ... keine Änderungen hier ...
}

// Überprüfe die Antwort
function checkAnswer(answer) {
    const question = questions[language][currentQuestionIndex];
    const isCorrect = answer === question.correctAnswer;

    const feedbackElement = document.getElementById("answer-feedback");

    if (isCorrect) {
        score++;
        feedbackElement.textContent = "Correct!";
        feedbackElement.classList.add("correct");
    } else {
        feedbackElement.textContent = `Incorrect! The correct answer is: ${question.options[question.correctAnswer]}`;
        feedbackElement.classList.add("incorrect");
    }

    currentQuestionIndex++;
    setTimeout(() => {
        if (currentQuestionIndex < questions[language].length) {
            showQuestion();
        } else {
            showResult();
        }
    }, 2000); // Kurze Pause, bevor die nächste Frage angezeigt wird
}

// Zeige das Ergebnis
// ... keine Änderungen hier ...

// Sprache ändern
function changeLanguage(selectedLanguage) {
    language = selectedLanguage;
    updateIntroText();
}

// Initiale Sprache auf Startseite setzen
updateIntroText();
