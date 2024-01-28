/** Quiz Questions */    
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

/** Score Area */

let currentQuestion = 0
let predictionScore = 0


document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("question").innerText = questions[currentQuestion].question;
    document.getElementById("a").innerText = questions[currentQuestion].answers[0].option;
    document.getElementById("b").innerText = questions[currentQuestion].answers[1].option;
    document.getElementById("c").innerText = questions[currentQuestion].answers[2].option;
    document.getElementById("d").innerText = questions[currentQuestion].answers[3].option;
       
    let nextBtn = document.getElementById("next");
    let predictBtn = document.getElementById("predict");
    let startBtn = document.getElementById("start");

    startBtn.addEventListener("click", start)

    let radioBtns = document.getElementsByClassName("answer-label");
    for (let radioBtn of radioBtns) {
        radioBtn.addEventListener("click", chooseAnswer);
    }

    nextBtn.addEventListener("click", function(){
        let answer = document.getElementsByClassName("answered");
        if (answer.length > 0) {
        submitAnswer();
        nextQuestion();
        incrementQuestion();
        removeAnswered();
        } else {
            alert `Please choose an answer`;
        }
    });

    predictBtn.addEventListener("click", function() {
        predict();
        deathAge();
    });

});

function start() {
    document.getElementById("start-page").classList.add("hide")
    document.getElementById("question-area").classList.remove("hide")
}

function chooseAnswer() {
    this.classList.add("answered");
    let options= document.getElementsByClassName("answer-option");
    for (let option of options) {
        option.classList.add("disable")
    }
   
}

function submitAnswer() {
    let choices = document.getElementsByName("answer-option");
    for (let i = 0; i < choices.length; i++){
        if (choices[i].checked) {
            choiceValue = parseInt(questions[currentQuestion].answers[i].value);
            predictionScore = predictionScore + choiceValue;
        }  
    }
}
   
    

function nextQuestion() {
    currentQuestion = currentQuestion + 1;
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


function removeAnswered() {
    let answers = document.getElementsByClassName("answered");
    for (let answer of answers) {
    answer.classList.remove("answered");
    }    
}

function predict() {
    document.getElementById("predict-page").classList.remove('hide');
    document.getElementById("page").classList.add('hide')
    let future = document.getElementById("your-future");
    if (predictionScore >= 24) {
        future.textContent = "You will live in your hometown and have a family.";
    } else if (predictionScore >= 19) {
        future.textContent = "You will live in the countryside with a number of pets.";
    } else if (predictionScore >= 16) {
        future.textContent = "You will find great success in your career.";
    } else if (predictionScore >= 12) {
        future.textContent = "You will travel the world filling your life with adventure.";
    } else if (predictionScore >=8) {
        future.textContent = "You will live by the beach and be happily married";
    } else {
        future.textContent = "You will live in a city abroad and start your own company.";
    }
}
function incrementQuestion() {
    questionNumber = currentQuestion + 1;
    document.getElementById("q-number").innerHTML = `${questionNumber}`;
}

function deathAge() {
    let age = Math.floor(Math.random() * 50) + 50;
    document.getElementById("age").innerText = `${age}`;
}

