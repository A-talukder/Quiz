const quizData = [
    {
      question: "What does HTML stand for?",
      options: ["Hyper Text Markup Language", "Home Tool Markup Language", "Hyperlinks and Text Markup Language", "None of the above"],
      correct: "Hyper Text Markup Language"
    },
    {
      question: "Which language runs in a web browser?",
      options: ["Java", "C", "Python", "JavaScript"],
      correct: "JavaScript"
    },
    {
      question: "What does CSS stand for?",
      options: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets", "Colorful Style Sheets"],
      correct: "Cascading Style Sheets"
    }
  ];
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadNextQuestion() {
    const quiz = document.getElementById("quiz");
    const questionEl = document.getElementById("question");
    const feedbackEl = document.getElementById("feedback");
    const buttons = document.querySelectorAll(".answer-btn");
  
    if (currentQuestion >= quizData.length) {
      quiz.innerHTML = `<h2>You scored ${score}/${quizData.length}</h2>`;
      return;
    }
  
    const questionData = quizData[currentQuestion];
    questionEl.innerText = questionData.question;
  
    buttons.forEach((btn, index) => {
      btn.innerText = questionData.options[index];
      btn.classList.remove("correct", "incorrect");
      btn.disabled = false;
    });
  
    feedbackEl.innerText = "";
  }
  
  function selectAnswer(button) {
    const selected = button.innerText;
    const correctAnswer = quizData[currentQuestion].correct;
    const feedback = document.getElementById("feedback");
  
    if (selected === correctAnswer) {
      button.classList.add("correct");
      feedback.innerText = "Correct!";
      score++;
    } else {
      button.classList.add("incorrect");
      feedback.innerText = `Wrong! Correct answer: ${correctAnswer}`;
    }
  
    // Disable all buttons after selection
    document.querySelectorAll(".answer-btn").forEach(btn => btn.disabled = true);
  
    currentQuestion++;
  }
  
  window.onload = loadNextQuestion;
  