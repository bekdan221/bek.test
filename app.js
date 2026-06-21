function showTab(tab) {
    document.getElementById("signup").classList.remove("active");
    document.getElementById("signin").classList.remove("active");

    document.querySelectorAll(".tab").forEach(t => t.classList.remove("active"));

    if (tab === "signup") {
        document.getElementById("signup").classList.add("active");
        document.querySelectorAll(".tab")[0].classList.add("active");
    } else {
        document.getElementById("signin").classList.add("active");
        document.querySelectorAll(".tab")[1].classList.add("active");
    }
}


// регистрация
function register() {
    let user = document.getElementById("su_user").value;
    let pass = document.getElementById("su_pass").value;
    let msg = document.getElementById("msg");

    if (!/^\d{8}$/.test(pass)) {
        msg.innerText = "Пароль должен быть 8 цифр!";
        return;
    }

    localStorage.setItem("user", user);
    localStorage.setItem("pass", pass);

    msg.innerText = "Аккаунт создан!";

    // СРАЗУ ПЕРЕХОД В МЕНЮ
    setTimeout(() => {
        openMenu();
    }, 800);
}


// вход
function login() {
    let user = document.getElementById("si_user").value;
    let pass = document.getElementById("si_pass").value;

    let savedUser = localStorage.getItem("user");
    let savedPass = localStorage.getItem("pass");

    let msg = document.getElementById("msg");

    if (user !== savedUser) {
        msg.innerText = "Никнейм не верный!";
        return;
    }

    if (pass !== savedPass) {
        msg.innerText = "Пароль не верный!";
        return;
    }

    openMenu();
}


// открыть меню
function openMenu() {
    document.querySelector(".container").classList.add("hidden");
    document.getElementById("menu").classList.remove("hidden");
}
