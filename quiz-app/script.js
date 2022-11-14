const quizData = [
  {
    question: "Which language runs in a web browser?",
    a: "Java",
    b: "C",
    c: "Python",
    d: "JavaScript",
    correct: "d",
  },
  {
    question: "What does CSS stand for?",
    a: "Central Style Sheets",
    b: "Cascading Style Sheets",
    c: "Cascading Simple Sheets",
    d: "Cars SUVs Sailboats",
    correct: "b",
  },
  {
    question: "What does HTML stand for?",
    a: "Hypertext Markup Language",
    b: "Hypertext Markdown Language",
    c: "Hyperloop Machine Language",
    d: "Helicopters Terminals Motorboats Lamborginis",
    correct: "a",
  },
  {
    question: "What year was JavaScript launched?",
    a: "1996",
    b: "1995",
    c: "1994",
    d: "none of the above",
    correct: "b",
  },
];

const quiz = document.getElementById('quiz')
const answer_els = document.querySelectorAll('.answer')
const question_el = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById("b_text");
const c_text = document.getElementById("c_text");
const d_text = document.getElementById("d_text");
const btn = document.getElementById('submit')

let currentQuestion = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuestionData = quizData[currentQuestion]
    question_el.innerText = currentQuestionData.question
    a_text.innerText = currentQuestionData.a
    b_text.innerText = currentQuestionData.b;
    c_text.innerText = currentQuestionData.c;
    d_text.innerText = currentQuestionData.d;
}

function deselectAnswers() {
    answer_els.forEach(answer_el => answer_el.checked = false)
}

function getSelectedAnswer() {
    let answer
    answer_els.forEach(answer_el => {
        if (answer_el.checked) {
            answer = answer_el.id
        }
    })
    return answer
}

btn.addEventListener('click', () => {
    const answer = getSelectedAnswer()

    if (answer) {
        if (answer === quizData[currentQuestion].correct) {
            score++
        }
        currentQuestion++

        if (currentQuestion < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
            <h2>You answered ${score}/${quizData.length} questions correctly! </h2>
            <button onclick = 'location.reload()'> Reload</button>
            `
        }
    }
})