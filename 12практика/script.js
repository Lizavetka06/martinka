"use strict";


    // Первое задание (изменение цвета ссылок)

    const links=document.querySelectorAll('.link');
    const colorList=['red','greenyellow','deeppink','purple','deepskyblue','orange', 'gold'];

    links.forEach(link => {
        link.querySelector('a').style.color=colorList[Math.floor(Math.random()*colorList.length)];
    });



    // Второе задание ()

    const listBlock=document.querySelector('.create-list');

    const list = document.createElement('ul');
    list.classList.add('user-list');
    list.style=`
    text-align: left;
    `;
    listBlock.append(list);

    while(true){
        let item=prompt("Что купить?","");

        if (!item) break;

        let listItem = document.createElement('li');
        listItem.textContent=item;
        list.append(listItem);
    }



    // Третье задание (уведомление)

    const notification=document.querySelector('.notif');
    const notifList=['Уведомление','Выключи утюг!','Суiц#d не выход...','Держи конфетку'];

    function showNotification(text){
        let notif=document.createElement('div');
        notif.className = 'notification';
        // notif.classList.add('notification');
        notif.textContent=text;
        notif.style=`
        padding: 10px 20px;
        display: inline-block;
        border: 1px solid #ffea00;
        `;

        notification.append(notif);
        // console.log(notification);

        setTimeout(()=>{notif.remove()},1500);
    }

    setInterval(() => {showNotification(notifList[Math.floor(Math.random()*notifList.length)])}, 2000);



    // Четвертое задание ()

    const area=document.querySelector(".area");
    const broken=area.querySelector('img');

    broken.style.top=Math.round(area.clientHeight/2 - broken.offsetHeight/2) + "px";
    broken.style.left=Math.round(area.clientWidth/2 - broken.offsetWidth/2) + "px";


    const clickX=document.querySelector('.clickX').querySelector('span');
    const clickY=document.querySelector('.clickY').querySelector('span');

    area.onclick = function(click){
        clickX.textContent=click.clientX;
        clickY.textContent=click.clientY;
    }



    // Пятое задание (кнопка закрытия уведомления)
    const notif = document.querySelector('.notifs');
    const notifBtn = notif.querySelector('.notif__btn');
    const notifInner = notif.querySelector('.notif__inner');
    const notifCounter = notif.querySelector('.notif__counter');
    const notifArr = [
        'Вам подарок!',
        'Скидки уже здесь',
        'Проверьте корзину',
        'Распродажа!',
        'Уведомление',
    ];

    let numberNotif = 0;
    let counter = 0;

    function createNotif() {
        let element = document.createElement('div');
        element.classList.add('notif__item');

        if (numberNotif < notifArr.length) {
            element.textContent = notifArr[numberNotif];
            numberNotif++;
            counter++;
        } else {
            numberNotif = 0;
            element.textContent = notifArr[numberNotif];
            numberNotif++;
            counter++;
        }

        element.style=`
        position: relative;
        width: 15%;
        padding: 10px 20px;
        display: inline-block;
        border: 1px solid #ffea00;
        margin-bottom: 5px;
        `;

        notifInner.append(element);

        let closeTab = document.createElement('i');
        closeTab.className = 'fa-solid fa-xmark';

        closeTab.style=`
        position: absolute;
        right: 10px;
        top: 3px;
        cursor: pointer;
        `;

        element.append(closeTab);

        notifCounter.textContent = counter;

        // console.log(notifInner);
    }

    let timerId = setInterval(createNotif, 3000);
    
    notifBtn.addEventListener('click', () => {
        clearInterval(timerId);
        setTimeout(function() {
            timerId = setInterval(createNotif, 3000);
        }, 10000);
    });

    notifInner.onclick = function(event) {
        if (!event.target.classList.contains('fa-xmark')) return;

        let notif = event.target.closest('.notif__item');
        notif.remove();

        counter--;
        notifCounter.textContent=counter;
    }; 
