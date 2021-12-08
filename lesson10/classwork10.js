// - створити 2 форми  по 2 інпути в кожній. ствоирити кнопку при кліку на яку считується та виводиться на консоль інформація з цих 2х форм.
//     Кнопка повинна лежати за межами форм (Щоб ьуникнути  перезавантаження сторінки)
// Доступ до інпутів через Forms API. Отже дайте формі та інпутам всі необхідні атрибути.
//

let formText = document.getElementById('formText');
formText.onclick = function () {
    let form = document.forms
    for (const formElement of form) {
        for (const input of formElement) {
            console.log(input.value)
        }
    }
}

//
// - Створити 3 инпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
let tableButton = document.getElementById('tableButton');
tableButton.onclick = function () {
    let oneNumber = document.getElementById('oneNumber').value;
    let twoNumber = document.getElementById('twoNumber').value;
    let textTable = document.getElementById('textTable').value;

    let table = document.createElement('table');
    for (let i = 0; i < oneNumber; i++) {
        let tr = document.createElement('tr');
        for (let i = 0; i < twoNumber; i++) {
            let td = document.createElement('td');
            td.innerText = textTable;
            tr.appendChild(td);
        }
        table.appendChild(tr);
    }
    document.body.appendChild(table);
};

//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку
//
let badWords = ['матю́ччя', 'ла́йка', "лихослі́в'я"];
let audit = document.getElementById('audit');
audit.onclick = function () {
    let words = document.getElementById('words').value;
    for (const badWord of badWords) {
        if (words === badWord) {
            alert('Ви використали нецензурну лексику!!')
        }
    }
};

//
// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let buttonCheck = document.getElementById('buttonCheck');
buttonCheck.onclick = function () {
    let words2 = document.getElementById('words2').value;
    for (const word of badWords) {
        if (words2.includes(word)) {
            alert('Ви використали нецензурну лексику!!')
        }
    }
};