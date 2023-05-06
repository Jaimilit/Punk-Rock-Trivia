let questions = [
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
  

let startButton = document.getElementById('start-btn')
let questionContainerElement = document.getElementById('question-container')
let shuffledQuestions, currentQuestionIndex
let questionElement = document.getElementById('question')
let answerButtonsElement = document.getElementById('answer-buttons')



startButton.addEventListener('click', startGame)

function startGame () {
console.log('Started')
startButton.classList.add('hide')
shuffledQuestions = questions.sort((>= Math.random() - .5))
currentQuestionIndex = 0
questionContainerElement.classList.remove('hide')
SetNextQuestion()
}

function nextQuestion() {
showQuestion (shuffledQuestions[currentQuestionIndex])
}

function showQuestion (question) {
question.element.innerText = question.question
}

function selectAnswer() {

}

   
    

    