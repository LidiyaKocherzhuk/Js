// - Создать произвольный елемент с id = text.  Используя JavaScript, сделайте так, чтобы при клике на кнопку исчезал элемент с id="text".
//

let text = document.getElementById('text');
let button = document.getElementById('button');
    button.onclick = function () {
        text.style.display = 'none';
}

//     - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let closeButton = document.getElementById('buttonClose');
closeButton.onclick = function () {
    closeButton.style.display = 'none';
};

//
// - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
//
let ageElement = document.forms.age;
let buttonAge = document.getElementById('buttonAge');
buttonAge.onclick = function () {
    let age = ageElement.number.value;
    let audit = age < 18 && age> 0 ? 'Вам немає 18!' : (age >= 18 ? 'Вітаємо!' : "Щось пішло не так!");
    document.write(audit);
}

// - Создайте меню, которое раскрывается/сворачивается при клике
//
let menuElement = document.getElementById('menu');
let img = document.getElementsByTagName('img')[0];
menuElement.onclick = function () {
    img.classList.toggle('close')
};

//
// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.

let comments = [
    {title: 'Яйця', body: 'Збити в піну'},
    {title: 'Мука', body: 'Просіяти'},
    {title: 'Цукор', body: 'Додати до яєць'},
    {title: 'Масло', body: 'Розтопити'},
]
for (const element of comments) {
    let div = document.createElement('div');
    let h2 = document.createElement('h2');
    h2.innerText = `${element.title}:`;
    let h3 = document.createElement('h3');
    h3.innerText = element.body;
    let buttonElement = document.createElement('button');
    buttonElement.innerText = 'close/open';
    buttonElement.onclick = function () {
        h3.classList.toggle('close')
    };
    div.appendChild(h2);
    div.appendChild(h3);
    div.appendChild(buttonElement);
    document.body.appendChild(div);

}

