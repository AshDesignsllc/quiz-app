const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')

const questionContainerElement = document.getElementById('question-container');
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')

let shuffledQuestions, currentQuestionIndex

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer)
        answerButtonsElement.appendChild(button)
    })
}

function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild
        (answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
}

const questions = [
    {
        question: 'Who invented JavaScript?',
        answers: [
            { text: 'Abraham Lincoln', correct: false },
            { text: 'Brendan Eich', correct: true },
            { text: 'Håkon Wium Lie', correct: false },
            { text: 'Tim Berners-Lee', correct: false }

        ]
    },
    {
        question: 'What is a duel between three people called?',
        answers: [
            { text: 'There\'s no such thing.', correct: false },
            { text: 'Another day in the wild wild west.', correct: false },
            { text: 'A truel', correct: true },
            { text: 'Who comes up with these questions?', correct: false }
        ]
    },
    {
        question: 'What can be broken but is never held?',
        answers: [
            { text: 'A promise', correct: true },
            { text: 'An equation', correct: false },
            { text: 'I don\'t know.', correct: false },
            { text: 'Hope', correct: false }
        ]
    },
    {
        question: 'Let\'s see if you can count. What is 8 + 2?',
        answers: [
            { text: 'I don\'t know.', correct: false },
            { text: '10', correct: true },
            { text: '16', correct: false },
            { text: '6', correct: false }
        ]
    },
]