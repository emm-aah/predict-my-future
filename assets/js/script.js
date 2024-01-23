    
let questions = [ 
    {
        question: "Pick a Color",
        answers: [
            { option: "Blue", value: "4" },
            { option: "Green", value: "2" },
            { option: "Orange", value: "1" },
            { option: "Pink", value: "3" }
        ]
    },
    {
        question: "Pick a Food",
        answers: [
            { option: "Sushi", value: "3" },
            { option: "Pizza", value: "4" },
            { option: "Tacos", value: "1" },
            { option: "Curry", value: "2" }
        ]
    },

         {
        question: "Pick a Media",
        answers: [
            { option: "Tv-show", value: "2" },
            { option: "Movie", value: "3" },
            { option: "Video game", value: "4" },
            { option: "Book", value: "1" }
        ]
    },
    {
        question: "Pick a Sport",
        answers: [
            { option: "Basketball", value: "1" },
            { option: "Golf", value: "2" },
            { option: "Tennis", value: "3" },
            { option: "Football", value: "4" }
        ]
    },
    {
        question: "Pick a genre of Music",
        answers: [
            { option: "Rock", value: "2" },
            { option: "Pop", value: "4" },
            { option: "Rap", value: "3" },
            { option: "Disco", value: "1" }
        ]
    },
    {
        question: "Pick a Tv Show",
        answers: [
            { option: "Game of Thrones", value: "3" },
            { option: "The Office", value: "2" },
            { option: "Friends", value: "4" },
            { option: "The Wire", value: "1" }
        ]
    },
    {
        question: "Pick a Fizzy Drink",
        answers: [
            { option: "Coke", value: "3" },
            { option: "Fanta", value: "1" },
            { option: "Sprite", value: "2" },
            { option: "Pepsi", value: "4" }
        ]
    },
]

let currentQuestion = 0
let predictionScore = 0


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("question").innerText = questions[currentQuestion].question;
    document.getElementById("a").innerText = questions[currentQuestion].answers[0].option;
    document.getElementById("b").innerText = questions[currentQuestion].answers[1].option;
    document.getElementById("c").innerText = questions[currentQuestion].answers[2].option;
    document.getElementById("d").innerText = questions[currentQuestion].answers[3].option;

    let nextBtn = document.getElementById("next");
    let submitBtn = document.getElementById("submit");
    let predictBtn = document.getElementById("predict")
    nextBtn.addEventListener("click", function(){
        submitAnswer();
        nextQuestion();
    });
    predictBtn.addEventListener("click", changePage);      



});

function submitAnswer() {
    let choices = document.getElementsByName("answer-option");
    let choiceValue;

    for (let i = 0; i < choices.length; i++){
        if (choices[i].checked) {
            choiceValue = parseInt(questions[currentQuestion].answers[i].value);
            predictionScore = predictionScore + choiceValue;
            currentQuestion = currentQuestion + 1
        } 
    }
    
}

function nextQuestion() {
    if (currentQuestion >= 6) {
        document.getElementById("next").classList.add('hide');
        document.getElementById("predict").classList.remove('hide');
    }
    document.getElementById("question").innerText = questions[currentQuestion].question;
    document.getElementById("a").innerText = questions[currentQuestion].answers[0].option;
    document.getElementById("b").innerText = questions[currentQuestion].answers[1].option;
    document.getElementById("c").innerText = questions[currentQuestion].answers[2].option;
    document.getElementById("d").innerText = questions[currentQuestion].answers[3].option;
}

function changePage() {
 document.getElementbyId("page").innerHTML =
  `<section class='prediction-background'>
        <div id = inside-ball>
            <p></p>
        </div>

    </section>`;


}