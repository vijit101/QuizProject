// # main Execution

// let score = 0;
// const questionObj = {
//   category: "Food & Drink",
//   id: "qa-1",
//   correctAnswer: "Three",
//   options: ["Two", "Three", "Four", "Five"],
//   question: "How many pieces of bun are in a Mcdonald's Big Mac?",
// };

const quesJSON = [
  {
    correctAnswer: "Three ",
    options: ["Two", "Three ", "Four", "Five"],
    question: "How many pieces of bun are in a Mcdonald's Big Mac?",
  },
  {
    correctAnswer: "L. Frank Baum",
    options: [
      "Suzanne Collins",
      "James Fenimore Cooper",
      "L. Frank Baum",
      "Donna Leon",
    ],
    question: "Which author wrote 'The Wonderful Wizard of Oz'?",
  },
  {
    correctAnswer: "Atlanta United",
    options: [
      "Atlanta United",
      "Atlanta Impact",
      "Atlanta Bulls",
      "Atlanta Stars",
    ],
    question: "Which of these is a soccer team based in Atlanta?",
  },
  {
    correctAnswer: "A Nanny",
    options: ["A Sow", "A Lioness", "A Hen", "A Nanny"],
    question: "A female goat is known as what?",
  },
  {
    correctAnswer: "P. L. Travers",
    options: [
      "J. R. R. Tolkien",
      "P. L. Travers",
      "Lewis Carroll",
      "Enid Blyton",
    ],
    question: "Which author wrote 'Mary Poppins'?",
  },
];
//var dataFromJson = JSON.parse();
// console.log(dataFromJson);
let questionTracker = 0;
let score = 0;
let scoreElement = document.querySelector("#score");
let quizQuestionElement = document.querySelector("#question");
let quizOptionElement = document.querySelector("#options");
CreateQuestion(quesJSON,questionTracker);
ShuffleOptions();

//# main Execution

function CreateQuestion(quesObj) {
  let ques = quesObj[questionTracker].question;
  let options = quesObj[questionTracker].options;
  let quizAnswer = quesObj[questionTracker].correctAnswer;
  
  
  quizQuestionElement.innerHTML = ques;

  
  // OptionsBtn = document.createElement("div");
  // OptionsBtn.className = "OptnDiv";
  for (let i = 0; i < options.length; i++) {
    OptionsBtn = document.createElement("button");
    OptionsBtn.id = "options";
    OptionsBtn.className = "optionbuttons";
    OptionsBtn.textContent = options[i].toString();
    quizOptionElement.appendChild(OptionsBtn);
    
    OptionsBtn.addEventListener("click", () => {
        questionTracker++;
      if (options[i] === quizAnswer) {
        score += 1;
      } else {
        score -= 0.25;
      }
      scoreElement.innerHTML = `score : ${score}/${quesObj.length}`;
      quizOptionElement.innerHTML = "";
      if(questionTracker<quesObj.length){
        LoadNextQuestion(questionTracker); 
      }
         
      if(questionTracker === quesObj.length){
        quizQuestionElement.innerHTML = "Quiz Completed";
        quizOptionElement.innerHTML = "";
        return;
      }
      
    });
  }
  nextButton();
}

function LoadNextQuestion(questionTracker) {
  CreateQuestion(quesJSON,questionTracker);
}

function nextButton() {
  // scoreElement = document.querySelector("#score");
  quizOptionElement = document.querySelector("#options");
  nxtBtn = document.createElement("Button");
  nxtBtn.id = "btn";
  nxtBtn.innerHTML = "Next Question";
  quizOptionElement.appendChild(nxtBtn);
  nxtBtn.addEventListener("click",()=>{
    questionTracker++;
    quizOptionElement.innerHTML = "";
    scoreElement.innerHTML = `score : ${score}/${quesJSON.length}`;
    if(questionTracker < quesJSON.length ){
        LoadNextQuestion(questionTracker);
    }
    else{
        quizQuestionElement.innerHTML = "Quiz Completed"; 
    }
    })
  //scoreElement.append(nxtBtn);
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function ShuffleOptions() {
  quizOptionElement = document.querySelector("#options");
  Childbtn = quizOptionElement.querySelectorAll(".optionbuttons");
  if (Childbtn.length > 0) {
    let randomBtnIndx = getRandomInt(Childbtn.length);
    MoveUpFx(Childbtn[randomBtnIndx]);
    // randomBtnIndx = getRandomInt(Childbtn.length);
    // MoveDownFx(Childbtn[randomBtnIndx]);
  }
}

function MoveUpFx(btnReference) {
  const prevElement = btnReference.previousElementSibling;
  btnReference.insertAdjacentElement("afterend", prevElement);
}

function MoveDownFx(btnReference) {
  btnReference.insertAdjacentElement("beforebegin", btnReference.nextSibling);
}
