const lessonContent = {
    title: "Unit 1: Matter and its Compositions",
    introduction: "Welcome to the world of chemistry! In this unit, we will learn about the basic building blocks of everything around us: matter. We will explore what matter is and how it is classified into elements, compounds, and mixtures.",
    sections: [
        {
            title: "What is Matter?",
            content: [
                "Matter is anything that has mass and takes up space. Everything you can see and touch is made of matter. The air you breathe, the water you drink, and the chair you are sitting on are all examples of matter.",
                "Matter is made up of tiny particles called atoms. 
            ]
        },
        {
            title: "Matter Classifications",
            content: [
                "Matter can be classified into two main groups: Pure Substances and Mixtures.

Pure Substances have only one kind of chemical particle throughout.

They have a fixed composition and definite properties such as melting point and density.

Pure substances branch into:

Elements – made of one kind of atom (e.g., Oxygen, Iron).

Compounds – made of two or more elements chemically combined in a fixed ratio (e.g., Water, Salt).

Mixtures contain two or more substances that are physically combined.

Their composition can vary, and each component keeps its own properties.

Mixtures branch into:

Homogeneous mixtures – uniform throughout (e.g., air, salt water).

Heterogeneous mixtures – not uniform; components are visible (e.g., salad, sand and water).",
                "<ul><li><b>Oxygen (O):</b> A gas that we need to breathe.</li><li><b>Iron (Fe):</b> A strong metal used to build cars and buildings.</li><li><b>Gold (Au):</b> A shiny and valuable metal used for jewelry.</li><li><b>Carbon (C):</b> The element that is the basis of all life on Earth.</li></ul>"
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
                                <div class="box-description">contain only one kind of chemical particle atoms or molecules.<br>Constant chemical composition and properties.</div>
                            </div>
                            <div class="line h-line-middle"></div>
                            <div class="split">
                                <div class="branch">
                                    <div class="line v-line-short"></div>
                                    <div class="box element">
                                        <div class="box-title">Elements</div>
                                        <div class="box-description">made of one kind of atom.<br>Cannot be broken down.<br>(e.g., Iron, Oxygen)</div>
                                    </div>
                                </div>
                                <div class="branch">
                                    <div class="line v-line-short"></div>
                                    <div class="box compound">
                                        <div class="box-title">Compounds</div>
                                        <div class="box-description">made of two or more elements chemically combined in a fixed ratio (e.g., Water, Salt).</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="branch">
                            <div class="line v-line"></div>
                            <div class="box mixture">
                                <div class="box-title">Mixtures</div>
                                <div class="box-description">Two or more substances substances are combined physically.</div>
                            </div>
                             <div class="line h-line-middle"></div>
                            <div class="split">
                                <div class="branch">
                                    <div class="line v-line-short"></div>
                                    <div class="box homogeneous">
                                        <div class="box-title">Homogeneous</div>
                                        <div class="box-description">Uniform composition.<br>(e.g., Salt water)</div>
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
        options: ["Sand and water", "Salt water", "Oil and water", "A bag of mixed nuts"],
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
        question: "What is formed when substances are combined physically together?",
        options: ["Element", "Compound", "Mixture", "Solution"],
        answer: "Mixture",
        topic: "Compounds"
    },
    {
        question: "Which of these is a pure substance?",
        options: ["Air", "Gold", "Steel", "Milk"],
        answer: "Gold",
        topic: "Elements"
    },
    {
      {
  question: "Salt dissolved in water is an example of a...",
  options: ["Homogeneous mixture", "Heterogeneous mixture", "Compound", "Element"],
  answer: "Homogeneous mixture",
  topic: "Mixtures"
},
{
  question: "Air is an example of a...",
  options: ["Homogeneous mixture", "Heterogeneous mixture", "Compound", "Element"],
  answer: "Homogeneous mixture",
  topic: "Mixtures"
},
{
  question: "Trail mix is an example of a...",
  options: ["Homogeneous mixture", "Heterogeneous mixture", "Compound", "Element"],
  answer: "Heterogeneous mixture",
  topic: "Mixtures"
},
{
  question: "Steel, which is made of iron and carbon evenly mixed, is an example of a...",
  options: ["Homogeneous mixture", "Heterogeneous mixture", "Compound", "Element"],
  answer: "Homogeneous mixture",
  topic: "Mixtures"
},
{
  question: "A mixture where the components can be seen and separated easily is called a...",
  options: ["Homogeneous mixture", "Heterogeneous mixture", "Compound", "Element"],
  answer: "Heterogeneous mixture",
  topic: "Mixtures"
},
{
  question: "Which of the following is a homogeneous mixture?",
  options: ["Sand and water", "Milk", "Oil and water", "Salad"],
  answer: "Milk",
  topic: "Mixtures"
},
{
  question: "Which statement best describes a mixture?",
  options: ["Chemically combined substances", "Physically combined substances", "Made of one kind of atom", "Always has a fixed ratio"],
  answer: "Physically combined substances",
  topic: "Mixtures"
},
{
  question: "A mixture that looks the same throughout is a...",
  options: ["Homogeneous mixture", "Heterogeneous mixture", "Compound", "Element"],
  answer: "Homogeneous mixture",
  topic: "Mixtures"
}
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
    { question: "Which of the following is a characteristic of an element?", options: ["Can be separated by physical means", "Is made of only one type of atom", "Has a variable composition", "Is always a solid at room temperature"], answer: "Is made of only one type of atom", topic: "Elements" },
    { question: "The symbol 'He' stands for which element?", options: ["Hydrogen", "Helium", "Hafnium", "Holmium"], answer: "Helium", topic: "Elements" },
    { question: "Which element is a metal?", options: ["Sulfur", "Chlorine", "Copper", "Neon"], answer: "Copper", topic: "Elements" },
    { question: "What do the elements Gold (Au), Silver (Ag), and Copper (Cu) have in common?", options: ["They are all gases", "They are all good conductors of electricity", "They are all highly reactive", "They are all non-metals"], answer: "They are all good conductors of electricity", topic: "Elements" },
    { question: "Which is NOT an element?", options: ["Sodium", "Brass", "Uranium", "Krypton"], answer: "Brass", topic: "Elements" },
    { question: "The periodic table is a chart of all known...", options: ["Compounds", "Mixtures", "Elements", "Molecules"], answer: "Elements", topic: "Elements" },
    { question: "Which element makes up the majority of the air we breathe?", options: ["Oxygen", "Carbon", "Argon", "Nitrogen"], answer: "Nitrogen", topic: "Elements" },
    { question: "All atoms of a specific element have the same number of...", options: ["Neutrons", "Electrons", "Protons", "Shells"], answer: "Protons", topic: "Elements" },

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
    { question: "What is the main difference between a compound and a mixture?", options: ["A compound has a fixed ratio of elements, a mixture does not.", "A compound can be separated by physical means, a mixture cannot.", "A mixture is a pure substance, a compound is not.", "There is no difference."], answer: "A compound has a fixed ratio of elements, a mixture does not.", topic: "Compounds" },
    { question: "Which of the following is NOT a compound?", options: ["Carbon Dioxide (CO₂)", "Ammonia (NH₃)", "Saltwater", "Sugar (C₁₂H₂₂O₁₁)"], answer: "Saltwater", topic: "Compounds" },
    { question: "The chemical formula H₂SO₄ represents...", options: ["A mixture of Hydrogen, Sulfur, and Oxygen", "An element", "A compound called Sulfuric Acid", "A homogeneous solution"], answer: "A compound called Sulfuric Acid", topic: "Compounds" },
    { question: "What does the '2' in H₂O represent?", options: ["There are two molecules of water.", "There are two atoms of Hydrogen.", "There are two atoms of Oxygen.", "There are two elements in water."], answer: "There are two atoms of Hydrogen.", topic: "Compounds" },
    { question: "Which of the following describes a property of a compound?", options: ["Its components are not chemically bonded.", "It can be separated by filtration.", "It has a definite melting and boiling point.", "Its composition can vary."], answer: "It has a definite melting and boiling point.", topic: "Compounds" },
    { question: "Baking soda (Sodium Bicarbonate, NaHCO₃) is a...", options: ["Mixture", "Element", "Compound", "Solution"], answer: "Compound", topic: "Compounds" },
    { question: "Which process can break down a compound into its constituent elements?", options: ["Evaporation", "Filtration", "Chemical reaction (e.g., electrolysis)", "Distillation"], answer: "Chemical reaction (e.g., electrolysis)", topic: "Compounds" },
    { question: "A molecule is the smallest unit of a...", options: ["Mixture", "Element", "Compound", "Atom"], answer: "Compound", topic: "Compounds" },
    { question: "All samples of a pure compound...", options: ["Have the same mass.", "Contain the same elements in the same ratio by mass.", "Are colorless.", "Can be separated by physical means."], answer: "Contain the same elements in the same ratio by mass.", topic: "Compounds" },

    // Mixtures
    { question: "Which of the following is a homogeneous mixture?", options: ["Sand and water", "Saltwater", "Oil and water", "A bag of mixed nuts"], answer: "Saltwater", topic: "Mixtures" },
    { question: "A salad is an example of a...", options: ["Homogeneous mixture", "Heterogeneous mixture", "Compound", "Element"], answer: "Heterogeneous mixture", topic: "Mixtures" },
    { question: "Which of the following is not a pure substance?", options: ["Water", "Air", "Iron", "Carbon dioxide"], answer: "Air", topic: "Mixtures" },
    { question: "Which of the following is a mixture?", options: ["Salt (NaCl)", "Water (H₂O)", "Air", "Carbon dioxide (CO₂)"], answer: "Air", topic: "Mixtures" },
    { question: "A sample of matter can be separated into its components by physical methods. This sample is most likely a...", options: ["Compound", "Element", "Mixture", "Pure substance"], answer: "Mixture", topic: "Mixtures" },
    { question: "A combination of two or more substances not chemically combined is called a...", options: ["Compound", "Element", "Solution", "Mixture"], answer: "Mixture", topic: "Mixtures" },
    { question: "The components of a mixture can be separated by __________ methods.", options: ["chemical", "physical", "nuclear", "biological"], answer: "physical", topic: "Mixtures" },
    { question: "Which statement is true about air?", options: ["It is a compound", "It is a heterogeneous mixture", "It is a homogeneous mixture", "It is an element"], answer: "It is a homogeneous mixture", topic: "Mixtures" },
    { question: "How can a mixture of iron filings and sulfur be separated?", options: ["By filtration", "By using a magnet", "By evaporation", "By chemical reaction"], answer: "By using a magnet", topic: "Mixtures" },
    { question: "Which of the following is a heterogeneous mixture?", options: ["Air", "Steel", "Blood", "Vinegar"], answer: "Blood", topic: "Mixtures" },
    { question: "A solution is another name for a...", options: ["Heterogeneous mixture", "Homogeneous mixture", "Pure substance", "Compound"], answer: "Homogeneous mixture", topic: "Mixtures" },
    { question: "Which method is best for separating sand from water?", options: ["Evaporation", "Filtration", "Magnetism", "Chromatography"], answer: "Filtration", topic: "Mixtures" },
    { question: "Brass is an alloy of copper and zinc. Brass is a...", options: ["Compound", "Element", "Homogeneous mixture (a solution)", "Heterogeneous mixture"], answer: "Homogeneous mixture (a solution)", topic: "Mixtures" },
    { question: "What property of the components is used to separate a mixture by distillation?", options: ["Boiling point", "Particle size", "Solubility", "Magnetism"], answer: "Boiling point", topic: "Mixtures" },
    { question: "The components of a mixture...", options: ["Are chemically bonded together.", "Are present in a fixed ratio.", "Lose their original properties.", "Retain their individual properties."], answer: "Retain their individual properties.", topic: "Mixtures" },
    { question: "Which of these is NOT a mixture?", options: ["Lemonade", "Soil", "Distilled water", "Bronze"], answer: "Distilled water", topic: "Mixtures" },
    { question: "In a salt and water solution, what is the solute?", options: ["Water", "Salt", "Both salt and water", "Neither salt nor water"], answer: "Salt", topic: "Mixtures" },
    { question: "If you can see the different components in a substance, it is a...", options: ["Homogeneous mixture", "Compound", "Element", "Heterogeneous mixture"], answer: "Heterogeneous mixture", topic: "Mixtures" },
    { question: "Which of these can have a composition that varies?", options: ["Water (H₂O)", "Helium (He)", "Sugar water", "Carbon Dioxide (CO₂)"], answer: "Sugar water", topic: "Mixtures" }
];

document.getElementById('submit-answer').addEventListener('click', checkAnswer);
document.getElementById('next-question').addEventListener('click', nextQuestion);

displayLesson();
displayQuestion();
