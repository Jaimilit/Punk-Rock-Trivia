let questions = [
    {
        question: "Jello Biaffara was frontman for which punk band?",
        choices: ["The Clash", "The Dead Kennedys", "Rancid","NOFX"]
        correctAnswer: 1
      },
      {
        question: "Which style of punk was developed by The Misfits?",
        choices: ["Emo Punk", "Hardcore Punk", "Oi Punk", "Horror Punk"]
        correctAnswer: 3
      },
      {
        question: "In 1995, this band's breakthrough album, Dookie, won the Grammy for Best Alternative Music Album.",
        choices: ["Green Day", "Rancid", "The Offspring", "NOFX"]
        correctAnswer: 0
      }
      question: "Sometimes, it's the saddest incidents that make for the most amazing of songs. Name the band who turned a suicide tragedy into "Bro Hymn".",
      choices: ["Pennywise", "Rancid", "Bad Religion", "Operation Ivy"]
      correctAnswer: 0
    },
    {
      question: "Milo went to college, and then Everything Sucked. Who is the band, who created these records, and could also be noted for the cartoon drawn about their lead singer, depicting him as an almost Dilbert-like character?",
      choices: ["Leftover Crack", "The Descendents", "AFI", "The Unseen"]
      correctAnswer: 1
    },
    {
      question: "Who is featured in Leftover Crack's 'System Fucked'?",
      choices: ["Lars Frederiksen", "Jesse Michaels", "Tim Armstrong", "Jack Terricloth"]
      correctAnswer: 1
    }
    question: "This band was formed by Andy Outbreak and Eric Ozenne and their last album is titled 'The Butterfly Collection'",
    choices: ["Rancid", "Choking Victim", "The Unseen", "The Nerve Agents"]
    correctAnswer: 3
  },
  {
    question: "This supergroup features members from Leftover Crack, Ensign, & The Ergs.",
    choices: ["Star Fucking Hipsters", "Me First and the Gimme Gimmes", "The Unseen" "The Transplants"]
    correctAnswer: 0
  },
  {
    question: "This band's second album is titled 'So This is Freedom.'",
    choices: ["The Casualties", "The Unseen", "Agnostic Front", "Flogging Molly"]
    correctAnswer: 1
  }
  {
    question: "The singer from this band has a book titled 'Tranny: Confessions of Punk Rock's Most Infamous Anarchist Sellout'",
    choices: ["Rancid", "Bad Religion", "Against Me!" "Choking Victum"]
    correctAnswer: 2
  }
    ];  
  

    function displayQuestion() {
        let currentQuestion = triviaData[currentQuestionIndex]; 
        let questionElement = document.getElementById("question"); 
        questionElement.innerText = currentQuestion.question; 
        let choicesElement = document.getElementById("choices"); 
        choicesElement.innerHTML = ""; 
        currentQuestion.choices.forEach(choice => { let button = document.createElement("button"); button.innerText = choice; 
        button.onclick = () => checkAnswer(choice, currentQuestion.answer); choicesElement.appendChild(button); }); }

        

    function checkAnswer(selectedAnswer, correctAnswer) {
        if (selectedAnswer === correctAnswer) {
          score++;
          alert("Yay! You Are Correct!");
        } else {
          alert("Sorry, You Got That Answer Incorrect!");
        }
        currentQuestionIndex++;
        if (currentQuestionIndex === questions.length) {
          endGame();
        } else {
          displayQuestion();
        }
      }
 
 
 
      showQuestion(questions[0]);