let currentQ = 0;
let score = 0;

function loadQuestion() {
    const q = quizData[currentQ];
    document.getElementById('question').innerText = q.q;
    const options = document.getElementById('options');
    options.innerHTML = '';
    
    let answers = [...q.a].sort(() => Math.random() - 0.5);
    
    answers.forEach(opt => {
        const btn = document.createElement('button');
        btn.className = 'option-btn';
        btn.innerText = opt;
        btn.onclick = () => {
            if (opt === q.correct) score++;
            currentQ++;
            if (currentQ < quizData.length) loadQuestion();
            else showResult();
        };
        options.appendChild(btn);
    });
    document.getElementById('progress-bar').style.width = (currentQ / quizData.length * 100) + '%';
}

function showResult() {
    let rank = score <= 1 ? "Новичок" : "Эксперт";
    document.querySelector('.test-container').innerHTML = `<h1>Ранг: ${rank}</h1><p>Счет: ${score}</p>`;
}

loadQuestion();
