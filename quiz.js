// # main Execution

let Score = 0; 
const questionObj = {
  category: "Food & Drink",
  id: "qa-1",
  correctAnswer: "Three",
  options: ["Two", "Three ", "Four", "Five"],
  question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

CreateQuestion(questionObj);
nextButton();

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
    OptionsBtn.textContent = options[i];
    OptionsBtn.addEventListener("click", (OptionsBtn) => {
      if (OptionsBtn.innerHTML === quizAnswer) {
        Score+=1;
      }else{
        Score-=1;
      }
    });
    quizOptionElement.append(OptionsBtn);
  }
}

function nextButton() {
  // scoreElement = document.querySelector("#score");
  nxtBtn = document.createElement("Button");
  nxtBtn.id = "btn";
  //scoreElement.append(nxtBtn);
}
