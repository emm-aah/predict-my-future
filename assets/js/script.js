let question1 = {
        question: "Pick a Color",
        answers: [
        {option: "Blue", value: "4"},
        {option: "Green", value: "2"},
        {option: "Orange", value: "1"},
        {option: "Pink", value: "3"}
        ]
};
     
let questions = [ 
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
        question: "Pick a First Date",
        answers: [
            { option: "Cinema", value: "3" },
            { option: "Drinks", value: "4" },
            { option: "Hike", value: "1" },
            { option: "Bowling", value: "2" }
        ]
    },
]



document.addEventListener("DOMContentLoaded", function () {

    document.getElementById("question").innerText = question1.question;
    document.getElementById("a").innerText = question1.answers[0].option;
    document.getElementById("b").innerText = question1.answers[1].option;
    document.getElementById("c").innerText = question1.answers[2].option;
    document.getElementById("d").innerText = question1.answers[3].option;

    let nextBtn = document.getElementById("next");
    nextBtn.addEventListener("click", nextQuestion)


});

function nextQuestion() {
 let question = document.getElementById("question");
 let optionA = document.getElementById("a");
 let optionB = document.getElementById("b");
 let optionC = document.getElementById("c");
 let optionD = document.getElementById("d");
 let currentQuestion = 0
    for(let i = 0; i<3; i++) {
        question.innerText = questions[i].question;
        optionA.innerText = questions[i].answers[0].option;
        optionB.innerText = questions[i].answers[1].option;
        optionC.innerText = questions[i].answers[2].option;
        optionD.innerText = questions[i].answers[3].option;
    }

}