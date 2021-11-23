// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б

// function sTriangle(a, b) {
//     return a*b;
// }
// console.log(sTriangle(5, 6));

// - створити функцію яка обчислює та повертає площу кола з радіусом r

function sCircle(r) {
    return Math.PI * r**2;
}
console.log(sCircle(5));

// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
function sCylinder(r, h) {
    return 2 * sCircle(r) + 2 * Math.PI * r * h;
}
console.log(sCylinder(5, 2));

// - створити функцію яка приймає масив та виводить кожен його елемент

// function array(a) {
//     for (let i = 0; i < a.length; i++) {
//         console.log(a[i]);
//     }
// }
let myArray = ['hello', 'how', 'are', 'you','?'];
// array(myArray);

// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// function p(text) {
//     document.write(`<p>${text}</p>`);
// }
//
let text = 'hello! How are you???';
// p(text);


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

// function ul3(text) {
//     document.write(`<ul>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`<li>${text}</li>`);
//     document.write(`</ul>`);
// }
//
// ul3(text);

// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)

// function ulHowMachLI(text, howMachLI) {
//     document.write(`<ul>`);
//     for (let i = 0; i < howMachLI; i++) {
//         document.write(`<li>${text}</li>`);
//     }
//     document.w//     document.write(`<ul>`);rite(`</ul>`);
// }
//
// ulHowMachLI(text, 6);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

// function arrayLi(array) {
//         document.write(`<ul>`);
//     for (let i = 0; i< array.length; i++) {
//             document.write(`<li>${array[i]}</li>`);
//         }
//         document.write(`<ul>`);
// }
// arrayLi(myArray)

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.

// let arrayObj = [{id: 1, name: 'Lidaya', age: 26},
//     {id: 2, name: 'Vova', age: 30},
//     {id: 3, name: 'Vira', age: 19}
// ];
// function arrayObject(array) {
//     for (let user of array) {
//         for (let key in user) {
//             document.write(`<div>${key} - ${user[key]}</div>`);
//         }
//             document.write('------------------');
//     }
// }
//
// arrayObject(arrayObj);
