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
    question: "Wer?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berner-Lee",
    answer_4: "Justin Bieber",
    right_answer: 2
  },
  {
    question: "erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berner-Lee",
    answer_4: "Justin Bieber",
    right_answer: 1
  },
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berner-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3
  },
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berner-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3
  },
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berner-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3
  },
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berner-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3
  },
  {
    question: "Wer hat HTML erfunden?",
    answer_1: "Robbie Williams",
    answer_2: "Lady Gaga",
    answer_3: "Tim Berner-Lee",
    answer_4: "Justin Bieber",
    right_answer: 3
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