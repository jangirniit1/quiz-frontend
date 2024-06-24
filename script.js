// document.addEventListener('DOMContentLoaded', () => {
//     const startButton = document.getElementById('start-button');
//     const quizContainer = document.getElementById('quiz-container');
//     const questionElement = document.getElementById('question');
//     const optionsContainer = document.getElementById('options');
//     const resultContainer = document.getElementById('result-container');
//     const scoreElement = document.getElementById('score');
  
//     let currentQuestionIndex = 0;
//     let userAnswers = [];
//     let questions = [];
  
//     startButton.addEventListener('click', () => {
//       startButton.style.display = 'none';
//       fetch('http://localhost:3020/api/getQuestions?limit=5&difficulty=medium')
//         .then(response => response.json())
//         .then(data => {
//           questions = data;
//           showQuestion();
//         });
//     });
  
//     function showQuestion() {
//       if (currentQuestionIndex < questions.length) {
//         const currentQuestion = questions[currentQuestionIndex];
//         questionElement.textContent = currentQuestion.question;
//         optionsContainer.innerHTML = '';
  
//         currentQuestion.options.forEach(option => {
//           const button = document.createElement('button');
//           button.textContent = option;
//           button.addEventListener('click', () => handleAnswer(currentQuestion._id, option));
//           optionsContainer.appendChild(button);
//         });
  
//         quizContainer.style.display = 'block';
//       } else {
//         submitQuiz();
//       }
//     }
  
//     function handleAnswer(questionId, answer) {
//       userAnswers.push({ question_id: questionId, user_answer: answer });
//       currentQuestionIndex++;
//       showQuestion();
//     }
  
//     function submitQuiz() {
//       fetch('/api/submitQuiz', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         body: JSON.stringify(userAnswers)
//       })
//         .then(response => response.json())
//         .then(data => {
//           quizContainer.style.display = 'none';
//           resultContainer.style.display = 'block';
//           scoreElement.textContent = data.score;
//         });
//     }
//   });
  