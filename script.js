let questions = [
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berner-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3
  },
  {
    question: "Wie heißt der Erfinder von JavaScript?",
    answer_1: "Douglas Crockford",
    answer_2: "Brendan Eich",
    answer_3: "John Resig",
    answer_4: "Steve Jobs",
    right_answer: 2
  },
  {
    question: "Wie lautete der Mädchenname von JavaScript kurz nach ihrer Geburt?",
    answer_1: "Micha",
    answer_2: "Mocha",
    answer_3: "Mecha",
    answer_4: "Macha",
    right_answer: 2
  },
  {
    question: "Was ist false?",
    answer_1: "Number.MIN_VALUE * -2 === -Infinity",
    answer_2: "Number.MAX_VALUE * 2 === Infinity",
    answer_3: "1/0 === Infinity",
    answer_4: "Number.POSITIVE_INFINITY === Infinity",
    right_answer: 1
  },
  {
    question: "Welche der folgenden Sprachen hatte keinen Einfluss auf JS?",
    answer_1: "Self",
    answer_2: "Scheme",
    answer_3: "Java",
    answer_4: "Prolog",
    right_answer: 4
  },
  {
    question: "Wer passt hier nicht in die Reihe?",
    answer_1: "ActionScript",
    answer_2: "JavaScript",
    answer_3: "CoffeeScript",
    answer_4: "AppleScript",
    right_answer: 4
  },
  {
    question: "Was ist true?",
    answer_1: "0 > null",
    answer_2: "0 >= null",
    answer_3: "0 >= undefined",
    answer_4: "0 == undefined",
    right_answer: 2
  },
  {
    question: "Welche der folgenden Zuweisungen ist syntaktisch nicht korrekt?",
    answer_1: "var a = &_0;",
    answer_2: "var a = !!0;",
    answer_3: "var a = π;",
    answer_4: "var a = _$;",
    right_answer: 1
  }
];

let rigthQuestions = 0;
let currentQuestion = 0;

let audio_success = new Audio('audio/success.mp3');
let audio_wrong = new Audio('audio/wrong.mp3');
let audio_restart = new Audio('audio/restart.mp3');

function init() {
  document.getElementById("all_questions").innerHTML = questions.length;
  showQuestion();
}

function showQuestion() {
  if (currentQuestion >= questions.length) {
    // Show End Screen
    document.getElementById("endScreen").style = "";
    document.getElementById("questionBody").style = "display: none";

    document.getElementById("allquestions").innerHTML = questions.length;
    document.getElementById("right-questions").innerHTML = rigthQuestions;

    document.getElementById('header-image').src = 'img/trophy.png';

  } else { // Show question

    let percent = (currentQuestion+1) / questions.length; // um Prozent zu zeigen

    percent = percent * 100; //

    percent = percent.toFixed(1)

    document.getElementById('progress-bar').innerHTML = `${percent} %`;
    document.getElementById('progress-bar').style = `width: ${percent}%;`;

    console.log('Forschritt', percent)

    let question = questions[currentQuestion];

    document.getElementById("question-number").innerHTML = currentQuestion + 1;

    document.getElementById("questiontext").innerHTML = question["question"];
    document.getElementById("answer_1").innerHTML = question["answer_1"];
    document.getElementById("answer_2").innerHTML = question["answer_2"];
    document.getElementById("answer_3").innerHTML = question["answer_3"];
    document.getElementById("answer_4").innerHTML = question["answer_4"];
  }
}

function answer(selection) {
  let question = questions[currentQuestion];

  console.log("Selected answer is ", selection);
  let selectionQuestionNumber = selection.slice(-1);
  console.log("selectionQuestionNumber is", selectionQuestionNumber);
  console.log("Current question ist ", question["right_answer"]);

  let idRightAnswer = `answer_${question["right_answer"]}`;

  if (selectionQuestionNumber == question["right_answer"]) {
    document.getElementById(selection).parentNode.classList.add("bg-success");
    audio_success.play();
    rigthQuestions++; // wenn man richtig auf der Frage beantwortet dann rightQuestions ++;
  } else {
    document.getElementById(selection).parentNode.classList.add("bg-danger");
    document.getElementById(idRightAnswer).parentNode.classList.add("bg-success");
    audio_wrong.play();
  }

  document.getElementById("next-button").disabled = false;
}

function nextQuestion() {
  currentQuestion++; // z.B. Fragen von 0 auf 1 erhöht

  document.getElementById("next-button").disabled = true; //macht den button für die nächste frage wieder disabled
  resetAnswerButton();
  showQuestion();
}

function resetAnswerButton() {
  document.getElementById("answer_1").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_1").parentNode.classList.remove("bg-success");
  document.getElementById("answer_2").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_2").parentNode.classList.remove("bg-success");
  document.getElementById("answer_3").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_3").parentNode.classList.remove("bg-success");
  document.getElementById("answer_4").parentNode.classList.remove("bg-danger");
  document.getElementById("answer_4").parentNode.classList.remove("bg-success");
}


function restartGame(){
  document.getElementById('header-image').src = 'img/pencil.jpg';
  document.getElementById("questionBody").style =  ''; // question body wieder anzeigen
  document.getElementById("endScreen").style = "display: none"; // endscreen ausblenden
  audio_restart.play();
  rigthQuestions = 0;
  currentQuestion = 0;
  init(); // um Spiel erneut zu laden
}