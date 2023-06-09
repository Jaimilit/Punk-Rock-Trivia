PUNK ROCK TRIVIA

This project was created to test the user's knowledge of punk rock music trivia.

![Responsiveness](/assets/images/screen-responsiveness.jpg)

# Goals
* The main goal is to let the user test his/her knowledge of punk music
* The user should have good insight of the content when viewing the start page
* The user should be able to navigate the game easily
* The user should have an easily accessible button to start the quiz
* The user should receive direct feedback on whether his/her response to each questions is correct or not
* The user should have an easily accessible next button to continue the quiz until all responses are answered
* The user should have the possiblity to restart the quiz at the end in order to improve his/her score

## User Stories
* I want the user to enjoy as well as be challanged during the quiz
* I want the user to be able to view his/her score during the game
* The game should be inutitive and easy to navigate

# DESIGN

I chose a to create this page in keeping with a punk rock theme. The background I have chosen is a wallpaper/collage of punk rock bands. It is in keeping with the punk rock style - very busy. I have chosen 3 main colors here - white, black, and red - all very punk rock. The title is simple and the red background makes it pop. And the start button is big, so you can't miss starting the game. For font, I have used Monsterrat which is easy to read.  

## FEATURES

### Languages Used
* HTML
* CSS
* Javascript

### Start Page

The title of the trivia game always appears on the top of the screen.
The start button I made big so the user cannot miss it. 
I have also dimmed the background image to make it easier for the user to see and use the start button.

![Start Page](/assets/images/start-page.jpg)

### Questions Page

The user is presented with a 10 questions quiz game about punk rock music. 
The user is presented with 10 questions and 4 choices for each question. 
I have used a hover effect when the user hovers over the 4 choices so he/she cannot make a mistake when clicking on the choices. 
I have also faded the background image when the game starts so the user can better focus and see the questions being asked. 

The user immedately knows how he/she is doing on the quiz. Once an answer has been chosen, the incorrect choices are changed to red and the correct answer is changed to green. The color of the text also goes from black before answering to white after answering for easy readability. 

All the buttons are the same size for the choices. The start button and next are big for easy access for the user.
The user also has to choose a response before the next button appears. This is so the user does not skip a question and is forced to provide an answer first before moving forward in the game. 

The scoreboard also keeps tally of correct and incorrect responses so that the user knows how he/she is doing at all times during the game. This way, at the end there will be no surprises in the final tally.

![Questions Page](/assets/images/questions.jpg)

### End Page
At the end of the quiz the score board is removed and a final score is provided. It also announces to the user that the game is over. Additionally, the background image is still faded so that the fopcus is on the final score for the user.
The user is provided with a restart button if he/she would like to try again. I kept the button small as I wanted the focus to be on the final score for the user.
![End Page](/assets/images/game-over.jpg)


### Footer
The footer was insprired by the love running project and the icons were taken from font awesome.

# Testing
| Goal | Execution |
| --------------- | --------------- |
| The main goal is to let the user test his/her punk rock knowledge  | The quiz tests a person's knowledge and restarts if he/she wants to try and improve |
| The user should have good insight of the content when viewing the start page | The title and background gives the user clear insight on what the quiz is about  |
| The user should have an easy accessible button to start the quiz  | The start button is easily visible as the background image is dimmed  |
| The user should receive direct feedback on whether each answer is correct or not | A clear red and green color is used for the user to easily see which option was correct  |
| The user should know his/her score throughout the game | A score area keeps a tally of correct and incorrect responses and is always visible to the user  |
| The user should have the possiblity to restart the quiz and try to improve  | When the quiz finishes the user receives a restart button if they want to test their knowledge again  |

## Responsiveness

The website is adapted to be seen on different screen sizes. The responsiveness of the website was first tested by chrome developer tools. Different breakpoints where used to view the website. Next to this the website was viewed on different devices: laptop, tablet, and smartphones.

I have tested that my projects works on various browsers - Safari, Chrome, and FireFox. I also have confirmed that my project is responsive by using the devtools toolbar. I confirm that all sections, heading, body, & footer, are readable and easy to understand. 


## Validator Testing
HTML No errors were returned when passing through the official W3C validator
![HTML Validator](/assets/images/html-checker.jpg)

CSS No errors were returned when passing through the official Jigsaw validator
![CSS Validator](/assets/images/css-validator.jpg)

Accessibility I confirm easy user accessibility by running it through lighthouse in dev tools
![Lighthouse](/assets/images/lighthouse.jpg)

Javascript - No errors were found in Jshint
![Jshint](/assets/images/jshint.jpg)

I have also checked it on wave with no errors found
![Wave](/assets/images/wave.jpg)


# Unfixed Bugs
At the moment there are no notable bugs in the system. In the future I would like to add a timer to countdown for each question.

# Deployment
For this project I used GitHub

* Log into GitHub
* Locate the GitHub Repository that shall be deployed live
* In the GitHub repository, navigate to the Settings tab
* From the source section drop-down menu, select the Master Branch
* At the ”Source” section choose ”main” as Branch and root as folder and click ”Save”
* The website will deploy and the pages refreshes to provide the live link to the project

The live link can be found here - https://jaimilit.github.io/Punk-Rock-Trivia/

# Credits

## Content & Images
* The icons in the footer were taken from Font Awesome
* Footer was taken from Love Running Project
* Trivia questions were written by me and inspired by these two websites: https://www.funtrivia.com/trivia-quiz/Music/So-You-Think-Youre-Punk-170784.html and https://thereviewsarein.com/2020/05/03/pretty-hard-punk-rock-quiz/
* Wallpaper background taken from here: https://wallpaperaccess.com/punk-rock
* Much of the code was inspried by this video: https://www.youtube.com/watch?v=riDzcEQbX6k
