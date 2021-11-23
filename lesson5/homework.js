
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка обчислює та повертає площу прямокутника висотою

let rectangle = (a,b)=> a*b;
console.log(rectangle(5,6));
document.write(`<h3>Площа прямокутника - ${rectangle(5,6)}</h3>`);

// - створити функцію яка обчислює та повертає площу кола

let sCircle = (r) => Math.PI * r**2;
console.log(sCircle(5));
document.write(`<h3>Площа кола - ${sCircle(5)}</h3>`);

// - створити функцію яка обчислює та повертає площу циліндру
let sCylinder = (r, h) => 2 * Math.PI * r * (h + r);
console.log(sCylinder(5, 4));
document.write(`<h3>Площа циліндра - ${sCylinder(5, 4)}</h3>`);

// - створити функцію яка приймає масив та виводить кожен його елемент

let array = [2, 8, 3,'hello',true, 45, 6];
let fnArray = (arr) => {
    for (const element of arr) {
    console.log(element);
    }
};
fnArray(array);

// - створити функцію яка  створює параграф з текстом. Текст задати через аргумент

let p = (text)=> document.write(`<p>${text}</p>`);
p('Hello! How are you?')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий

let elementLi = (text) => {
    document.write(`<ul>`);
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
        document.write(`<li>${text}</li>`);
    document.write(`</ul>`);
};
elementLi('Hello! How are you?')

// - створити функцію яка  створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
let fnElementLi = (text, howManyLi) => {
    document.write(`<ul>`);
    for (let i = 0; i < howManyLi; i++) {
    document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
};
fnElementLi('Hi!', 3);

// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let arrWithLi = (arr)=>{
    document.write(`<ul>`);
for (let i = 0; i < arr.length; i++) {
    document.write(`<li>${arr[i]}</li>`);
}
document.write(`</ul>`);
}
arrWithLi(array);

//
// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let arrObj = [
    {id: 1, name: 'Vasya', age: 25},
    {id: 2, name: 'Kolya', age: 29},
    {id: 3, name: 'Liza', age: 35},
];

let elementBlock = (arr) => {
    for (const arrElement of arr) {
        document.write(`<h3>`);
        for (const key in arrElement) {
        document.write(`${key} - ${arrElement[key]} </br>`)
        }
        document.write(`</h3>`);
    }
};

elementBlock(arrObj)
