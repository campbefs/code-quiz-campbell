// Coding questions 
var questions = [
  { q: 'How do you convert to string?', a: '1. text.toString()', b: '2. string(text)', c: '3. str(text)', d: '4. cast(text as string)', answer: 1},
  { q: 'What is a for loop?', a: '1. an infinite loop', b: '2. a loop with set iterations', c: '3. reloading the page', d: '4. loop back once', answer: 2},
  { q: 'Which is not a data type?', a: '1. array', b: '2. string', c: '3. super int', d: '4. boolean', answer: 3},
  { q: 'How do you see the value of a variable?', a: '1. print(var)', b: '2. var.valueOf()', c: '3. console.log(var)', d: '4. value(var)', answer: 2},
  { q: 'Which element is not in a link?', a: '1. a', b: '2. href', c: '3. for', d: '4. alt', answer: 3},
];

var questionList = document.querySelector(".full-answer-list");
var questionText = document.querySelector("#question");

questionCounter = 0;
score = 0;


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
  //console.log(questionCounter);
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


// filling the first round of questions
createQuestEl(questions[0]);

// // assign variables
var answerClick1 = document.querySelector("#answer1");
var answerClick2 = document.querySelector("#answer2");
var answerClick3 = document.querySelector("#answer3");
var answerClick4 = document.querySelector("#answer4");

// Track where clicks occur
var itemButtonHandler = function(event) {
  console.log(event.target);
  console.log(event.target.getAttribute('data-question-id'));
  console.log(questions[questionCounter].answer);
  answer = event.target.getAttribute('data-question-id');
  if (answer.toString() === questions[questionCounter].answer.toString()) {
    console.log('correct');
    score++;
  }
};

answerClick1.addEventListener("click", itemButtonHandler);
answerClick2.addEventListener("click", itemButtonHandler);
answerClick3.addEventListener("click", itemButtonHandler);
answerClick4.addEventListener("click", itemButtonHandler);



// Reload the Question
answerClick1.addEventListener('click', reloadQuestion);
answerClick2.addEventListener("click", reloadQuestion);
answerClick3.addEventListener("click", reloadQuestion);
answerClick4.addEventListener("click", reloadQuestion);





