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
let users1 = new Users(1, 'Jeff','Bezos','ldjj@ua.com', '+380962563232');
console.log(users1);
let users2 = new Users(2, 'Elon','Musk','124li@ua.com', '+380962563232');
console.log(users2);
let users3 = new Users(3, 'Bernard','Arnault','hl241@ua.com', '+380962563232');
console.log(users3);
let users4 = new Users(4, 'Bill','Gates','bi454@ua.com', '+380962563232');
console.log(users4);
let users5 = new Users(5, 'Mark','Zuckerberg','zu75@ua.com', '+380962563232');
console.log(users5);
let users6 = new Users(6, 'Warren','Buffett','bu786@ua.com', '+380962563232');
console.log(users6);
let users7 = new Users(7, 'Larry','Ellison','el56@ua.com', '+380962563232');
console.log(users7);
let users8 = new Users(8, 'JeLarry','Page','pa345@ua.com', '+380962563232');
console.log(users8);
let users9 = new Users(9, 'Sergey','Brin','br3432@ua.com', '+380962563232');
console.log(users9);
let users10 = new Users(10, 'Mukesh','Ambani','amn3432@ua.com', '+380962563232');
console.log(users10);

let User = [];
User.push(users1,users2,users3,users4,users5,users6,users7,users8,users9,users10,);
console.log(User);

// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
//

let filterUsers = (arrayUsers) => arrayUsers.filter((element) => element.id % 2 === 0);
console.log(filterUsers(User));

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
//

let sortUsers = (array) => array.sort((firstObj, secondObj) =>  firstObj.id - secondObj.id);
console.log(sortUsers(User));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
