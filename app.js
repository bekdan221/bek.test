function startApp() {
    document.getElementById("titleScreen").style.display = "none";
    document.getElementById("game").style.display = "block";
}

function startQuiz(id) {
    document.getElementById("q").innerText = "Выбран тест: " + id;

    document.getElementById("answers").innerHTML = `
        <button>Вопрос 1 (пример)</button>
        <button>Вопрос 2 (пример)</button>
        <button>Вопрос 3 (пример)</button>
    `;

    document.getElementById("score").innerText = "";
}

function next() {
    document.getElementById("score").innerText = "Следующий вопрос...";
}
