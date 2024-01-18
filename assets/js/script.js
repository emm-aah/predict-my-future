

document.addEventListener("DOMContentLoaded", function () {
    let answerButtons = document.getElementsByClassName("answer-button");
    let submitButtons = document.getElementsByClassName("submit-btn");

    for (let _answerButton of answerButtons) {
        let chosenAnswer = this.getAttribute("id");
        alert(`You chose ${chosenAnswer}`);
    }


    for (let submitButton of submitButtons)
        if (chosenAnswer === undefined) {
            alert = "Please chose an answer!";
        } else {
            submitButton.addEventListener("click", function () {
                submitAnswer(chosenAnswer);
            });
        }




});



function submitAnswer(chosenAnswer) {
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


function incrementPredictionOne() {
    let oldScore = parseInt(document.getElementById("predict-one").innerText);
    document.getElementById("predict-one").innerText = ++oldScore;
}
