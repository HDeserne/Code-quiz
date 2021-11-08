var highScoresCounter = counterTimer;
var startTime = 20;
var counterTimer;
var timer = document.getElementById("timer");


var btnStart = document.getElementsByClassName("btn-start")[0];
var h1 = document.getElementById("h1");
var instructions = document.getElementById("instructions");

document.getElementById("timer").innerHTML = startTime;

function init() {
  highScores();
}


btnStart.addEventListener("click", function () {
  h1.innerText = "Question:";
  instructions.remove();
  counterTimer = setInterval(myTimer, 1000);

  btnStart.remove();
});


var questionsData = [
  {
    textOfQuestion: "What city are the Nets located in?",
    options: ["Oklahoma", "Miami", "Brookly", "Dallas"],
    correctIndex: 2,
  },
  {
    textOfQuestion: "Who is the current league MVP as of 2021?",
    options: [
      "Giannis Antetokounmpo", "James Harden", "Kevin Durant", "Luka Doncic",
    ],
    correctIndex: 0,
  },
  {
    textOfQuestion: "Who hit the game winning shot in the 2016 Finals?",
    options: ["Steph Curry", "JR Smith", "Klay Thompson", "Kyrie Irving"],
    correctIndex: 3,
  },
  {
    textOfQuestion: "Who is the GOAT?",
    options: ["Michael Jordan", "LeBron James", "Kobe Bryant", "Magic Johnson"],
    correctIndex: 1,
  },
];



const questionsDisplayed = document.querySelector("#questions");
const optionsDisplayed = document.querySelector("#options");
let answerIndex = 0;


btnStart.addEventListener("click", function () {
  h1.innerText = "Question:";
  instructions.remove();
  btnStart.remove();

  renderQuestion();
});

optionsDisplayed.addEventListener("click", function (e) {
  const element = e.target;
  const question = questionsData[answerIndex];

  if (!element.matches("button")) return;

  if (element.textContent === question.options[question.correctIndex]) {
    alert("Correct!");
    startTime = startTime + 5;
  } else {
    alert("Incorrect!");
    startTime = startTime - 5;
  }
  answerIndex++;
  if (answerIndex == questionsData.length) {
    endGame();
  }
  renderQuestion();
});

function renderQuestion() {
  const question = questionsData[answerIndex];
  questionsDisplayed.textContent = question.textOfQuestion;
  optionsDisplayed.innerHTML = "";
  for (let i = 0; i < question.options.length; i++) {
    const option = question.options[i];

    const button = document.createElement("button");
    
    button.textContent = option;
    
    optionsDisplayed.append(button);
  }
}

function myTimer() {
  startTime = startTime - 1;
  document.getElementById("timer").innerHTML = startTime;
  if (startTime === 0) {
    alert(`Out of Time!`);
    myStopFunction();
  }
}

function myStopFunction() {
  clearInterval(counterTimer);
}