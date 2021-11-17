// --створити масив з:
//     - з 5 числових значень
// - з 5 стічкових значень
// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
//
let arrayNumber = [1, 2, 3, 4, 5];
let arrayString = ['name', 'surname', 'middleName', 'gender', 'profession'];
let arrayAll = ['lidiya', 'Kocherzhuk', 26, 1 < 0, 10 > 5];
console.log(arrayNumber, arrayString, arrayAll);


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
//
let array = [];
array[0] = 'cat';
array[1] = 'dog';
array[2] = 'chicken';
array[3] = 'rabbit';
console.log(`${array}; `);

// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом всередині
// - За допомогою циклу for і document.write() вивести 10 блоків div c довільним текстом і індексом всередині
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом всередині.
// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом і індексом всередині.
//
for (let i = 0; i < 10; i++) {
    document.write(`<div class="hello"> hellooooo))) </div>`)
}

for (let i = 0; i < 10; i++) {
    document.write(`<div class="hello"> Hello ${i} </div>`)
}

let i = 0;
while (i < 20) {
    document.write(`<h1>Item</h1>`);
    i++;
}

let a = 0;
while (a < 20) {
    document.write(`<h1>Item - ${a}</h1>`);
    a++;
}


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arrayTenNumber = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (let i = 0; i < arrayTenNumber.length; i++) {
    console.log(arrayTenNumber[i]);
}
console.log(`------------------`);

// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let food = ['chess', 'milk', 'yogurt', 'bread', 'butter', 'tomato', 'cucumber', 'chicken', 'beef', 'fish',];
for (let i = 0; i < food.length; i++) {
    console.log(food[i]);
}
console.log(`------------------`);

// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arrayTenAll = ['socks', 'shirt', 'coat', 'dress', 1, 2, 3, 4, 25 > 15, 0 > 3];
for (let i = 0; i < arrayTenAll.length; i++) {
    console.log(arrayTenAll[i]);
}
console.log(`------------------`);

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arrayTenAll1 = ['socks', 'shirt', 'coat', 'dress', 1, 2, 3, 4, 25 > 15, 0 > 3];
for (const element of arrayTenAll1) {
    if (typeof element === "boolean"){
        console.log(element)
}
}
console.log(`------------------`);

// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
let arrayTenAll2 = ['socks', 'shirt', 'coat', 'dress', 1, 2, 3, 4, 25 > 15, 0 > 3];
for (const element of arrayTenAll2) {
    if (typeof element === "number"){
        console.log(element)
    }
}
console.log(`------------------`);
// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
//
let arrayTenAll3 = ['socks', 'shirt', 'coat', 'dress', 1, 2, 3, 4, 25 > 15, 0 > 3];
for (const element of arrayTenAll3) {
    if (typeof element === "string"){
        console.log(element)
    }
}
console.log(`------------------`);


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let array1 = [];
array1[0] = 'name';
array1[1] = 'surname';
array1[2] = 'age';
array1[3] = 25;
array1[4] = 36;
array1[5] = 12;
array1[6] = true;
array1[7] = 2 > 10;
array1[8] = 3;
array1[9] = 9;
for (const elements of array1) {
    console.log(elements);
}
console.log(`------------------`);

// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let i = 0; i < 10; i++) {
    console.log(i);
    document.write(`<h3>${i}</h3>`)
}
console.log(`------------------`);

// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
document.write(`<div class="hello">`)
for (let i = 0; i < 100; i++) {
    console.log(i);
    document.write(`${i} `)
}
console.log(`------------------`);
document.write(`</div>`)

// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
document.write(`<div class="hello">`)
for (let i = 0; i < 100; i+=2) {
    console.log(i);
    document.write(`${i} `)
}
console.log(`------------------`);
document.write(`</div>`)

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
document.write(`<div class="hello">`)
for (let i = 0; i < 100; i+=2) {
    console.log(i);
    document.write(`${i} `)
}
console.log(`------------------`);
document.write(`</div>`)

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
document.write(`<div class="hello">`)
for (let i = 0; i < 100; i+=2) {
    console.log(i);
    document.write(`${i} `)
}
console.log(`------------------`);
document.write(`</div>`)

