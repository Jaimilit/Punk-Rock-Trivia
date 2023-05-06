let questions = [
    {
        question: "Jello Biaffara was frontman for which punk band?",
        choices: ["The Clash", "The Dead Kennedys", "Rancid","NOFX"],
        correctAnswer: "The Dead Kennedys"
      },
      {
        question: "Which style of punk was developed by The Misfits?",
        choices: ["Emo Punk", "Hardcore Punk", "Oi Punk", "Horror Punk"],
        correctAnswer: "Horror Punk"
      },
      {
        question: "In 1995, this band's breakthrough album, Dookie, won the Grammy for Best Alternative Music Album.",
        choices: ["Green Day", "Rancid", "The Offspring", "NOFX"],
        correctAnswer: "Green Day"
      }
      question: "Sometimes, it's the saddest incidents that make for the most amazing of songs. Name the band who turned a suicide tragedy into "Bro Hymn".",
      choices: ["Pennywise", "Rancid", "Bad Religion", "Operation Ivy"],
      correctAnswer: "Pennywise"
    },
    {
      question: "Milo went to college, and then Everything Sucked. Who is the band, who created these records, and could also be noted for the cartoon drawn about their lead singer, depicting him as an almost Dilbert-like character?",
      choices: ["Leftover Crack", "The Descendents", "AFI", "The Unseen"],
      correctAnswer: "The Descendents"
    },
    {
      question: "Who is featured in Leftover Crack's 'System Fucked'?",
      choices: ["Lars Frederiksen", "Jesse Michaels", "Tim Armstrong", "Jack Terricloth"],
      correctAnswer: "Jesse Michaels"
    }
    question: "This band was formed by Andy Outbreak and Eric Ozenne and their last album is titled 'The Butterfly Collection'",
    choices: ["Rancid", "Choking Victim", "The Unseen", "The Nerve Agents"],
    correctAnswer: "The Nerve Agents"
  },
  {
    question: "This supergroup features members from Leftover Crack, Ensign, & The Ergs.",
    choices: ["Star Fucking Hipsters", "Me First and the Gimme Gimmes", "The Unseen", "The Transplants"],
    correctAnswer: "Star Fucking Hipsters"
  },
  {
    question: "This band's second album is titled 'So This is Freedom.'",
    choices: ["The Casualties", "The Unseen", "Agnostic Front", "Flogging Molly"],
    correctAnswer: "The Unseen"
  }
  {
    question: "The singer from this band has a book titled 'Tranny: Confessions of Punk Rock's Most Infamous Anarchist Sellout'",
    choices: ["Rancid", "Bad Religion", "Against Me!", "Choking Victum"],
    correctAnswer: "Against Me!"
  }
    ];  
  

    let currentQuestion = 0;
		let score = 0;

        function displayQuestion() {
            document.getElementById("question").textContent = questions[currentQuestion].question;
            document.getElementById("choices").innerHTML = "";
            for (let i = 0; i < questions[currentQuestion].choices.length; i++) {
                let choice = document.createElement("button");
                choice.textContent = questions[currentQuestion].choices[i];
                choice.addEventListener("click", function() {
                    checkAnswer(choice.textContent);
                });
                document.getElementById("choices").appendChild(choice);
            }
        }

        displayQuestion();

   
    

    