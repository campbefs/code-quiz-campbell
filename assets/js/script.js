// Coding questions 
var questions = [
  { q: 'Is the sky blue?', a: '1. comma', b: '2. string', c: '3. boolean', d: '4. array', answer: '2. string'},
  { q: 'Is the ocean green?', a: '1. yes', b: '2. no', c: '3. maybe', d: '4. so', answer: '3. maybe' },
  { q: 'Is the ground brown?', a: '1. why', b: '2. not', c: '3. this', d: '4. works', answer: '4. works' },
];

var questionList = document.querySelector(".full-answer-list");
var questionText = document.querySelector("#question");

questionCounter = 0;
questionIdCounter1 = 0;
questionIdCounter2 = 100;
questionIdCounter3 = 200;
questionIdCounter4 = 300;


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
  console.log(questionCounter);
  var questionSelected = document.querySelector(".question-text[data-question-id='" + 0 + "']");
  questionCounter++;
  var taskSelected1 = document.querySelector(".list-answer[data-question-id='" + 1 + "']");
  questionIdCounter1++;
  var taskSelected2 = document.querySelector(".list-answer[data-question-id='" + 2 + "']");
  questionIdCounter2++;
  var taskSelected3 = document.querySelector(".list-answer[data-question-id='" + 3 + "']");
  questionIdCounter3++;
  var taskSelected4 = document.querySelector(".list-answer[data-question-id='" + 4 + "']");
  questionIdCounter4++;

  questionSelected.remove();
  taskSelected1.remove();
  taskSelected2.remove();
  taskSelected3.remove();
  taskSelected4.remove();

  // Reload the new question
  createQuestEl(questions[questionCounter]);

  // I am stuck on how to re-assign the variables using query selector af they are reloaded.

}

// filling the first round of questions
createQuestEl(questions[0]);

// // assign variables
var answerClick1 = document.querySelector("#answer1");
var answerClick2 = document.querySelector("#answer2");
var answerClick3 = document.querySelector("#answer3");
var answerClick4 = document.querySelector("#answer4");


// Reload the Question
answerClick1.addEventListener('click', reloadQuestion);
answerClick2.addEventListener("click", reloadQuestion);
answerClick3.addEventListener("click", reloadQuestion);
answerClick4.addEventListener("click", reloadQuestion);





