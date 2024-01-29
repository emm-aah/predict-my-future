# Predict My Future

Predict my future is a quiz game based on gut instinct. The user will follow their first instincts through a series of questions to find their destiny. Everyday users get daily horoscopes, palms, tarot cards etc read and this quiz is aimed at the user that would enjoy predictions based on a certain number of randomly selected answers to show them their fate. The quiz is meant to be enjoyable for the user and will offer different results if different answers are given on a second play.

These types of readings often give the user insight into themselves through an understanding of what future they would wish to have seen at the end and whether they are happy with their outcome. For example, a user might return the prediction “You will travel the world” and upon reading this realize that this is not what they wish for their life but in fact would have been happier to receive a future about having children.

## Strategy

The startegy was to make a user friendly quiz game which users could easily interact with based on feeling rather than knowledge and create a result from this.

## Scope

Some of the features that were looked at to implement this strategy:

- Quiz questions/ instructions.
- A quiz section that will change for the next question.
- Next question button that becomes a predict my future button at the end.
- Reference pictures for question answers
- Prediciton are with a crystal ball to replicate seeing your future.
- Buttons to retake the test and to start again from the middle of the test.

## Structure

There are three distinct sections for this site. The first section will be the landing page with the instructions of how to play as well as a start button for when the user is ready. The second section will be the question area. This will hold the instruction and answer options. The first two will be linked by the same background and heading. The center of the box will be the only part to change when the game begins and continue to change for each question. The third section will change the view completely to a crystal ball with the prediciton inside of it.

## Skeleton

The features that got included where:

- Seven quiz questions with choice of four answers each
- Start button to begin game
- Predict my future button at end of last question
- Next Question button to lead to the following question
- Start over button
- incrementing question at bottom of page

## Surface 
![Sky picture for quiz background](/assets/documentation/readme-images/sky-readme.jpg)
![Crystal Ball for predicition background](/assets/documentation/readme-images/crystal-readme.jpg)
## Features

The quiz is split into three sections which each come in and out of view for the user using the css class of hide. There are seven questions that need to be answered before.

### Existing Features

- _Logo_

I found that Cinzel Decorative was the perfect font to reflect the image of fate and destiny. 
![Logo](/assets/documentation/readme-images/logo.png)

- _Landing Page_

The background for the site is a starry night as the concept of stars aligning to form a path for your life is a commonly associated image.  There is a large purple box overlaying this image. This will contain all the elements throughout the quiz until the prediction page. There is a brief description of how to play and a start button for when the user is ready to begin.

- _Question Area_

The question area appears when the quiz is started. It contains one instruction followed by four possible answers. 
![Question Area](/assets/documentation/readme-images/question-area.png)

- _Answer Buttons_

The buttons are spaced evenly on the page and are in boxes that zoom when hovered over and change color when chosen. The other answers then do not zoom when hovered over as they are disabled.
![Chosen Answer](/assets/documentation/readme-images/answer-chosen.png)

- _Start Button, Next Question and Predict my Future buttons_

These buttons apply the same styles. They change from purple to black when hovered over. They are prominent on the page and centered so the user is clear on how to continue.

![Start Button](/assets/documentation/readme-images/start-btn.png)

- _Question Number_

At the bottom of the box there is a line that keeps track of what number question the user is on. 
![Incrementing question](/assets/documentation/readme-images/incrementing-question.png)

- _Prediction Page_

## Testing

### Validator Testing

- HTML
  - No errors were returned when passing through the official [W3C validator]
  - No errors were found when passing through the official [(Jigsaw) validator]

### Unfixed Bugs

You will need to mention unfixed bugs and why they were not fixed. This section should include shortcomings of the frameworks or technologies used. Although time can be a big variable to consider, paucity of time and difficulty understanding implementation is not a valid reason to leave bugs unfixed.

## Deployment

This section should describe the process you went through to deploy the project to a hosting platform (e.g. GitHub)

- The site was deployed to GitHub pages. The steps to deploy are as follows:
  - In the GitHub repository, navigate to the Settings tab
  - From the source section drop-down menu, select the Master Branch
  - Once the master branch has been selected, the page will be automatically refreshed with a detailed ribbon display to indicate the successful deployment.

The live link can be found here - <https://code-institute-org.github.io/love-running-2.0/index.html>

## Credits

### Content

- https://www.codingninjas.com/studio/library/how-to-create-a-javascript-quiz-code\
- <https://www.altcademy.com/blog/how-to-make-a-quiz-in-javascript/>

- The icons in the footer were taken from [Font Awesome](https://fontawesome.com/)

### Media

- The photo for the quiz was from pexels.com
- The photo for the prediction was from upsplash.com



