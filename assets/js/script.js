// Coding questions 
var questions = [
  { q: 'How do you convert to string?', a: '1. text.toString()', b: '2. string(text)', c: '3. str(text)', d: '4. cast(text as string)', answer: 1},
  { q: 'What is a for loop?', a: '1. an infinite loop', b: '2. a loop with set iterations', c: '3. reloading the page', d: '4. loop back once', answer: 2},
  { q: 'Which is not a data type?', a: '1. array', b: '2. string', c: '3. super int', d: '4. boolean', answer: 3},
  { q: 'How do you return the value of a variable?', a: '1. print(var)', b: '2. var.valueOf()', c: '3. console.log(var)', d: '4. value(var)', answer: 2},
  { q: 'How do you turn a string to an integer?', a: '1. int(var)', b: '2. var.intOf()', c: '3.var.Int', d: '4. parseInt(var)', answer: 4},
  { q: 'How do you sort an array?', a: '1. arr.sort()', b: '2. sort(arr)', c: '3. build a custom sort function', d: '4. orderBy(arr)', answer: 1},
  { q: 'What is the proper syntax for a "for" loop?', a: '1. for (i<5;i===0;i++) {}', b: '2. for i in arr.length {}', c: '3. for (i=0;i<5;i++ {}', d: '4. None of the above', answer: 3},
  { q: 'JavaScript is a ____-side programming language?', a: '1. Server', b: '2. Client', c: '3. None', d: '4. Both', answer: 4},
  { q: 'How do you send an alert to a user?', a: '1. alertBox("hey now!")', b: '2. alert("hey now!)', c: '3. msgAlert("Hey now!")', d: '4. prompt("Hey now!")', answer: 2},
  { q: 'Which element is not in a link?', a: '1. a', b: '2. href', c: '3. for', d: '4. alt', answer: 3},
  { q: 'Which element is not in a link?', a: '1. a', b: '2. href', c: '3. for', d: '4. alt', answer: 3}, // dupe to prevent throwing error

];

var questionList = document.querySelector(".full-answer-list");
var questionText = document.querySelector("#question");
var statusDiv = document.querySelector(".status");
var $timerSec = document.querySelector("#timer-sec");

let questionCounter = 0;
let score = 0;

// Function to countdown the time
var timerFunc = () => {
  var timerLog = () => {
    $timerSec.textContent--;

    // Ending Loop
    if (parseInt($timerSec.textContent) === 0 || questionCounter === questions.length-1) {
      document.location.replace("./initials.html");

      // log score in Local Storage
      localStorage.setItem("currentHighScore", [score, $timerSec.textContent]);
      clearInterval(startTimer);
    }


  }
  const startTimer = setInterval(timerLog, 1000);
  startTimer;
}

var createQuestEl = function(question) {
  // Question
  var questEl = document.createElement("h1");
  questEl.className = "question-text";
  questEl.textContent = question.q;
  questEl.setAttribute("data-question-id", 0);
  questionText.appendChild(questEl);

  // Answers
  var listQuestEl1 = document.createElement("button");
  listQuestEl1.className = "list-answer";
  listQuestEl1.id = 'answer1';
  listQuestEl1.setAttribute("data-question-id", 1);
  listQuestEl1.textContent = question.a;
  //questionIdCounter1++;

  var listQuestEl2 = document.createElement("button");
  listQuestEl2.className = "list-answer";
  listQuestEl2.id = 'answer2';
  listQuestEl2.setAttribute("data-question-id", 2);
  listQuestEl2.textContent = question.b;
  // questionIdCounter2++;

  var listQuestEl3 = document.createElement("button");
  listQuestEl3.className = "list-answer";
  listQuestEl3.id = 'answer3';
  listQuestEl3.setAttribute("data-question-id", 3);
  listQuestEl3.textContent = question.c;
  // questionIdCounter3++;

  var listQuestEl4 = document.createElement("button");
  listQuestEl4.className = "list-answer";
  listQuestEl4.id = 'answer4';
  listQuestEl4.setAttribute("data-question-id", 4);
  listQuestEl4.textContent = question.d;
  // questionIdCounter4++;

  questionList.appendChild(listQuestEl1);
  questionList.appendChild(listQuestEl2);
  questionList.appendChild(listQuestEl3);
  questionList.appendChild(listQuestEl4);

}



var reloadQuestion = function() {
  questionCounter++;

  var questionSelected = document.querySelector(".question-text[data-question-id='" + 0 + "']");
  var taskSelected1 = document.querySelector(".list-answer[data-question-id='" + 1 + "']");
  // questionIdCounter1++;
  var taskSelected2 = document.querySelector(".list-answer[data-question-id='" + 2 + "']");
  // questionIdCounter2++;
  var taskSelected3 = document.querySelector(".list-answer[data-question-id='" + 3 + "']");
  // questionIdCounter3++;
  var taskSelected4 = document.querySelector(".list-answer[data-question-id='" + 4 + "']");
  // questionIdCounter4++;

  // Reload the question
  questionSelected.textContent = questions[questionCounter].q;
  taskSelected1.textContent = questions[questionCounter].a;
  taskSelected2.textContent = questions[questionCounter].b;
  taskSelected3.textContent = questions[questionCounter].c;
  taskSelected4.textContent = questions[questionCounter].d;
}


// Track where clicks occur
var itemButtonHandler = function(event) {

  answer = event.target.getAttribute('data-question-id');
  if (answer.toString() === questions[questionCounter].answer.toString()) {
    score++;
    textAnswer = 'Correct!';
  } else {
    textAnswer = 'Wrong!';
  }

  // updating status
  var statusUpdate = document.querySelector("#status-update");
  statusUpdate.textContent = textAnswer;

  // Ending Loop
  if (parseInt($timerSec.textContent) === 0 || questionCounter === questions.length-1) {
    document.location.replace("./initials.html");

    // log score in Local Storage
    localStorage.setItem("currentHighScore", [score, $timerSec.textContent]);
  }

};


// Render Quiz Elements
let url = document.location.pathname.split("/")[document.location.pathname.split("/").length-1];
if (url === "quiz.html") {

  questionCounter = 0;

  // create the questions
  createQuestEl(questions[0]);

  // // assign variables
  var answerClick1 = document.querySelector("#answer1");
  var answerClick2 = document.querySelector("#answer2");
  var answerClick3 = document.querySelector("#answer3");
  var answerClick4 = document.querySelector("#answer4");

  // start timer
  timerFunc();

  // Checking which button was clicked & scoring
  answerClick1.addEventListener("click", itemButtonHandler);
  answerClick2.addEventListener("click", itemButtonHandler);
  answerClick3.addEventListener("click", itemButtonHandler);
  answerClick4.addEventListener("click", itemButtonHandler);

  // Reload the Question
  answerClick1.addEventListener('click', reloadQuestion);
  answerClick2.addEventListener("click", reloadQuestion);
  answerClick3.addEventListener("click", reloadQuestion);
  answerClick4.addEventListener("click", reloadQuestion);

}


// Enter Initials Page
if (url === "initials.html") {

  // do this last

  let $initialsForm = document.querySelector(".initials");
  let $finalScore = document.querySelector("#final-score");
  let $timerSec = document.querySelector("#timer-sec");

  ls = localStorage.getItem("currentHighScore");

  if (String(ls) !== "null") {
    finalScore = localStorage.getItem("currentHighScore").split(",")[0];
    timeLeft = localStorage.getItem("currentHighScore").split(",")[1];

    $finalScore.textContent = finalScore;
    $timerSec.textContent = timeLeft;


    const submitInitials = (event) => {
      event.preventDefault();
      
      // grab initial data
      $initialsBox = document.querySelector(".initials-box");
      let initials = document.querySelector("#initials-text").value.trim();

      // initials validation
      if (initials.length === 0 || initials.length > 3 || parseInt(initials)) {
        window.alert("Please enter initials (1-3 characters)!");
      } else {

        // qualitycheck to make sure initials exist & are a certain length and are string

        let newHighScores = [];

        // get array
        let lsHighScores = localStorage.getItem("campHighScores");
        
        if (String(lsHighScores) !== "null") {
          let lsHighScoresArr = lsHighScores.split(",");
          newHighScores = newHighScores.concat(lsHighScoresArr);
        }

        // append current score to array
        newHighScores.push(`${finalScore} / ${initials} - ${finalScore}`)
        
        // overwrite
        localStorage.setItem("campHighScores", newHighScores);

        localStorage.removeItem("currentHighScore");
        document.location.replace("./highscore.html");
      };
    };

    document.querySelector('.initials').addEventListener('submit', submitInitials);

  } else {
    document.location.replace("./index.html");
  }
}


if (url === "highscore.html") {
  const hsList = document.querySelector("#hs-list");

  // read local storage
  let hsString = localStorage.getItem("campHighScores");

  if (String(hsString) !== "null") {
    // create & sort array
    let hsArr = hsString.split(',');
    hsArr.sort();
    hsArr.reverse();

    // loop - add li to hs-list -- for each array item grab the second half
    for (i=0; i<hsArr.length; i++) {
      let listEl = document.createElement("li");
      listEl.textContent = hsArr[i].split('/')[1];
      hsList.appendChild(listEl);
    }
  };

  // clear scores function
  const clearScores = () => {
    localStorage.clear();
    location.reload();
  }

  // clear scores button
  document.querySelector("#clear-scores").addEventListener("click", clearScores);

}




