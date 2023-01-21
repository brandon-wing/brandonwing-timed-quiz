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
const beginEl = document.getElementById("playbtn")
const hiscoresEl = document.getElementById("hiscores")
const questionEl = document.getElementById("question")
const optionOneEl = document.getElementById("option-one")
const optionTwoEl = document.getElementById("option-two")
const optionThreeEl = document.getElementById("option-three")
const optionFourEl = document.getElementById("option-four")
const timerEl = document.getElementById("timer")
