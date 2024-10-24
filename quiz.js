// # main Execution

const questionObj = {
  category: "Food & Drink",
  id: "qa-1",
  correctAnswer: "Three",
  options: ["Two", "Three ", "Four", "Five"],
  question: "How many pieces of bun are in a Mcdonald's Big Mac?",
};

CreateQuestion(questionObj);

//# main Execution

function CreateQuestion(quesObj) {
  let ques = quesObj.question;
  let options = quesObj.options;
  let quizAnswer = quesObj.correctAnswer;

  quizQuestionElement = document.querySelector("#question");
  quizQuestionElement.innerHTML = ques;

}

function submitAnswer() {}
