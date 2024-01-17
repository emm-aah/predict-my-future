
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {

        button.addEventListener("click", function() {
            let chosenAnswer = this.getAttribute("id")
            if (this.getAttribute("data-type") === "answer") {
                let emptyBox= document.getElementById("reveal-answer")
                .innerText = `You picked ${chosenAnswer}!`;
            } else if (this.getAttribute("data-type") === "submit"){
                submitAnswer();
                nextQuestion();
            } else {
                alert(`You need to chose an answer`);
            }
        });
    }
});

function submitAnswer(chosenAnswer){
    if (chosenAnswer === "blue") {
        incrementPredictionOne();
    } else if (chosenAnswer === "orange") {
        console.log("orange");
    } else if (chosenAnswer === "turquoise") {
        console.log("turquoise");
    } else {
        console.log("pink");
    }
}
function nextQuestion() {
    document.getElementById("question-area").innerHTML = `<h3 id="question">Pick a food</h3>
            <div class="color-answers">
            <button class="btn answer-button pasta" id="pasta" data-type="answer" >Pasta</button>
            <button class="btn answer-button sushi" id="sushi" data-type="answer">Sushi</button>
            <button class="btn answer-button roast" id="roast" data-type="answer">Roast</button>
            <button class="btn answer-button curry" id="curry" data-type="answer">Curry</button>
            </div> ;`
}
/** 
function incrementPredictionOne() {
    let oldScore = parseInt(document.getElementById("predict-one").innerText);
    document.getElementById("predict-one").innerText = ++oldScore;
}

function incrementPredictionTwo()
function incrementPredictionThree()
function incrementPredictionFour() **/