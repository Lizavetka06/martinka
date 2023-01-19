// Практика 11

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }
//Массив с товарами
let mas = [];
let items = document.querySelectorAll('.elem');

for(i = 0; i < items.length; i++)
    mas.push(items[i]);

let replace = document.getElementById('replace');
let rem = document.getElementById('remove');

let buff;
let f = 0;
let a1 = 0;
let b = 0;
replace.onclick = function() {
    a1 = getRandomInt(5);
    b = getRandomInt(5);
    while (b == a1) {
        b = getRandomInt(5);
    }
    alert(mas[a1].innerHTML + " -> " + mas[b].innerHTML);
    buff = mas[a1].innerHTML;
    mas[a1].innerHTML = mas[b].innerHTML;
    mas[b].innerHTML = buff;
};
let f2 = 0;
rem.onclick = function() {
    mas[f2].style.display = "none";
    f2 += 1;
}


//Выбор элементов
let filt = [];
let a = document.querySelectorAll('.filt_elm');
for(i = 0; i < a.length; i++)
    filt.push(a[i].innerHTML);
filt = filt.map(item => Number(item));


let filting = document.getElementById('filting');
filting.onclick = function () {
    let min = Number(prompt("Введите нижнюю границу", "0"));
    let max = Number(prompt("Введите Верхнюю границу", "1000"));

    alert("Выбраны числа в диапазоне [" + min + "," + max + "]");

    let new_filt = filt.filter((a) => {
        if (a >= min && a <= max) return true;
        return false;
    });

    let f = document.getElementsByClassName('new_f')
    for(j = 0 ; j < filt.length; j ++){
        f[j].innerHTML = "";
    }
    for(j = 0 ; j < new_filt.length; j ++){
        f[j].innerHTML = new_filt[j];
    }
}


// Сортировка массива
function compareCountsUp(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
  }
function compareCountsDown(a, b) {
    if (a > b) return -1;
    if (a == b) return 0;
    if (a < b) return 1;
}
sort.onclick = function () {
    let s = prompt("Как сортировать", "По возрастанию");

    if(s == "По возрастанию")
        filt.sort(compareCountsUp);
    if(s == "По убыванию")
        filt.sort(compareCountsDown);

    let f1 = document.getElementsByClassName('new_f');
    for(j = 0 ; j < filt.length; j ++)
        f1[j].innerHTML = filt[j];  
}


// Уведомления
let num = document.getElementById('number');
let counter = 0;
function notification_plus(){
    counter += 1;
    num.innerHTML = counter;

    let new_li = document.createElement('li');
    new_li.classList.add('pane');

    let new_span = document.createElement('span');
    new_span.classList.add('icon');

    let new_i = document.createElement('i');
    new_i.classList.add('fa-solid');

    let new_span1 = document.createElement('span');
    new_span1.classList.add('text');
    new_span1.textContent = "Новое уведомление";

    new_span.appendChild(new_i);

    let closeTab = document.createElement('i');
    closeTab.className = 'fa-solid fa-xmark';

    closeTab.style=`
    position: absolute;
    right: 30px;
    top: -15px;
    cursor: pointer;
    `;

    
    new_li.appendChild(new_span);
    new_li.appendChild(new_span1);
    new_li.appendChild(closeTab);

    let out_ul = document.getElementById("app");
    out_ul.appendChild(new_li);


    const notifInner = notif.querySelector('pane');
    clos.onclick = function(event) {
        if (!event.target.classList.contains('fa-xmark')) return;

        let notif = event.target.closest('pane');
        notif.remove();

        counter--;
        notifCounter.textContent=counter;
    }; 
}

notify_box = document.getElementById('not_hover')
notify_box.addEventListener('click', () => {
    clearInterval(notify_plus);
    setTimeout(function() {
        notify_plus = setInterval(notification_plus, 3000);
    }, 10000);
});

let notify_plus = setInterval(notification_plus, 3000);




