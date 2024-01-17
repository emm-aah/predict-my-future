
document.addEventListener("DOMContentLoaded", function () {
    let buttons = document.getElementsByTagName("button");

    for (let button of buttons) {

        button.addEventListener("click", function() {
            let chosenAnswer = this.getAttribute("id")
            if (this.getAttribute("data-type") === "answer") {
                document.getElementById("question").innerText = `You picked ${chosenAnswer}!`;
            } else if (this.getAttribute("data-type") === "submit"){
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
    
    let questionArea = document.getElementById("question-area");
    let firstChild = questionArea.children[0];
    let outerBox = document.getElementById('outer-box');

    if (firstChild.getAttribute("id") === "color-question") {
            questionArea.innerHTML = `
            <div id="food-question">
            <h3 id="question">Pick a food</h3>
            <div class="color-answers">
            <button class="btn answer-button pizza" id="pizza" data-type="answer" ></button>
            <button class="btn answer-button sushi" id="sushi" data-type="answer"></button>
            <button class="btn answer-button roast" id="roast" data-type="answer"></button>
            <button class="btn answer-button curry" id="curry" data-type="answer"></button>
            </div>
            </div>`;
    
    } else if (firstChild.getAttribute("id") === "food-question") {
        questionArea.innrHTML = `
            <div id="car-question">
            <h3 id="question">Pick a car</h3>
            <div class="color-answers">
            <button class="btn answer-button pa" id="pasta" data-type="answer" >Merc</button>
            <button class="btn answer-button sushi" id="sushi" data-type="answer">BMW</button>
            <button class="btn answer-button roast" id="roast" data-type="answer">fiat</button>
            <button class="btn answer-button curry" id="curry" data-type="answer">tesla</button>
            </div>
            </div> `;
    } else if (firstChild.getAttribute("id") === "car-question") {
        questionArea.innerHTML = `
            <div id="number-question">
            <h3 id="question">Pick a number</h3>
            <div class="color-answers">
            <button class="btn answer-button pasta" id="pasta" data-type="answer" >Merc</button>
            <button class="btn answer-button sushi" id="sushi" data-type="answer">BMW</button>
            <button class="btn answer-button roast" id="roast" data-type="answer">fiat</button>
            <button class="btn answer-button curry" id="curry" data-type="answer">tesla</button>
            </div>
            </div> `;
    } else if (firstChild.getAttribute("id") === "number-question") {
        outerBox.innerHTML = `
            <h1 class="heading">Predict My Future</h1>
            <div class="personal-info">
            <label>Name:</label><input type="text"></p>
            <label>Age:</label><input type="number"></p>
            </div>
            <div id="car-question">
            <h3 id="question">Pick a tv show</h3>
            <div class="color-answers">
            <button class="btn answer-button pizza" id="pizza" data-type="answer" >Merc</button>
            <button class="btn answer-button sushi" id="sushi" data-type="answer">BMW</button>
            <button class="btn answer-button roast" id="roast" data-type="answer">fiat</button>
            <button class="btn answer-button curry" id="curry" data-type="answer">tesla</button>
            </div>
            </div> 
            <div class="reveal-answer"></div>
            <div class="next-question"><button class="btn next-btn" data-type="predict">Predict My Future</button></div>`;    
    } else {
        questionArea.innerHTML = `predict`;
    }
};
/** 
function incrementPredictionOne() {
    let oldScore = parseInt(document.getElementById("predict-one").innerText);
    document.getElementById("predict-one").innerText = ++oldScore;
}
/** 
function incrementPredictionTwo()
function incrementPredictionThree()
function incrementPredictionFour() **/