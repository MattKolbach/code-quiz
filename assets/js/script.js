let startQuizButton = document.querySelector("#startQuizButton");
const initialTime = 20;
let countDown = initialTime;
let countDownEl = document.querySelector("#countDownEl");
let questionAsked = document.querySelector("#questionAsked");
let answer1 = document.querySelector("#answer1");
let answer2 = document.querySelector("#answer2");
let answer3 = document.querySelector("#answer3");
let answer4 = document.querySelector("#answer4");
let questionIncriment = 0;
let finalScoreEl = document.querySelector("#finalScoreEl")
let intervalId;

//quiz questions array
const questionArray = [
  {
    question: "What are variables used for in JavaScript Programs?",
    answers: [
      "Storing numbers, dates, or other values.",
      "Varying randonly.",
      "Causing high-school algebra flashbacks",
      "none of the above",
    ],
    correctAnswer: 0,
  },

  {
    question: "Arrays in JavaScript can be used to store __________.",
    answers: [
      "numbers and strings",
      "other arrays",
      "booleans",
      "all of the above",
    ],
    correctAnswer: 3,
  },

  {
    question: "Which of the following is not a valid JavaScript variable name?",
    answers: [
      "2names",
      "_first_and_last_names",
      "FirstAndLast",
      "None of the above",
    ],
    correctAnswer: 0,
  },

  {
    question: "String values must be enclosed within _______ when being assigned to variables.",
    answers: [
      "commas",
      "quotes",
      "curly brackets",
      "parenthesis",
    ],
    correctAnswer: 2,
  },

  {
    question:
      "________ tag is an extension to HTML that can enclose any number of JavaScript statements.",
    answers: ["<SCRIPT>", "<BODY>", "<HEAD>", "<TITLE>"],
    correctAnswer: 0,
  },

];

//start button handler start
var startQuizButtonHandler = function (event) {
  createQuestionEl();
  countDownEl.textContent = initialTime;
  intervalId = setInterval(function () {
    countDown -= 1;
    countDownEl.textContent = countDown;
    if (countDown <= 0) {
      clearInterval(intervalId);
      countDown = initialTime;
    }
  }, 1000);
};
//start button handler END

//question creation START
let createQuestionEl = function () {
  questionAsked.textContent = questionArray[questionIncriment].question;

  answer1.textContent = questionArray[questionIncriment].answers[0];
  answer1.setAttribute("data-correctAnswerIndexNum", 0);

  answer2.textContent = questionArray[questionIncriment].answers[1];
  answer2.setAttribute("data-correctAnswerIndexNum", 1);

  answer3.textContent = questionArray[questionIncriment].answers[2];
  answer3.setAttribute("data-correctAnswerIndexNum", 2);

  answer4.textContent = questionArray[questionIncriment].answers[3];
  answer4.setAttribute("data-correctAnswerIndexNum", 3);
};
//question creation END

//check question answer START
let checkAnswer = function (event) {
  let answerClicked = parseInt(
    event.target.getAttribute("data-correctAnswerIndexNum")
  );

  //verify right answer (1button)
  if (answerClicked === questionArray[questionIncriment].correctAnswer) {
    console.log("correct");
  } else {
    console.log("incorrect");
  }

  if (questionIncriment >= questionArray.length -1){
    clearInterval(intervalId);
    finalScoreEl.textContent = (countDown + ".");
console.log(countDown);

  } else {
    questionIncriment++;
    createQuestionEl();
  }


  //move to next question
  //splash CORRECT under question div
  //verify wrong answer
  //move to next question
  //remove 10 seconds from timer
  //splash WRONG under question div
};

//event listeners
startQuizButton.addEventListener("click", startQuizButtonHandler);
answer1.addEventListener("click", checkAnswer);
answer2.addEventListener("click", checkAnswer);
answer3.addEventListener("click", checkAnswer);
answer4.addEventListener("click", checkAnswer);
