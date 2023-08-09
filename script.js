// Obtendo elementos do DOM
const questionContainer = document.querySelector('.question-container');
const questionElement = document.querySelector('.question');
const options = document.querySelectorAll('.option');
const nextButton = document.getElementById('next-btn');

// Array de perguntas e respostas
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

let currentQuestion = 0;  // Índice da pergunta atual

// Função para carregar a pergunta atual
function loadQuestion() {
  const question = quizData[currentQuestion];
  questionElement.textContent = question.question;

  options.forEach((option, index) => {
    option.textContent = question.options[index];
    option.classList.remove('correct-option');  // Remover classe de resposta correta
    option.addEventListener('click', checkAnswer);
  });

  nextButton.style.display = 'none';  // Esconder botão Próxima Pergunta
}

// Função para verificar a resposta do usuário
function checkAnswer(e) {
  const selectedOption = e.target;
  const correctAnswer = quizData[currentQuestion].answer;

  if (selectedOption.textContent === correctAnswer) {
    selectedOption.style.backgroundColor = '#27AE60';  // Resposta correta (verde)
  } else {
    selectedOption.style.backgroundColor = '#E74C3C';  // Resposta incorreta (vermelho)
    options.forEach(option => {
      if (option.textContent === correctAnswer) {
        option.classList.add('correct-option');  // Adicionar classe de resposta correta
      }
    });
  }

  options.forEach(option => {
    option.removeEventListener('click', checkAnswer);  // Impedir seleção adicional
  });

  nextButton.style.display = 'block';  // Exibir botão Próxima Pergunta
}

// Função para avançar para a próxima pergunta
function nextQuestion() {
  currentQuestion++;  // Avançar para a próxima pergunta

  if (currentQuestion < quizData.length) {
    loadQuestion();  // Carregar a próxima pergunta
    nextButton.style.display = 'none';  // Esconder botão Próxima Pergunta
  } else {
    questionContainer.innerHTML = '<h2>Quiz Concluído!</h2>';  // Exibir mensagem de conclusão
  }
}

// Adicionar evento de clique ao botão Próxima Pergunta
nextButton.addEventListener('click', nextQuestion);

loadQuestion();  // Carregar a primeira pergunta
