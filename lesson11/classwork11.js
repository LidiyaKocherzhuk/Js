// є масив -
let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];
// створити під кожен об'єкт свій блок з конопкою "додати до улюблених" при натисканні на яку об'єкт потрапляє до масиву favorites улюблених обраних об'єктів в локальному сховищі.
// Створити сторніку favorites.html при переході на яку потрібно вивест в документ всіх обраних на попередньому етапі.

let favorites = [];
for (const user of users) {
    let div = document.createElement('div');
    div.id = 'divElement';
    let buttonElement = document.createElement('button');
    buttonElement.id = 'btnFavorites'
    buttonElement.innerText = "додати до улюблених";
    let ul = document.createElement('ul');
    for (const key in user) {
        let li = document.createElement('li');
        li.innerText = `${key}: ${user[key]}`;
        ul.appendChild(li);
    }

    buttonElement.onclick = function () {
        favorites.push(user);
        localStorage.setItem('favorites', JSON.stringify(favorites));
    };

    div.append(ul, buttonElement);
    document.body.appendChild(div);
}

let anchorElement = document.createElement('a');
anchorElement.id = 'showFavorite'
anchorElement.innerHTML = '<h2>Show my favorite users:</h2>'
anchorElement.href = 'http://localhost:63342/Js/lesson11/classworkFavorites.html?_ijt=sgolfrc5mvgkps8lbrtmjjkmm&_ij_reload=RELOAD_ON_SAVE'
document.body.appendChild(anchorElement);
