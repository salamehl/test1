const lessonContent = {
    title: "Unit 1: Matter and its Compositions",
    introduction: "Welcome to the world of chemistry! In this unit, we will learn about the basic building blocks of everything around us: matter. We will explore what matter is and how it is classified into elements, compounds, and mixtures.",
    sections: [
        {
            title: "What is Matter?",
            content: [
                "Matter is anything that has mass and takes up space. Everything you can see and touch is made of matter. The air you breathe, the water you drink, and the chair you are sitting on are all examples of matter.",
                "Matter is made up of tiny particles called atoms. These atoms are so small that you cannot see them with your eyes."
            ]
        },
        {
            title: "Elements: The Purest Substances",
            content: [
                "An element is a pure substance that cannot be broken down into simpler substances by chemical means. It is made up of only one type of atom.",
                "Think of elements as the letters of the alphabet. Just as you can combine letters to make words, you can combine elements to make all the different substances in the world.",
                "There are over 100 known elements, and they are organized in a special chart called the Periodic Table. Some common examples of elements include:",
                "<ul><li><b>Oxygen (O):</b> A gas that we need to breathe.</li><li><b>Iron (Fe):</b> A strong metal used to build cars and buildings.</li><li><b>Gold (Au):</b> A shiny and valuable metal used for jewelry.</li><li><b>Carbon (C):</b> The element that is the basis of all life on Earth.</li></ul>"
            ]
        },
        {
            title: "Compounds: Elements Joined Together",
            content: [
                "A compound is a pure substance that is formed when two or more different elements are chemically bonded together. The elements in a compound are always present in a fixed ratio.",
                "For example, water (H₂O) is a compound made of two hydrogen (H) atoms and one oxygen (O) atom. No matter where you find water, it will always have this same combination of atoms.",
                "Another example is table salt, which is sodium chloride (NaCl). It is made of one sodium (Na) atom and one chlorine (Cl) atom.",
                "Compounds have properties that are different from the properties of the elements that make them up. For example, hydrogen and oxygen are both gases, but when they combine, they form water, which is a liquid at room temperature."
            ]
        },
        {
            title: "Mixtures: Substances Mixed Together",
            content: [
                "A mixture is a combination of two or more substances that are not chemically bonded together. The substances in a mixture keep their own individual properties.",
                "There are two main types of mixtures:",
                "<ul><li><b>Homogeneous mixtures:</b> These mixtures have a uniform composition throughout. This means that you cannot see the different parts of the mixture. For example, salt dissolved in water is a homogeneous mixture. Air is another example, it's a mix of gases like oxygen, nitrogen, and others.</li><li><b>Heterogeneous mixtures:</b> These mixtures do not have a uniform composition. You can see the different parts of the mixture. For example, sand and water is a heterogeneous mixture. A salad is another good example.</li></ul>"
            ]
        },
        {
            title: "Classification of Matter Summary",
            content: [
                `<div class="diagram">
                    <div class="box matter">
                        <div class="box-title">Matter</div>
                        <div class="box-description">Anything that has mass and takes up space.</div>
                    </div>
                    <div class="line h-line-top"></div>
                    <div class="split">
                        <div class="branch">
                            <div class="line v-line"></div>
                            <div class="box pure-substance">
                                <div class="box-title">Pure Substance</div>
                                <div class="box-description">Constant chemical composition and properties.</div>
                            </div>
                            <div class="line h-line-middle"></div>
                            <div class="split">
                                <div class="branch">
                                    <div class="line v-line-short"></div>
                                    <div class="box element">
                                        <div class="box-title">Elements</div>
                                        <div class="box-description">Cannot be broken down.<br>(e.g., Iron, Oxygen)</div>
                                    </div>
                                </div>
                                <div class="branch">
                                    <div class="line v-line-short"></div>
                                    <div class="box compound">
                                        <div class="box-title">Compounds</div>
                                        <div class="box-description">Chemically bonded elements.<br>(e.g., Water H₂O)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="branch">
                            <div class="line v-line"></div>
                            <div class="box mixture">
                                <div class="box-title">Mixtures</div>
                                <div class="box-description">Two or more substances not chemically bonded.</div>
                            </div>
                             <div class="line h-line-middle"></div>
                            <div class="split">
                                <div class="branch">
                                    <div class="line v-line-short"></div>
                                    <div class="box homogeneous">
                                        <div class="box-title">Homogeneous</div>
                                        <div class="box-description">Uniform composition.<br>(e.g., Saltwater)</div>
                                    </div>
                                </div>
                                <div class="branch">
                                    <div class="line v-line-short"></div>
                                    <div class="box heterogeneous">
                                        <div class="box-title">Heterogeneous</div>
                                        <div class="box-description">Non-uniform composition.<br>(e.g., Salad)</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>`
            ]
        }
    ]
};

function displayLesson() {
    const lessonContainer = document.getElementById('lesson-content');
    let html = `<h3>${lessonContent.introduction}</h3>`;
    lessonContent.sections.forEach(section => {
        html += `<h4>${section.title}</h4>`;
        section.content.forEach(paragraph => {
            html += `<p>${paragraph}</p>`;
        });
    });
    lessonContainer.innerHTML = html;
}

const quizQuestions = [
    {
        question: "What is the smallest unit of an element?",
        options: ["Atom", "Molecule", "Compound", "Mixture"],
        answer: "Atom",
        topic: "Elements"
    },
    {
        question: "Which of the following is a compound?",
        options: ["Oxygen", "Water", "Air", "Salad"],
        answer: "Water",
        topic: "Compounds"
    },
    {
        question: "Which of the following is a homogeneous mixture?",
        options: ["Sand and water", "Saltwater", "Oil and water", "A bag of mixed nuts"],
        answer: "Saltwater",
        topic: "Mixtures"
    },
    {
        question: "What is formed when two or more elements are chemically bonded together?",
        options: ["Element", "Compound", "Mixture", "Solution"],
        answer: "Compound",
        topic: "Compounds"
    },
    {
        question: "Which of these is a pure substance?",
        options: ["Air", "Gold", "Steel", "Milk"],
        answer: "Gold",
        topic: "Elements"
    },
    {
        question: "A salad is an example of a...",
        options: ["Homogeneous mixture", "Heterogeneous mixture", "Compound", "Element"],
        answer: "Heterogeneous mixture",
        topic: "Mixtures"
    }
];

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
    resultsContainer.innerHTML = `<p>You scored ${score} out of ${quizQuestions.length}.</p>`;
    if (wrongTopics.size > 0) {
        resultsContainer.innerHTML += "<p>Here are some more questions on the topics you found difficult. Keep practicing!</p>";
        generateMoreQuestions(Array.from(wrongTopics));
    } else {
        resultsContainer.innerHTML += "<p>Great job! You have a good understanding of this unit.</p>";
    }
    document.getElementById('quiz-content').style.display = 'none';
}

function generateMoreQuestions(topics) {
    const newQuestions = allQuestions.filter(q => topics.includes(q.topic) && !quizQuestions.some(qq => qq.question === q.question));
    if (newQuestions.length > 0) {
        quizQuestions.push(...newQuestions.slice(0, 2)); // Add up to 2 new questions
        // Reset quiz for new questions
        document.getElementById('quiz-content').style.display = 'block';
        displayQuestion();
    }
}

const allQuestions = [
    // Elements
    { question: "What is the smallest unit of an element?", options: ["Atom", "Molecule", "Compound", "Mixture"], answer: "Atom", topic: "Elements" },
    { question: "Which of these is a pure substance?", options: ["Air", "Gold", "Steel", "Milk"], answer: "Gold", topic: "Elements" },
    { question: "Which of the following is a symbol for an element?", options: ["H₂O", "CO₂", "O", "NaCl"], answer: "O", topic: "Elements" },
    { question: "Which element is essential for respiration?", options: ["Carbon", "Oxygen", "Nitrogen", "Hydrogen"], answer: "Oxygen", topic: "Elements" },
    { question: "A substance that contains only one kind of atom is called a(n)...", options: ["Element", "Compound", "Mixture", "Solution"], answer: "Element", topic: "Elements" },
    { question: "Which of these pairs represents elements only?", options: ["Iron and Oxygen", "Water and Hydrogen", "Salt and CO₂", "Sugar and Nitrogen"], answer: "Iron and Oxygen", topic: "Elements" },
    { question: "Can elements be broken down by chemical means?", options: ["Yes, into simpler substances", "No, they are the simplest form of matter", "Only some elements can be broken down", "Yes, into atoms"], answer: "No, they are the simplest form of matter", topic: "Elements" },

    // Compounds
    { question: "Which of the following is a compound?", options: ["Oxygen", "Water", "Air", "Salad"], answer: "Water", topic: "Compounds" },
    { question: "What is formed when two or more elements are chemically bonded together?", options: ["Element", "Compound", "Mixture", "Solution"], answer: "Compound", topic: "Compounds" },
    { question: "What is the chemical formula for table salt?", options: ["H₂O", "CO₂", "O₂", "NaCl"], answer: "NaCl", topic: "Compounds" },
    { question: "Is it possible to separate a compound by physical means?", options: ["Yes", "No"], answer: "No", topic: "Compounds" },
    { question: "Which statement best describes a compound?", options: ["Two or more substances mixed physically", "A pure substance made of identical atoms", "Two or more elements chemically combined in a fixed ratio", "A mixture that can be separated by filtration"], answer: "Two or more elements chemically combined in a fixed ratio", topic: "Compounds" },
    { question: "Water (H₂O) is an example of a...", options: ["Mixture", "Element", "Compound", "Solution"], answer: "Compound", topic: "Compounds" },
    { question: "In a compound, the elements are present in a __________ ratio.", options: ["variable", "fixed", "random", "large"], answer: "fixed", topic: "Compounds" },
    { question: "When two elements combine chemically to form a compound, the compound has...", options: ["The same properties as the elements", "Properties different from the elements", "Both elements visible", "A variable composition"], answer: "Properties different from the elements", topic: "Compounds" },
    { question: "The properties of a compound are...", options: ["the same as its constituent elements", "different from its constituent elements", "an average of its constituent elements", "always solid"], answer: "different from its constituent elements", topic: "Compounds" },

    // Mixtures
    { question: "Which of the following is a homogeneous mixture?", options: ["Sand and water", "Saltwater", "Oil and water", "A bag of mixed nuts"], answer: "Saltwater", topic: "Mixtures" },
    { question: "A salad is an example of a...", options: ["Homogeneous mixture", "Heterogeneous mixture", "Compound", "Element"], answer: "Heterogeneous mixture", topic: "Mixtures" },
    { question: "Which of the following is not a pure substance?", options: ["Water", "Air", "Iron", "Carbon dioxide"], answer: "Air", topic: "Mixtures" },
    { question: "Which of the following is a mixture?", options: ["Salt (NaCl)", "Water (H₂O)", "Air", "Carbon dioxide (CO₂)"], answer: "Air", topic: "Mixtures" },
    { question: "A sample of matter can be separated into its components by physical methods. This sample is most likely a...", options: ["Compound", "Element", "Mixture", "Pure substance"], answer: "Mixture", topic: "Mixtures" },
    { question: "A combination of two or more substances not chemically combined is called a...", options: ["Compound", "Element", "Solution", "Mixture"], answer: "Mixture", topic: "Mixtures" },
    { question: "The components of a mixture can be separated by __________ methods.", options: ["chemical", "physical", "nuclear", "biological"], answer: "physical", topic: "Mixtures" },
    { question: "Which statement is true about air?", options: ["It is a compound", "It is a heterogeneous mixture", "It is a homogeneous mixture", "It is an element"], answer: "It is a homogeneous mixture", topic: "Mixtures" },
    { question: "How can a mixture of iron filings and sulfur be separated?", options: ["By filtration", "By using a magnet", "By evaporation", "By chemical reaction"], answer: "By using a magnet", topic: "Mixtures" }
];

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
document.getElementById('next-question').addEventListener('click', nextQuestion);

displayLesson();
displayQuestion();
