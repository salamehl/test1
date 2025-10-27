const allQuestions = [
    { question: "What does the atomic number of an element represent?", options: ["Number of neutrons", "Number of protons", "Number of electrons", "Number of protons and neutrons"], answer: "Number of protons", topic: "Basics" },
    { question: "What are the vertical columns on the periodic table called?", options: ["Periods", "Groups", "Rows", "Series"], answer: "Groups", topic: "Organization" },
    { question: "What is the chemical symbol for Gold?", options: ["Go", "Gd", "Au", "Ag"], answer: "Au", topic: "Symbols" },
    { question: "Elements in the same group have similar...", options: ["Atomic masses", "Atomic numbers", "Chemical properties", "Number of protons"], answer: "Chemical properties", topic: "Organization" },
    { question: "What are the horizontal rows on the periodic table called?", options: ["Groups", "Families", "Periods", "Columns"], answer: "Periods", topic: "Organization" },
    { question: "The element with the symbol 'O' is...", options: ["Osmium", "Oxygen", "Gold", "Iron"], answer: "Oxygen", topic: "Symbols" },
    { question: "Which of the following is a noble gas?", options: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"], answer: "Helium", topic: "Groups" },
    { question: "Who is credited with creating the first periodic table?", options: ["Isaac Newton", "Albert Einstein", "Dmitri Mendeleev", "Marie Curie"], answer: "Dmitri Mendeleev", topic: "History" }
];

const quizQuestions = allQuestions.slice(0, 5);

let currentQuestionIndex = 0;
let score = 0;
const wrongTopics = new Set();

function displayQuestion() {
    const questionContainer = document.getElementById('question-container');
    const q = quizQuestions[currentQuestionIndex];
    if (!q) {
        displayFinalResults();
        return;
    }
    let html = `
        <div class="question">
            <p><b>${currentQuestionIndex + 1}. ${q.question}</b></p>
            ${q.options.map(option => `
                <label>
                    <input type="radio" name="option" value="${option}">
                    ${option}
                </label>
            `).join('<br>')}
        </div>
    `;
    questionContainer.innerHTML = html;
    document.getElementById('feedback-container').innerHTML = "";
    document.getElementById('submit-answer').style.display = 'block';
    document.getElementById('next-question').style.display = 'none';
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    const feedbackContainer = document.getElementById('feedback-container');
    const q = quizQuestions[currentQuestionIndex];

    if (selectedOption) {
        if (selectedOption.value === q.answer) {
            score++;
            feedbackContainer.innerHTML = "<p style='color: green;'>Correct!</p>";
        } else {
            wrongTopics.add(q.topic);
            feedbackContainer.innerHTML = `<p style='color: red;'>Incorrect. The correct answer is ${q.answer}.</p>`;
        }
        document.getElementById('submit-answer').style.display = 'none';
        document.getElementById('next-question').style.display = 'block';
    } else {
        feedbackContainer.innerHTML = "<p style='color: orange;'>Please select an answer.</p>";
    }
}

function nextQuestion() {
    currentQuestionIndex++;
    displayQuestion();
}

function displayFinalResults() {
    const resultsContainer = document.getElementById('results-content');
    resultsContainer.innerHTML = `<p>You have answered ${currentQuestionIndex} questions with a score of ${score}.</p>`;

    if (wrongTopics.size > 0) {
        const moreQuestionsGenerated = generateMoreQuestions(Array.from(wrongTopics));
        if (moreQuestionsGenerated) {
            resultsContainer.innerHTML += "<p>Here are some more questions on the topics you found difficult. Keep practicing!</p>";
            return;
        }
    }

    resultsContainer.innerHTML = `<p>Your final score is ${score} out of ${quizQuestions.length}.</p>`;
    if (wrongTopics.size === 0) {
        resultsContainer.innerHTML += "<p>Great job! You have a good understanding of this unit.</p>";
    } else {
        resultsContainer.innerHTML += "<p>Keep practicing to improve your score.</p>";
    }
    document.getElementById('quiz-content').style.display = 'none';
}

function generateMoreQuestions(topics) {
    const newQuestions = allQuestions.filter(q => topics.includes(q.topic) && !quizQuestions.some(qq => qq.question === q.question));

    if (newQuestions.length > 0) {
        quizQuestions.push(...newQuestions.slice(0, Math.min(newQuestions.length, 2))); // Add up to 2 new questions
        wrongTopics.clear();
        document.getElementById('quiz-content').style.display = 'block';
        displayQuestion();
        return true;
    }
    return false;
}

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
document.getElementById('next-question').addEventListener('click', nextQuestion);

displayQuestion();
