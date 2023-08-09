const questionContainer = document.querySelector('.question-container');
const questionElement = document.querySelector('.question');
const options = document.querySelectorAll('.option');
const nextButton = document.getElementById('next-btn');

const quizData = [
  {
    question: 'Quem é o deus do trovão na mitologia nórdica?',
    options: ['Odin', 'Thor', 'Loki', 'Freyr'],
    answer: 'Thor'
  },
  {
    question: 'Qual animal de estimação de Thor é conhecido por puxar seu carrinho?',
    options: ['Cavalo', 'Dragão', 'Lobo', 'Bode'],
    answer: 'Bode'
  },
  {
    question: 'Qual deusa é associada à vida após a morte no Valhalla?',
    options: ['Freya', 'Hel', 'Frigg', 'Sif'],
    answer: 'Hel'
  },
  {
    question: 'Qual é a árvore que conecta os nove mundos na mitologia nórdica?',
    options: ['Carvalho', 'Cedro', 'Yggdrasil', 'Salgueiro'],
    answer: 'Yggdrasil'
  },
  {
    question: 'Qual é o nome da espada lendária que foi usada por Odin?',
    options: ['Mjolnir', 'Gungnir', 'Excalibur', 'Gram'],
    answer: 'Gungnir'
  }
];

let currentQuestion = 0;
let userAnswer = null;

function loadQuestion() {
  const question = quizData[currentQuestion];
  questionElement.textContent = question.question;

  options.forEach((option, index) => {
    option.textContent = question.options[index];
    option.classList.remove('selected', 'correct');
    option.addEventListener('click', selectAnswer);
  });

  nextButton.style.display = 'none';
}

function selectAnswer(e) {
  options.forEach(option => {
    option.classList.remove('selected');
  });

  e.target.classList.add('selected');
  userAnswer = e.target.textContent;
  nextButton.style.display = 'block';
}

function showCorrectAnswer() {
  options.forEach(option => {
    if (option.textContent === quizData[currentQuestion].answer) {
      option.classList.add('correct');
    }
  });
}

function nextQuestion() {
  if (userAnswer === quizData[currentQuestion].answer) {
    options.forEach(option => {
      if (option.textContent === userAnswer) {
        option.classList.add('correct');
      }
    });
  } else {
    showCorrectAnswer();
  }

  options.forEach(option => {
    option.removeEventListener('click', selectAnswer);
  });

  nextButton.style.display = 'none';

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    loadQuestion();
  } else {
    questionContainer.innerHTML = '<h2>Quiz Concluído!</h2>';
  }
}

nextButton.addEventListener('click', nextQuestion);

loadQuestion();
