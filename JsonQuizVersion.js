// # main Execution

// let Score = 0;
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
var dataFromJson = JSON.parse(Questions);
CreateQuestion(quesJSON);

nextButton();
ShuffleOptions();

//# main Execution

function CreateQuestion(quesObj) {


  let ques = quesObj.question;
  let options = quesObj.options;
  let quizAnswer = quesObj.correctAnswer;

  quizQuestionElement = document.querySelector("#question");
  quizQuestionElement.innerHTML = ques;

  quizOptionElement = document.querySelector("#options");
  // OptionsBtn = document.createElement("div");
  // OptionsBtn.className = "OptnDiv";
  for (let i = 0; i < options.length; i++) {
    OptionsBtn = document.createElement("button");
    OptionsBtn.id = "options";
    OptionsBtn.className = "optionbuttons";
    OptionsBtn.textContent = options[i].toString();
    quizOptionElement.appendChild(OptionsBtn);
    OptionsBtn.addEventListener("click", () => {
      let scoreElement = document.querySelector("#score");
      if (options[i] === quizAnswer) {
        Score += 1;
      } else {
        Score -= 0.25;
      }
      scoreElement.innerHTML = `Score : ${Score}/5`;
      quizQuestionElement.innerHTML = "Quiz Completed";
      quizOptionElement.innerHTML = "";
    });
  }
}

function nextButton() {
  // scoreElement = document.querySelector("#score");
  nxtBtn = document.createElement("Button");
  nxtBtn.id = "btn";
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
    randomBtnIndx = getRandomInt(Childbtn.length);
    MoveDownFx(Childbtn[randomBtnIndx]);
  }
}

function MoveUpFx(btnReference) {
  const prevElement = btnReference.previousElementSibling;
  btnReference.insertAdjacentElement("afterend", prevElement);
}

function MoveDownFx(btnReference) {
  btnReference.insertAdjacentElement("beforebegin", btnReference.nextSibling);
}
