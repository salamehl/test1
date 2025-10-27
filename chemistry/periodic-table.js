const allQuestions = [
    // Basics
    { question: "What does the atomic number of an element represent?", options: ["Number of neutrons", "Number of protons", "Number of electrons", "Number of protons and neutrons"], answer: "Number of protons", topic: "Basics" },
    { question: "The mass number of an atom is the sum of its...", options: ["Protons and electrons", "Neutrons and electrons", "Protons and neutrons", "Protons, neutrons, and electrons"], answer: "Protons and neutrons", topic: "Basics" },
    { question: "What is a particle with a positive charge in the atom's nucleus?", options: ["Electron", "Neutron", "Proton", "Ion"], answer: "Proton", topic: "Basics" },
    { question: "What is a particle with no charge in the atom's nucleus?", options: ["Electron", "Neutron", "Proton", "Anode"], answer: "Neutron", topic: "Basics" },
    { question: "What is a particle that orbits the nucleus and has a negative charge?", options: ["Electron", "Neutron", "Proton", "Cathode"], answer: "Electron", topic: "Basics" },
    { question: "Atoms of the same element with different numbers of neutrons are called...", options: ["Ions", "Isotopes", "Isomers", "Allotropes"], answer: "Isotopes", topic: "Basics" },
    { question: "An atom that has gained or lost electrons is called an...", options: ["Ion", "Isotope", "Molecule", "Compound"], answer: "Ion", topic: "Basics" },
    { question: "What is the smallest unit of an element that retains the properties of that element?", options: ["Molecule", "Compound", "Atom", "Mixture"], answer: "Atom", topic: "Basics" },
    { question: "A positively charged ion is called a...", options: ["Anion", "Cation", "Positron", "Proton"], answer: "Cation", topic: "Basics" },
    { question: "A negatively charged ion is called an...", options: ["Anion", "Cation", "Electron", "Negaton"], answer: "Anion", topic: "Basics" },

    // Organization
    { question: "What are the vertical columns on the periodic table called?", options: ["Periods", "Groups", "Rows", "Series"], answer: "Groups", topic: "Organization" },
    { question: "Elements in the same group have similar...", options: ["Atomic masses", "Atomic numbers", "Chemical properties", "Number of protons"], answer: "Chemical properties", topic: "Organization" },
    { question: "What are the horizontal rows on the periodic table called?", options: ["Groups", "Families", "Periods", "Columns"], answer: "Periods", topic: "Organization" },
    { question: "How is the periodic table primarily arranged?", options: ["By atomic mass", "By alphabetical order", "By atomic number", "By discovery date"], answer: "By atomic number", topic: "Organization" },
    { question: "Where are the non-metals located on the periodic table?", options: ["Left side", "Right side", "Middle section", "Bottom rows"], answer: "Right side", topic: "Organization" },
    { question: "The 'staircase' line on the periodic table separates...", options: ["Solids from liquids", "Gases from solids", "Metals from non-metals", "Reactive from non-reactive elements"], answer: "Metals from non-metals", topic: "Organization" },
    { question: "Elements along the 'staircase' line are called...", options: ["Transition metals", "Noble gases", "Metalloids", "Lanthanides"], answer: "Metalloids", topic: "Organization" },
    { question: "What do elements in the same period have in common?", options: ["Similar chemical properties", "Same number of valence electrons", "Same number of electron shells", "Same atomic mass"], answer: "Same number of electron shells", topic: "Organization" },
    { question: "The elements in the middle of the periodic table are known as...", options: ["Alkali metals", "Halogens", "Actinides", "Transition metals"], answer: "Transition metals", topic: "Organization" },
    { question: "The two rows at the very bottom of the periodic table are the...", options: ["Lanthanides and Actinides", "Alkaline Earth Metals and Halogens", "Metalloids and Non-metals", "Precious Metals and Industrial Gases"], answer: "Lanthanides and Actinides", topic: "Organization" },

    // Symbols
    { question: "What is the chemical symbol for Gold?", options: ["Go", "Gd", "Au", "Ag"], answer: "Au", topic: "Symbols" },
    { question: "The element with the symbol 'O' is...", options: ["Osmium", "Oxygen", "Gold", "Iron"], answer: "Oxygen", topic: "Symbols" },
    { question: "What is the chemical symbol for Silver?", options: ["Si", "Sv", "Ag", "Al"], answer: "Ag", topic: "Symbols" },
    { question: "What is the chemical symbol for Iron?", options: ["I", "Ir", "In", "Fe"], answer: "Fe", topic: "Symbols" },
    { question: "What is the chemical symbol for Sodium?", options: ["S", "So", "Na", "Nd"], answer: "Na", topic: "Symbols" },
    { question: "What is the chemical symbol for Potassium?", options: ["P", "Po", "K", "Pt"], answer: "K", topic: "Symbols" },
    { question: "What is the chemical symbol for Lead?", options: ["L", "Le", "Pb", "Pd"], answer: "Pb", topic: "Symbols" },
    { question: "What is the chemical symbol for Mercury?", options: ["Me", "Mc", "Hg", "Mg"], answer: "Hg", topic: "Symbols" },
    { question: "What is the chemical symbol for Carbon?", options: ["Ca", "Co", "Cr", "C"], answer: "C", topic: "Symbols" },
    { question: "What is the chemical symbol for Helium?", options: ["H", "He", "Hm", "Hl"], answer: "He", topic: "Symbols" },

    // Groups
    { question: "Which of the following is a noble gas?", options: ["Oxygen", "Hydrogen", "Helium", "Nitrogen"], answer: "Helium", topic: "Groups" },
    { question: "Group 1 elements are known as the...", options: ["Halogens", "Noble Gases", "Alkali Metals", "Alkaline Earth Metals"], answer: "Alkali Metals", topic: "Groups" },
    { question: "Group 2 elements are known as the...", options: ["Halogens", "Noble Gases", "Alkali Metals", "Alkaline Earth Metals"], answer: "Alkaline Earth Metals", topic: "Groups" },
    { question: "Group 17 elements are known as the...", options: ["Halogens", "Noble Gases", "Alkali Metals", "Alkaline Earth Metals"], answer: "Halogens", topic: "Groups" },
    { question: "Group 18 elements are known as the...", options: ["Halogens", "Noble Gases", "Alkali Metals", "Alkaline Earth Metals"], answer: "Noble Gases", topic: "Groups" },
    { question: "What is a key characteristic of Noble Gases?", options: ["They are highly reactive", "They are very unreactive", "They are excellent conductors", "They are liquid at room temperature"], answer: "They are very unreactive", topic: "Groups" },
    { question: "What is a key characteristic of Alkali Metals?", options: ["They form -1 ions", "They are very unreactive", "They react violently with water", "They are gases at room temperature"], answer: "They react violently with water", topic: "Groups" },
    { question: "What is the most reactive group of non-metals?", options: ["Group 1", "Group 2", "Group 18", "Group 17"], answer: "Group 17", topic: "Groups" },
    { question: "Alkali metals typically form ions with what charge?", options: ["+1", "-1", "+2", "-2"], answer: "+1", topic: "Groups" },
    { question: "Halogens typically form ions with what charge?", options: ["+1", "-1", "+2", "-2"], answer: "-1", topic: "Groups" },

    // History
    { question: "Who is credited with creating the first periodic table?", options: ["Isaac Newton", "Albert Einstein", "Dmitri Mendeleev", "Marie Curie"], answer: "Dmitri Mendeleev", topic: "History" },
    { question: "Mendeleev arranged his periodic table primarily by...", options: ["Atomic number", "Atomic mass", "Number of electrons", "Alphabetical order"], answer: "Atomic mass", topic: "History" },
    { question: "Why did Mendeleev leave gaps in his periodic table?", options: ["He made mistakes", "For elements that were not yet discovered", "To align it with astrological charts", "To make the table symmetrical"], answer: "For elements that were not yet discovered", topic: "History" },
    { question: "Who rearranged the periodic table by atomic number, solving inconsistencies in Mendeleev's table?", options: ["John Dalton", "Henry Moseley", "J.J. Thomson", "Ernest Rutherford"], answer: "Henry Moseley", topic: "History" },
    { question: "The 'Law of Octaves' was an early periodic table precursor proposed by...", options: ["John Newlands", "Lothar Meyer", "Dmitri Mendeleev", "Johann Döbereiner"], answer: "John Newlands", topic: "History" },
    { question: "The concept of 'triads' was based on...", options: ["Groups of three elements with similar properties", "Elements with three valence electrons", "Elements that are gases, liquids, and solids", "The discovery of the proton, neutron, and electron"], answer: "Groups of three elements with similar properties", topic: "History" },
    { question: "Who was the main contributor to the discovery of the actinide series?", options: ["Marie Curie", "Albert Einstein", "Glenn T. Seaborg", "Linus Pauling"], answer: "Glenn T. Seaborg", topic: "History" },
    { question: "How was the first noble gas, Argon, discovered?", options: ["By its reaction with water", "By analyzing the composition of air", "By radioactive decay", "Through astronomical observation"], answer: "By analyzing the composition of air", topic: "History" },
    { question: "The first periodic table was developed in which century?", options: ["17th", "18th", "19th", "20th"], answer: "19th", topic: "History" },
    { question: "What was a major flaw in Mendeleev's original periodic table?", options: ["It did not include transition metals", "It placed some elements in the wrong order based on properties", "It was written in an obscure language", "It only included 20 elements"], answer: "It placed some elements in the wrong order based on properties", topic: "History" },

    // Trends
    { question: "Atomic radius generally ___ from left to right across a period.", options: ["Increases", "Decreases", "Stays the same", "Doubles"], answer: "Decreases", topic: "Trends" },
    { question: "Atomic radius generally ___ from top to bottom down a group.", options: ["Increases", "Decreases", "Stays the same", "Is halved"], answer: "Increases", topic: "Trends" },
    { question: "What is electronegativity?", options: ["The energy needed to remove an electron", "The size of an atom", "An atom's ability to attract electrons in a bond", "The mass of an atom"], answer: "An atom's ability to attract electrons in a bond", topic: "Trends" },
    { question: "Which element has the highest electronegativity?", options: ["Helium", "Caesium", "Fluorine", "Francium"], answer: "Fluorine", topic: "Trends" },
    { question: "Electronegativity generally ___ from left to right across a period.", options: ["Increases", "Decreases", "Stays the same", "Becomes zero"], answer: "Increases", topic: "Trends" },
    { question: "Electronegativity generally ___ from top to bottom down a group.", options: ["Increases", "Decreases", "Stays the same", "Is inverted"], answer: "Decreases", topic: "Trends" },
    { question: "What is ionization energy?", options: ["The energy needed to remove an electron", "The energy released when an electron is added", "The energy of the nucleus", "The energy of a chemical bond"], answer: "The energy needed to remove an electron", topic: "Trends" },
    { question: "Ionization energy generally ___ from left to right across a period.", options: ["Increases", "Decreases", "Stays the same", "Is cut in half"], answer: "Increases", topic: "Trends" },
    { question: "Ionization energy generally ___ from top to bottom down a group.", options: ["Increases", "Decreases", "Stays the same", "Is squared"], answer: "Decreases", topic: "Trends" },
    { question: "Which group has the highest ionization energies?", options: ["Alkali Metals", "Halogens", "Transition Metals", "Noble Gases"], answer: "Noble Gases", topic: "Trends" }
];


// Function to shuffle an array
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

// Shuffle all questions
shuffleArray(allQuestions);

const quizQuestions = allQuestions.slice(0, 10); // Start with 10 random questions

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
