//Question pool array for the quiz

const questions = [
    {
        q: "Which of the following data types refers to a value that is either True or False?",
        a: "Boolean",
        b: "Strings",
        c: "Arrays",
        d: "Numbers",
        correct: "Boolean"
    },
    {
        q: "What is the correct syntax of linking a JavaScript file to an HTML page?",
        a: "<java src> </java>",
        b: "<js src> </js>",
        c: "<script src> </script>",
        d: "<javascript src> </javascript>",
        correct: "<script src> </script>"
    },
    {
        q: "Which javascript method is used to merge two or more arrays?",
        a: "merge",
        b: "combine",
        c: "return",
        d: "concat",
        correct: "concat"
    },
    {
        q: "The operations of a function are stored within: ",
        a: "( )",
        b: "[ ]",
        c: "{ }",
        d: "< >",
        correct: "{ }"
    },
    {
        q: "What does CSS stand for?",
        a: "Computer Styling System",
        b: "Cascading Style Sheets",
        c: "Creating Style Scripts",
        d: "None of the above",
        correct: "Cascading Style Sheets"
    }
]

//Next, time for DOM elements
const homepageEl = document.querySelector("#homepage")
const quizpageEl = document.querySelector("#quiz")
const beginEl = document.querySelector("#playbtn")
const hiscoresEl = document.querySelector("#hiscores")
const questionEl = document.querySelector("#question")
const optionOneEl = document.querySelector("#A")
const optionTwoEl = document.querySelector("#B")
const optionThreeEl = document.querySelector("#C")
const optionFourEl = document.querySelector("#D")
const timerEl = document.querySelector("#timer")

//start button should remove display of homepage

beginEl.addEventListener("click", startQuiz)

function startQuiz() {
homepageEl.style.display = "none";
quizpageEl.style.display = "block";
showQuestion();
}

let questionNumber = 0

function showQuestion(){
let show = questions[questionNumber]
questionEl.textContent = show.q;
optionOneEl.textContent = show.a;
optionTwoEl.textContent = show.b;
optionThreeEl.textContent = show.c;
optionFourEl.textContent = show.d;
}
