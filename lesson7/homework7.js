// Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)
//

function Users(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone
}

let user = [
    new Users(1, 'Jeff','Bezos','ldjj@ua.com', '+380962563232'),
    new Users(2, 'Elon','Musk','124li@ua.com', '+380962563232'),
    new Users(3, 'Bernard','Arnault','hl241@ua.com', '+380962563232'),
    new Users(4, 'Bill','Gates','bi454@ua.com', '+380962563232'),
    new Users(5, 'Mark','Zuckerberg','zu75@ua.com', '+380962563232'),
    new Users(6, 'Warren','Buffett','bu786@ua.com', '+380962563232'),
    new Users(7, 'Larry','Ellison','el56@ua.com', '+380962563232'),
    new Users(8, 'JeLarry','Page','pa345@ua.com', '+380962563232'),
    new Users(9, 'Sergey','Brin','br3432@ua.com', '+380962563232'),
    new Users(10, 'Mukesh','Ambani','amn3432@ua.com', '+380962563232')
];
console.log(user);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//

let filterUsers = (arrayUsers) => arrayUsers.filter((element) => element.id % 2 === 0);
console.log(filterUsers(user));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//

let sortUsers = (array) => array.sort((firstObj, secondObj) =>  firstObj.id - secondObj.id);
console.log(sortUsers(user));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order= order;

    }
}

let clientPush = [
    new Client(1, 'Jeff', 'Bezos', 'ldjj@ua.com', '+380962563232', ['milk', 'juice']),
    new Client(2, 'Elon', 'Musk', '124li@ua.com', '+380962563232', ['water', 'milk', 'juice']),
    new Client(3, 'Bernard', 'Arnault', 'hl241@ua.com', '+380962563232', ['chocolate', 'water', 'milk', 'juice']),
    new Client(4, 'Bill', 'Gates', 'bi454@ua.com', '+380962563232', ['water', 'milk', 'juice']),
    new Client(5, 'Mark', 'Zuckerberg', 'zu75@ua.com', '+380962563232', ['eggs', 'water', 'milk', 'juice']),
    new Client(6, 'Warren', 'Buffett', 'bu786@ua.com', '+380962563232', ['water']),
    new Client(7, 'Larry', 'Ellison', 'el56@ua.com', '+380962563232', ['tomato', 'cucumber', 'carrot', 'apple', 'banana', 'grapes']),
    new Client(8, 'JeLarry', 'Page', 'pa345@ua.com', '+380962563232', ['tomato', 'cucumber', 'carrot', 'apple', 'banana']),
    new Client(9, 'Sergey', 'Brin', 'br3432@ua.com', '+380962563232', ['eggs', 'water', 'milk', 'juice', 'sausage', 'bread']),
    new Client(10, 'Mukesh', 'Ambani', 'amn3432@ua.com', '+380962563232', ['sausage', 'bread']),
]
console.log(clientPush);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

let sortClientArrey = clientPush.sort((firstObj, secondObj) => firstObj.order.length - secondObj.order.length);
console.log(sortClientArrey);