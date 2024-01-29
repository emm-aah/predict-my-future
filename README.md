# Predict My Future

Predict my future is a quiz game based on gut instinct. The user will follow their first instincts through a series of questions to find their destiny. Everyday users get daily horoscopes, palms, tarot cards etc read and this quiz is aimed at the user that would enjoy predictions based on a certain number of randomly selected answers to show them their fate. The quiz is meant to be enjoyable for the user and will offer different results if different answers are given on a second play.

These types of readings often give the user insight into themselves through an understanding of what future they would wish to have seen at the end and whether they are happy with their outcome. For example, a user might return the prediction “You will travel the world” and upon reading this realize that this is not what they wish for their life but in fact would have been happier to receive a future about having children.

![Responsive Design](/documentation/readme-images/responsiveness.png)

The live quiz can be found here [Predict My Future](https://emm-aah.github.io/predict-my-future/)

## Strategy

The strategy was to make a user-friendly quiz game which users could easily interact with based on feeling rather than knowledge and create a result from this.

## Scope

Some of the features that were looked at to implement this strategy:

- Quiz questions/ instructions.
- A quiz section that will change for the next question.
- Next question button that becomes a predict my future button at the end.
- Reference pictures for question answers
- Prediction are with a crystal ball to replicate seeing your future.
- Buttons to retake the test and to start again from the middle of the test.
- Math Random to create a age of death

## Structure

There are three distinct sections for this site. The first section will be the landing page with the instructions of how to play as well as a start button for when the user is ready. The second section will be the question area. This will hold the instruction and answer options. The first two will be linked by the same background and heading. The center of the box will be the only part to change when the game begins and continue to change for each question. The third section will change the view completely to a crystal ball with the prediction inside of it.

## Skeleton

The features that got included where:

- Seven quiz questions with choice of four answers each
- Start button to begin game
- Predict my future button at end of last question
- Next Question button to lead to the following question
- Start over button
- Incrementing question at bottom of page
- Retake quiz button

Please find pdf to the Wireframe [here.](/documentation/wireframe-predict-my-future.pdf)

## Surface

I decided that the night sky for the background image reflected the concept of prediction as people associate stars aligning with destiny and fate. I chose to put a purple hue overlay on top so that it brightened it and gave a feeling of fun rather than doom which can also be associated with these sorts of readings. This purple is transparent so the starry night effect is not lost.

![Sky picture for quiz background](/documentation/readme-images/sky-readme.jpg)
![Crystal Ball for prediction background](/documentation/readme-images/crystal-readme.jpg)
![Purple Color](/documentation/readme-images/color.png)

## Features

The quiz is split into three sections which each come in and out of view for the user using the css class of hide. There are seven questions that need to be answered before.

### Existing Features

- _Logo_

I found that Cinzel Decorative was the perfect font to reflect the image of fate and destiny.

![Logo](/documentation/readme-images/logo.png)

- _Landing Page_

The background for the site is a starry night as the concept of stars aligning to form a path for your life is a commonly associated image.  There is a large purple box overlaying this image. This will contain all the elements throughout the quiz until the prediction page. There is a brief description of how to play and a start button for when the user is ready to begin.

![Landing Page](/documentation/readme-images/landing-page.png)

- _Question Area_

The question area appears when the quiz is started. It contains one instruction followed by four possible answers.

![Question Area](/documentation/readme-images/question-area.png)

- _Answer Buttons_

The buttons are spaced evenly on the page and are in boxes that zoom when hovered over and change color when chosen. The other answers then do not zoom when hovered over as they are disabled.

![Chosen Answer](/documentation/readme-images/answer-chosen.png)

- _Start Button, Next Question and Predict my Future buttons_

These buttons apply the same styles. They change from purple to black when hovered over. They are prominent on the page and centered so the user is clear on how to continue.

![Start Button](/documentation/readme-images/start-btn.png)

- _Question Number_

At the bottom of the box there is a line that keeps track of what number question the user is on.

![Incrementing question](/documentation/readme-images/incrementing-question.png)

- _Prediction Page_

The prediction is given inside a crystal ball which is another symbol for seeing the future.

![Prediction Page](/documentation/readme-images/prediction-page.png)

- _ReTake Quiz Button_

A button was added to the prediction page to allow the user to retake the test if they are not happy with their results or just want to see what other outcomes would bring. It was made black and put down in the right hand corner so as not to take away from the prediction itself.

![Retake button](/documentation/readme-images/retake-quiz.png)

- _Age of Death_

Math random was used to give a fun age of death- over 50 but less than 100 as part of the prediction.

![Age of death prediction](/documentation/readme-images/age-of-death.png)

## Testing

I ran a series of tests through out the process myself. As I finished each function I would test that function on its own and then how it interacted with the other functions and if they continued to act the same way. One of the most thorough parts of the testing was to ensure that the results were taking the correct value each time and adding it to the prediction score each time. I used the console.log during all the tests to ensure that the score remained incrementing correctly.

Another part of the quiz that needed to be tested thoroughly was the prediction itself. I spent time going through each answer option to ensure that a prediction appeared for all cases.

The responsiveness of the project was tested at length. Each section was checked in each view to ensure that the surface image wasn't distorted. Each scenario had to be looked at separately. The start page, each question and each prediction all were observed in their different forms through Google Dev Tools.

The part of the project that took the most extensive testing was the buttons. Each section had a number of buttons that needed to function correctly for the project to be successful. I methodically ensured each button in each scenario continued to act as it was supposed to.

I then sent the quiz to a selection of people to see if they could spot any bugs that I had not found.

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator](https://validator.w3.org/nu/?doc=https%3A%2F%2Femm-aah.github.io%2Fpredict-my-future%2F)
  - No errors were brought to light when passing through Jigsaw [(Jigsaw) validator](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Femm-aah.github.io%2Fpredict-my-future%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en)
  - Lighthouse results ![lighthouse](/documentation/readme-images/lighthouse-results.png)
  - No errors were found when put through JShint.
  - The JShint metrics are: [JShint](/documentation/readme-images/JShint.png)

### Debugging

There were plenty of bugs around the answer buttons. At the beginning each question was already answered by the time you went to the next question as the answer wasn't cleared. A function was then put in place to make sure that the previous answer was cleared before the next question. The CSS styles also followed over from one question to the next for a chosen answer and this also was solved by clearing the 'answered' class name from the previous question. The hardest problem was then that if you changed your answer it would appear like you chose two answers as both would remain black and zoomed.The solution I went for was to disable the other answers when you chose one. This suited this project as it was meant to be based on gut instinct and deliberating and changing answers is not in the spirit of it. However there is a refresh button under the next question button which will bring the user back to the beginning if the user is not happy with how they answered.

There were also bugs when I implemented the redo quiz button on the final page. As the last button to bring you to the prediction page was not the next question function this meant a lot of the page still needed to be set up and brought back to the beginning but that is all working properly now.

## Deployment

The website has been deployed using Github. I went to settings, pages and then chose the main branch to deploy. I did this early on in my project once I had the initial functions and structure so if there were any bugs I could catch them early.

## Credits

### Content

- [https://www.codingninjas.com/studio/library/how-to-create-a-javascript-quiz-code] - I used the concept of adding and removing a class to show different parts of the website from this.
- [https://www.altcademy.com/blog/how-to-make-a-quiz-in-javascript] - I used the basic structure for a quiz game - questions and answers that change the inner text from this.
- [https://codepen.io/paigeellenstark/pen/MVGYWO] - I was inspired of the design of this quiz and implemented something similar in my own.
- [https://github.com/Code-Institute-Solutions/love-maths-2.0-sourcecode/tree/master/03-displaying-the-question-and-answer/04-updating-the-scores] - I also kept on eye on love maths from code institute as a template for how JS should be structured. Especially for the DOM content loaded and Event listeners.
- The icon for refresh was taken from [Font Awesome](https://fontawesome.com/)

### Media

- [https://pexels.com]The photo for the quiz was from pexels.com
- [https://unsplash.com/]The photo for the prediction was from upsplash.com

- _Acknowledgements_
My mentor, Medale Oluwafemi, pointed me in the right direction for resources and had great advice.