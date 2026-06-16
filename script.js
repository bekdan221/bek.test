const questions = [
  {
    text: "Задание 1: Ты пишешь своего первого Telegram-бота на Python и Django. Вдруг код выдал ошибку...",
    options: [
      { text: "Спокойно прочитать текст ошибки, найти строку и исправить баг", isCorrect: true },
      { text: "Удалить PyCharm, закрыть ноутбук и пойти играть на телефоне", isCorrect: false, loseText: "Ты сдался... Игра окончена!" },
      { text: "Просто переписать весь код заново наугад, вдруг заработает", isCorrect: false, loseText: "Код запутался ещё сильнее. Игра окончена!" },
      { text: "Начать бить по клавиатуре и злиться на компьютер", isCorrect: false, loseText: "Клавиатура сломана, бот не написан. Игра окончена!" }
    ]
  },
  {
    text: "Задание 2: На часах вечер, по плану у тебя тренировка – нужно сделать мощный сет отжиманий...",
    options: [
      { text: "Пересилить лень, включить бодрую музыку и сделать все подходы", isCorrect: true },
      { text: "Поесть чипсов, лечь на диван и посмотреть мемы", isCorrect: false, loseText: "Масса не набрана, плечи не стали шире. Игра окончена!" },
      { text: "Перенести тренировку на завтра (и так каждый день)", isCorrect: false, loseText: "Лень победила. Игра окончена!" },
      { text: "Сделать только один отжим и сказать: 'Ну, на сегодня хватит'", isCorrect: false, loseText: "Слабый результат. Игра окончена!" }
    ]
  },
  {
    text: "Задание 3: Друг просит помочь ему выбрать мощную видеокарту для сборки игрового ПК...",
    options: [
      { text: "Современную мощную видеокарту серии Nvidia RTX", isCorrect: true },
      { text: "Старую офисную встроенную графику 2015 года", isCorrect: false, loseText: "ПК не потянул игры. Игра окончена!" },
      { text: "Скачать побольше оперативной памяти из интернета", isCorrect: false, loseText: "Память из интернета оказалась вирусом. Игра окончена!" },
      { text: "Сказать, что для игр видеокарта вообще не нужна", isCorrect: false, loseText: "Друг остался без игр и обиделся. Игра окончена!" }
    ]
  },
  {
    text: "Задание 4: Ты пришел на важную консультацию в Международный колледж IT и бизнеса. Перед тобой тест...",
    options: [
      { text: "Внимательно вчитываться в каждый вопрос и думать логически", isCorrect: true },
      { text: "Попытаться незаметно достать телефон и списать всё из поиска", isCorrect: false, loseText: "Тебя спалили и выгнали с теста. Игра окончена!" },
      { text: "Тыкать ответы наугад со скоростью света, не читая текст", isCorrect: false, loseText: "Тест завален на 0 баллов. Игра окончена!" },
      { text: "Попросить соседа подсказать тебе все ответы", isCorrect: false, loseText: "Сосед сам ничего не знал и подсказал неправильно. Игра окончена!" }
    ]
  },
  {
    text: "Задание 5: Ты накопил денег и выбираешь себе крутую тачку для души...",
    options: [
      { text: "Заряженную BMW M3 или Mercedes E63", isCorrect: true },
      { text: "Старый разваливающийся самокат", isCorrect: false, loseText: "Далеко на нём не уедешь. Игра окончена!" },
      { text: "Купить жигули без тормозов", isCorrect: false, loseText: "Машина сломалась на первом же перекрёстке. Игра окончена!" },
      { text: "Взять в кредит электросамокат", isCorrect: false, loseText: "Сел аккумулятор посреди дороги. Игра окончена!" }
    ]
  }
];

let currentStep = 0;

const startBtn = document.getElementById("actionBtn");
const questText = document.getElementById("questText");
const optionsContainer = document.getElementById("optionsContainer");
const stepCounter = document.getElementById("stepCounter");
const progressBar = document.getElementById("progressBar");

function startGame() {
  currentStep = 0;
  startBtn.style.display = "none";
  showStep();
}

function showStep() {
  const stepData = questions[currentStep];
  stepCounter.textContent = Вопрос ${currentStep + 1} из ${questions.length};
  questText.textContent = stepData.text;

  const progressPercent = ((currentStep) / questions.length) * 100;
  progressBar.style.width = ${progressPercent}%;

  optionsContainer.innerHTML = "";

  stepData.options.forEach(option => {
    const btn = document.
[16.06.2026 23:11] .: createElement("button");
    btn.className = "btn btn-option";
    btn.textContent = option.text;
    btn.onclick = () => handleAnswer(option);
    optionsContainer.appendChild(btn);
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

function showGameOver(loseMessage) {
  optionsContainer.innerHTML = "";
  progressBar.style.width = "0%";
  stepCounter.textContent = "ВЫ ПРОИГРАЛИ";
  questText.textContent = loseMessage;
  startBtn.textContent = "Попробовать заново";
  startBtn.style.display = "inline-block";
}

function showVictory() {
  optionsContainer.innerHTML = "";
  progressBar.style.width = "100%";
  stepCounter.textContent = "ПОБЕДА!";
  questText.innerHTML = "🎉 Поздравляем! Ты успешно преодолел все испытания, защитил свой финальный IT-проект и стал настоящим победителем! <br><br><strong>Игра пройдена на 100%!</strong>";
  startBtn.textContent = "Играть еще раз";
  startBtn.style.display = "inline-block";
}

if (startBtn) {
  startBtn.onclick = startGame;
}
