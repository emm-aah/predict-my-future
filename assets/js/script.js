document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {

        button.addEventListener("click", function () {
            let chosenAnswer = this.getId;
            if (this.getAttribute("data-type") === "answer") {
                chooseAnswer(chosenAnswer);
            } else {
               alert (`Unknown`)
            }
        });
    }
});

function chooseAnswer(chosenAnswer){
     document.getElementById(reveal-answer).innerText = `You have picked ${chosenAnswer}`
    }

function submitAnswer(chosenAnswer){
     if (chosenAnswer === "blue") {
        incremenentPredicitonOne();
     }
}
function nextQuestion()
function incrementPredictionOne() {
    let oldScore = parseInt(document.getElementById("predict-one").innerText);
    document.getElementById("predict-one").innerText = ++oldScore;
}
function incrementPredictionTwo()
function incrementPredictionThree()
function incrementPredictionFour()