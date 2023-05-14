// game questions
const questions = [
    {
        question: 'Jello Biafra was frontman for which punk band?',
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
        question: 'In 1995, this band\'s breakthrough album, "Dookie", won the Grammy for Best Alternative Music Album.',
        answers: [
            { text: 'Green Day', correct: true },
            { text: 'Rancid', correct: false },
            { text: 'NOFX', correct: false },
            { text: 'The Offspring', correct: false },
        ]
   
    },
    {
        question: 'Sometimes, it\'s the saddest incidents that make for the most amazing of songs. Name the band who turned a suicide tragedy into "Bro Hymn."',
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
      question: 'Who is the main singer from Operation Ivy?',
      answers: [
        { text: 'Lars Frederiksen', correct: false },
        { text: 'Jesse Michaels', correct: true },
        { text: 'Tim Armstrong', correct: false },
        { text: 'Jack Terricloth', correct: false },
    ]
    },
    {
    question: 'This band was formed by Andy Outbreak and Eric Ozenne and their last album is titled "The Butterfly Collection."',
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
    question: 'This band has a second album titled "So This is Freedom"?',
    answers: [
        { text: 'The Casualties', correct: false },
        { text: 'The Unseen', correct: true },
        { text: 'Agnostic Front', correct: false },
        { text: 'Flogging Molly', correct: false },
    ]
  },
  {
    question: 'The singer from this band has a book titled "Tranny: Confessions of Punk Rock Most Infamous Anarchist Sellout."',
    answers: [
        { text: 'Rancid', correct: false },
        { text: 'Bad Religion', correct: false },
        { text: 'Against Me!', correct: true },
        { text: 'Choking Victum', correct: false },
    ]
  },
    ]; 


     // define variables in order to drive quiz
  const startButton = document.getElementById('start-btn');
  const nextButton = document.getElementById('next-btn');
  const questionContainerElement = document.getElementById('question-container');
  const questionElement = document.getElementById('question');
  const scoreAreaElement = document.querySelector('.score-area');
  const answerButtonsElement = document.getElementById('answer-buttons');
  const restartButton = document.getElementById('restart-btn');
   let shuffledQuestions;
  let currentQuestionIndex;
  let score = 0;
  let answerSelected = false; 
 
 
 // event listeners
 startButton.addEventListener('click', startGame);
 nextButton.addEventListener('click', () => {
   currentQuestionIndex++;
   setNextQuestion();
 });
 restartButton.addEventListener('click', restartGame);


   // function to start game
   function startGame () {
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionIndex = 0;
    score = 0;
    questionContainerElement.classList.remove('hide');
    scoreAreaElement.classList.remove('hide');
    setNextQuestion();
    document.querySelector('.score-area').style.display = "block";
}

   // function to go to the next question and shuffle the order
 
   function setNextQuestion() {
    resetState();
    if (currentQuestionIndex >= 10) {
      endGame();
    } else {
      showQuestion(shuffledQuestions[currentQuestionIndex]);
    }
  }
 
   
 
   //function to show next question and add button
 
  function showQuestion(question) {
    questionElement.innerText = question.question;
    question.answers.forEach(answer => {
      const button = document.createElement('button');
      button.innerText = answer.text;
      button.classList.add('btn');
      if (answer.correct) {
        button.dataset.correct = answer.correct;
      }
      button.addEventListener('click', selectAnswer);
      answerButtonsElement.appendChild(button);
    });
  }
 
  // removes buttons when going to new question
  function resetState() {
    clearStatusClass(document.body);
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
      answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
  }
 
 
 // checks if selected answer is correct or incorrect and increments it accordingly
 function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct;
    setStatusClass(document.body, correct);
    Array.from(answerButtonsElement.children).forEach(button => {
      setStatusClass(button, button.dataset.correct);
      button.disabled = true; // disable all buttons in answerButtonsElement
    });
  
    if (correct) {
      incrementScore();
    } else {
      incrementWrongAnswer();
    }
    // show the next button if there are more questions
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
      nextButton.classList.remove('hide');
    } else {
      endGame();
    }
  }
 
 
  function setStatusClass(element, correct) {
    clearStatusClass(element);
    if (correct) {
      element.classList.add('correct');
    } else {
      element.classList.add('wrong');
    }
  }
   function clearStatusClass(element) {
    element.classList.remove('correct');
    element.classList.remove('wrong');
  }
  function incrementScore() {
    let oldScore = parseInt(document.getElementById("score").innerText);
    document.getElementById("score").innerText = ++oldScore;
    score = oldScore;
  }
 
   function incrementWrongAnswer() {
       let oldScore = parseInt(document.getElementById("incorrect").innerText);
   document.getElementById("incorrect").innerText = ++oldScore;
   }
 
        // end game
        function endGame() {
            const message = `You scored ${score} out of 10`;
            const scoreElement = document.createElement('p');
            scoreElement.innerText = message;
            questionContainerElement.appendChild(scoreElement);
            const gameOverElement = document.createElement('h2');
            gameOverElement.innerText = 'Game over!';
            questionContainerElement.appendChild(gameOverElement);
            scoreAreaElement.style.display = "none";
            restartButton.classList.remove('hide'); // Show restart button
          }


          function restartGame() {
            currentQuestionIndex = 0;
            score = 0;
            answerSelected = false;
            shuffledQuestions = questions.sort(() => Math.random() - .5);
            startGame(); // call the startGame() function to restart the game
            restartButton.classList.add('hide');
            const scoreElement = document.querySelector('#question-container p');
            if (scoreElement) {
              scoreElement.remove();
            }
            const gameOverElement = document.querySelector('#question-container h2');
            if (gameOverElement) {
              gameOverElement.remove();
            }
            document.getElementById("score").innerText = '0';
            document.getElementById("incorrect").innerText = '0';
          }
 
 