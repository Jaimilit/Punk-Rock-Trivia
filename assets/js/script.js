const questions = [
    {
        question: 'Jello Biaffara was frontman for which punk band?',
        answers: [
            { text: 'The Clash', correct: false },
            { text: 'The Dead Kennedys', correct: true },
            { text: 'Rancid', correct: false },
            { text: 'NOFX', correct: false },
        ]
    },
    {
        question: 'Which style of punk was developed by The Misfits?',
        answers: [
            { text: 'Emo Punk', correct: false },
            { text: 'Hardcore Punk', correct: false },
            { text: 'Oi Punk', correct: false },
            { text: 'Horror Punk', correct: true },
        ]
    },
    {
        question: 'In 1995, this band\'s breakthrough album, Dookie, won the Grammy for Best Alternative Music Album.',
        answers: [
            { text: 'Green Day', correct: true },
            { text: 'Rancid', correct: false },
            { text: 'NOFX', correct: false },
            { text: 'The Offspring', correct: false },
        ]
    
    },
    {
        question: 'Sometimes, it\'s the saddest incidents that make for the most amazing of songs. Name the band who turned a suicide tragedy into "Bro Hymn"',
        answers: [
            { text: 'Pennywise', correct: true },
            { text: 'Bad Religion', correct: false },
            { text: 'Operation Ivy', correct: false },
            { text: 'Rancid', correct: false },
        ]
    },
    {
        question: 'Milo went to college, and then Everything Sucked. Who is the band, who created these records, and could also be noted for the cartoon drawn about their lead singer, depicting him as an almost Dilbert-like character?',
        answers: [
            { text: 'Leftover Crack', correct: false },
            { text: 'The Descendents', correct: true },
            { text: 'AFI', correct: false },
            { text: 'The Unseen', correct: false },
        ]
    },
    {
      question: 'Who is featured in Leftover Crack's song titled ystem Fucked?',
      answers: [
        { text: 'Lars Frederiksen', correct: false },
        { text: 'Jesse Michaels', correct: true },
        { text: 'Tim Armstrong', correct: false },
        { text: 'Jack Terricloth', correct: false },
    ]
    },
    {
    question: 'This band was formed by Andy Outbreak and Eric Ozenne and their last album is titled "The Butterfly Collection"',
    answers: [
        { text: 'Rancid', correct: false },
        { text: 'Choking Victim', correct: false },
        { text: 'The Unseen', correct: false },
        { text: 'The Nerve Agents', correct: true },
    ]
},
  {
    question: 'This supergroup features members from Leftover Crack, Ensign, & The Ergs.',
    answers: [
        { text: 'Star Fucking Hipsters', correct: true },
        { text: 'Me First and the Gimme Gimmes', correct: false },
        { text: 'Transplants', correct: false },
        { text: 'The Unseen', correct: false },
    ]
  },
  {
    question: 'This band's second album is titled "So This is Freedom."',
    answers: [
        { text: 'The Casualties', correct: false },
        { text: 'The Unseen', correct: true },
        { text: 'Agnostic Front', correct: false },
        { text: 'Flogging Molly', correct: false },
    ]
  },
  {
    question: 'The singer from this band has a book titled "Tranny: Confessions of Punk Rock's Most Infamous Anarchist Sellout"',
    answers: [
        { text: 'Rancid', correct: false },
        { text: 'Bad Religion', correct: false },
        { text: 'Against Me!', correct: true },
        { text: 'Choking Victum', correct: false },
    ]
  },
    ];  
  

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
let shuffledQuestions, currentQuestionIndex



startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
})

function startGame () {
startButton.classList.add('hide')
shuffledQuestions = questions.sort(() => Math.random() - .5)
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
setNextQuestion()
}

function setNextQuestion() {
    resetState()
showQuestion (shuffledQuestions[currentQuestionIndex])
}

function showQuestion (question) {
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
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
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
    nextButton.classList.remove('hide')}
    else {
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

   
    

    