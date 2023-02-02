const quizData = [
    {
      question:
        "Which built-in method calls a function for each element in the array?",
      a: "while()",
      b: "loop()",
      c: "forEach()",
      d: "None of the above",
      correct: "c",
    },
    {
      question:
        "Which built-in method reverses the order of the elements of an array?",
      a: "changeOrder(order)",
      b: "reverse()",
      c: "sort(order)",
      d: "None of the above",
      correct: "b",
    },
    {
      question:
        "Which of the following is a valid type of function javascript supports?",
      a: "named function",
      b: "anonymous function",
      c: "Both the above",
      d: "None of the above",
      correct: "c",
    },
    {
      question: "What year was JavaScript launched?",
      a: "1996",
      b: "1995",
      c: "1994",
      d: "none of the above",
      correct: "b",
    },
  ];
  
  const quiz = document.getElementById("quiz");
  let answerEls = [];
  let questionEl = document.getElementById("question");
  const a_text = document.getElementById("a_text");
  const b_text = document.getElementById("b_text");
  const c_text = document.getElementById("c_text");
  const d_text = document.getElementById("d_text");
  const submitBtn = document.getElementById("submit");
  const quizContainer = document.querySelector(".quiz-container");
  let currentQuiz = 0;
  let score = 0;
  
  loadQuiz();
  
  function loadQuiz() {
    const questionText = quizData[currentQuiz].question;
    questionEl.textContent = questionText;
    answerEls = document.querySelectorAll(".answer");
    a_text.textContent = quizData[currentQuiz].a;
    b_text.textContent = quizData[currentQuiz].b;
    c_text.textContent = quizData[currentQuiz].c;
    d_text.textContent = quizData[currentQuiz].d;
  }
  
  function result() {
    quiz.innerHTML = `<h1 style="margin:0 auto">Score : ${score}</h1>`;
  }
  
  function getSelected() {
    let check = [];
    answerEls.forEach((element) => {
      if (element.checked) return (check = [element.id, element]);
    });
    if (check.length < 1) return alert("please select option");
    return check;
  }
  
  submitBtn.addEventListener("click", () => {
    if (currentQuiz > quizData.length - 2) {
      result();
    }
  
    const [selectedAns, selectedEle] = getSelected();
    const answer = quizData[currentQuiz].correct;
    if (selectedAns == answer) {
      score++;
      currentQuiz++;
      quizContainer.style.background = "green";
      setTimeout(() => {
        quizContainer.style.background = "#5DA3FA";
        selectedEle.checked = false;
        loadQuiz();
      }, 1000);
    } else {
      currentQuiz++;
      quizContainer.style.background = "red";
      setTimeout(() => {
        quizContainer.style.background = "#5DA3FA";
        selectedEle.checked = false;
  
        loadQuiz();
      }, 1000);
    }
  });