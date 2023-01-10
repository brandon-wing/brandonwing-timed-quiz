//Question pool array for the quiz

var questions = [
    {
        q: "Which of the following data types refers to a value that is either True or False?",
        a: ["Boolean", "Strings", "Arrays", "Numbers"],
        correct: "Boolean"
    },
    {
        q: "What is the correct syntax of linking a JavaScript file to an HTML page?",
        a: ["<java src> </java>", "<js src> </js>", "<script src> </script>", "<javascript src> </javascript>"],
        correct: "<script src> </script>"
    },
    {
        q: "Which javascript method is used to merge two or more arrays?",
        a: ["merge", "combine", "return", "concat"],
        correct: "concat"
    },
    {
        q: "The operations of a function are stored within: ",
        a: ["( )", "[ ]", "{ }", "< >"],
        correct: "{ }"
    },
    {
        q: "What does CSS stand for?",
        a: ["Computer Styling System", "Cascading Style Sheets", "Creating Style Scripts", "None of the above"],
        correct: "Cascading Style Sheets"
    },
    {
        q: "?",
        a: ["css", "class", "src", "style"],
        correct: ""
    }
]

//Next, time for DOM elements

const questionEl = document.querySelector("#question-text")

const timerEl = document.querySelector("#timer")

const optionsEl = document.querySelector("#option-text")


const questionNumber=0;
let timeleft = 60;

function showQuestion() {
    let currentQuestion = questions[questionNumber];
  const promptEl = document.getElementById("question-text")
    questionEl.textContent = currentQuestion.q;

}

showQuestion();
