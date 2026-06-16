let currentCategory = 'it';
let currentQIndex = 0;

function setCategory(cat) {
    currentCategory = cat;
    currentQIndex = 0;
    loadQuestion();
}

function loadQuestion() {
    const q = quizData[currentCategory][currentQIndex];
    document.getElementById('question').innerText = q.q;
    const container = document.getElementById('answers');
    container.innerHTML = '';

    // Перемешивание
    let answers = q.a.map((text, idx) => ({text, originalIndex: idx}));
    answers.sort(() => Math.random() - 0.5);

    answers.forEach(ans => {
        const btn = document.createElement('div');
        btn.className = 'btn';
        btn.innerText = ans.text;
        btn.onclick = () => {
            if(ans.originalIndex === q.correct) {
                changeColor(0x00ff00); // Куб зеленый
                alert("Верно!");
            } else {
                changeColor(0xff0000); // Куб красный
                alert("Ошибка!");
            }
            currentQIndex++;
            if(currentQIndex < quizData[currentCategory].length) loadQuestion();
            else alert("Категория завершена!");
        };
        container.appendChild(btn);
    });
}
