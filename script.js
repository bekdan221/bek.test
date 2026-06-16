const questions = [
  {
    text: "Задание 1: Ты пишешь своего первого Telegram-бота на Python и Django. Вдруг код выдал ошибку...",
    options: [
      { text: "Спокойно прочитать текст ошибки и исправить баг", isCorrect: true },
      { text: "Удалить PyCharm и пойти играть", isCorrect: false, loseText: "Игра окончена!" },
      { text: "Переписать код наугад", isCorrect: false, loseText: "Игра окончена!" },
      { text: "Злиться на компьютер", isCorrect: false, loseText: "Игра окончена!" }
    ]
  },
  {
    text: "Задание 2: На часах вечер, тренировка – нужно сделать сет отжиманий...",
    options: [
      { text: "Сделать все подходы", isCorrect: true },
      { text: "Поесть чипсов и лечь на диван", isCorrect: false, loseText: "Игра окончена!" },
      { text: "Перенести на завтра", isCorrect: false, loseText: "Игра окончена!" },
      { text: "Сделать один отжим", isCorrect: false, loseText: "Игра окончена!" }
    ]
  }
];

let currentStep = 0;

function startGame() {
  currentStep = 0;
  document.getElementById("actionBtn").style.display = "none";
  showStep();
}

function showStep() {
  const stepData = questions[currentStep];
  document.getElementById("stepCounter").textContent = "Вопрос " + (currentStep + 1);
  document.getElementById("questText").textContent = stepData.text;
  document.getElementById("progressBar").style.width = (currentStep / questions.length) * 100 + "%";

  const container = document.getElementById("optionsContainer");
  container.innerHTML = "";

  stepData.options.forEach(function(option) {
    const btn = document.createElement("button");
    btn.className = "btn btn-option";
    btn.textContent = option.text;
    btn.onclick = function() { handleAnswer(option); };
    container.appendChild(btn);
  });
}

function handleAnswer(option) {
  if (option.isCorrect) {
    currentStep++;
    if (currentStep >= questions.length) {
      showVictory();
    } else {
      showStep();
    }
  } else {
    showGameOver(option.loseText);
  }
}

function showGameOver(msg) {
  document.getElementById("optionsContainer").innerHTML = "";
  document.getElementById("questText").textContent = msg;
  const btn = document.getElementById("actionBtn");
  btn.textContent = "Попробовать заново";
  btn.style.display = "inline-block";
  btn.onclick = startGame;
}

function showVictory() {
  document.getElementById("optionsContainer").innerHTML = "";
  document.getElementById("questText").textContent = "ПОБЕДА! Ты прошел игру!";
  const btn = document.getElementById("actionBtn");
  btn.textContent = "Играть еще раз";
  btn.style.display = "inline-block";
  btn.onclick = startGame;
}
