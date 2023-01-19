"use strict";

let result;

// Цикл для прохожденияя регистрации
function Input(){
    let login_ok = false;
    let user_name = "";
    let password = "";

    user_name = prompt("Логин","");
    if (user_name == "Админ")
    {
        password = prompt("Пароль","");
        if (password == "Я главный"){
            alert("Здравствуйте!");
        }
        else if (password == null){
            alert("Отменено");
        }
        else{
            alert("Неверный пароль");
        }
    }
    else if (user_name == "" || user_name == null){
        alert("Отменено");
    }
    else{
        alert("Я вас не знаю");
    }

}



// Функционал кнопки лайка
var isCliked = false;
var counters = document.getElementById('count');
var button = document.getElementById('button');
var heart = document.getElementById('heart');

var like_count = Number(counters.textContent);

function draw_cursor (e) {
    let img = heart.cloneNode(true);
    img.style.position = "absolute";
    img.style.backgroundColor = "transparent"; 
    img.style.width = "2%";
    img.style.left = e.pageX + "px";
    img.style.top = e.pageY + "px";
    img.removeAttribute('id');
    img.classList.add('fordel');
    document.body.append(img);   
}
function remove_hearts(){
    var del = document.getElementsByClassName('fordel');

    while(del.length > 0 ){
        document.removeEventListener('mousemove', draw_cursor);
        del[0].remove();
    }
}

function btn_clik (){
    document.addEventListener('mousemove', draw_cursor);

    if (isCliked){
        isCliked = false;
        like_count -= 1;
        counters.textContent = like_count;

        heart.style.position = "static";
        heart.style.width = "25%";
        heart.style.backgroundColor = "transparent";
        remove_hearts();

        button.classList.remove('clicked');
    }
    else{  
        heart.style.backgroundColor = "#ff0404";
        button.classList.add('clicked');
        button.style.zIndex = "100"; 
        like_count += 1;
        counters.textContent = like_count;
        isCliked = true;
    }
}

function myFunction(x) {
    x.classList.toggle('fa-regular');
    x.classList.toggle('fa-heart');
    x.classList.toggle('fa-solid');
    x.classList.toggle('fa-heart');
}

let startButton = document.getElementById("start-button");
startButton.addEventListener("click", () => {
    var adder = new Adder(0);
    adder.addInput();
    adder.addInput();
    adder.showValue();
});

function Adder(startingValue) {
    this.value = startingValue;

    this.addInput = function() {
        this.value += +prompt('Мини калькулятор: Введите число', "0");
    };

    this.showValue = function() {
        alert(this.value);
    };
}

var captcha;
function generate() {
 
    // Clear old input
    document.getElementById("submit").value = "";
 
    // Access the element to store
    // the generated captcha
    captcha = document.getElementById("image");
    var uniquechar = "";
 
    const randomchar =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
 
    // Generate captcha for length of
    // 5 with random character
    for (let i = 1; i < 6; i++) {
        uniquechar += randomchar.charAt(
            Math.random() * randomchar.length)
    }
 
    // Store generated input
    captcha.innerHTML = uniquechar;
}
function checkEmpty() {
    if (!document.getElementById("submit").value)
{
    alert('Пустой ввод');
}
}
function printmsg() {
    var sh_h = document.getElementById('check-c');
    var firstCaptcha=document.getElementById('image');
    var firstCaptchainput=document.getElementById('user-input');
    var firstCaptchaBTN=document.getElementById('btn');
    var LoginBTN=document.getElementById('login-btn');


    const usr_input = document
        .getElementById("submit").value;
    if (!document.getElementById("submit").value)
    {
        alert('Пустой ввод');
    }
    // Check whether the input is equal
    // to generated captcha or not
while (true) {
    if (usr_input == captcha.innerHTML) {
        var s = document.getElementById("key")
            .innerHTML = "Верно!";
    LoginBTN.style.opacity = "1";
    LoginBTN.style.cursor = "pointer";
        return false;
    }
    else if(usr_input != captcha.innerHTML){
        var s = document.getElementById("key")
        .innerHTML = "Неверно, теперь считай!";
        sh_h.classList.add('show-block');
        firstCaptcha.classList.add('remove-block')
        firstCaptchainput.classList.add('remove-block')
        firstCaptchaBTN.classList.add('remove-block')
        return false;
    }
    else {
        var s = document.getElementById("key")
            .innerHTML = "Вы бот .-.";
        generate();
        return false;
    }
}
}

function truncate(str, n) {
    if (str.length > n) {
        return str.slice(0, n) + "...";
    }

    return str;
}

let sliceInput = document.getElementById("slice-input");
let storyText = document.getElementById("story");
let userInput = document.getElementById("reduc");
let goButton = document.getElementById("go-button");
let reduc = document.getElementById('reduc');


goButton.addEventListener("click", () => {
    let res = parseInt(userInput.value);
    storyText.textContent = truncate(storyText.textContent, res);
});

