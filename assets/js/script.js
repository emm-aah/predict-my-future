
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {

        button.addEventListener("click", function() {
            let chosenAnswer = this.getAttribute("id")
            if (this.getAttribute("data-type") === "answer") {
                document.getElementById("question").innerText = `You picked ${chosenAnswer}!`;
            } else {
                alert(`You need to chose an answer`);
            }
        });
    }
    
});
/** 
function chooseAnswer(chosenAnswer){
     document.getElementById(reveal-answer).innerText = `You have picked ${chosenAnswer}`
    }

function submitAnswer(chosenAnswer){
     if (chosenAnswer === "blue") {
        incremenentPredictionOne();
     }
}
function nextQuestion()
function incrementPredictionOne() {
    let oldScore = parseInt(document.getElementById("predict-one").innerText);
    document.getElementById("predict-one").innerText = ++oldScore;
}
function incrementPredictionTwo()
function incrementPredictionThree()
function incrementPredictionFour() **/