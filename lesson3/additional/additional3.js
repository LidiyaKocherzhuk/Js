// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.

let arrayNumbers = [];

// let j=0;
// for (let i = 0; i <= 50; i++) {
//     if (i%2===0) {
//         arrayNumbers[j++]=i
//          }
//        }
// document.write(arrayNumbers);
// console.log(arrayNumbers);

// for (let i = 2, j = 0; i<=50; i+=2, j++){
//     arrayNumbers[j] = i;
// }
//         console.log(arrayNumbers);

//     b. заповнити його 50 непарними числами за допомоги циклу.

// let j = 0;
// for (let i = 0; i < 50; i++) {
//     if (i % 2 !== 0) {
//         arrayNumbers[j++] = i;
//     }
// }
//         console.log(arrayNumbers)

// for (let i = 2, j = 0; i <= 50; i += 2, j++) {
//     arrayNumbers[i] = j;
// }
// console.log(arrayNumbers);

//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)

// for (let i = 0; i < 20; i++) {
//     let random = Math.floor(Math.random(i)*100);
//     arrayNumbers[i] = random;
// }
// console.log(arrayNumbers);

// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)

// let i = 0;
// while (i < 20) {
//     let random = Math.floor(Math.random() * 724)+8;
//     arrayNumbers[i] = random;
//     i++;
// }
// document.write(arrayNumbers);

// 2. Вивести за допомогою console.log кожен третій елемен

// for (let i = 2; i < arrayNumbers.length; i+=3) {
//     console.log(arrayNumbers[i]);
// }

// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.

let array = [2,6,8,3,7,65,69,67,4];

//
// let I = 2;
// while (I < array.length) {
//     if (array[I] % 2 === 0) {
//         console.log(array[I])
//     }
//     I+=3;
// }

// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив

// let newArray = [], j = 0;
// for (let i = 2; i < array.length; i+=3) {
//     if (array[i] % 2 === 0) {
//         console.log(array[i]);
//         newArray[j++] = array[i];
//     }
// }
// console.log(newArray);

// 5. Вивести кожен елемент масиву, сусід справа якого є парним
// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56

// let EXAMPLE = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// for (let i = 0; i < EXAMPLE.length; i++) {
//     if (EXAMPLE[i] % 2 === 0) {
//         console.log(EXAMPLE[i-1])
//     }
// }

// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.

// let arraySum = [100,250,50,168,120,345,188];
//
// let sum = 0;
// for (let i of arraySum) {
//     sum += i;
// }
// console.log(sum / arraySum.length)

//
// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.

// let arr = [100,250,50,168,120,345,188];
// let arr1 = [], j = 0;
// for (let i = 0; i < arr.length; i++) {
//     arr1[j++] = arr[i]* 5 ;
// }
// console.log(arr1)

// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.

// let allArr = ['hello', 20, 'hi', 14, 3, 'Okten'];
// let allArrNew = [], j = 0;
// let i = 0;
// while (i < allArr.length) {
//     if (typeof allArr[i] === 'number') {
//         allArrNew[j++] = allArr[i];
//     }
//     i++;
// }
// console.log(allArrNew)

// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
    let usersWithId = [
        {id: 1, name: 'vasya', age: 31, status: false},
        {id: 2, name: 'petya', age: 30, status: true},
        {id: 3, name: 'kolya', age: 29, status: true},
        {id: 4, name: 'olya', age: 28, status: false}
    ];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let usersWithCities = [], k = 0;
for (let i = 0; i < usersWithId.length; i++) {
    for (let j = 0;j<citiesWithId.length; j++) {
        if (usersWithId[i].id === citiesWithId[j].user_id) {
            usersWithId[i].address = citiesWithId[j];
            usersWithCities[k++] = usersWithId[i];
        }
    }
}
console.log(usersWithCities)
for (let element of usersWithCities) {
    for (let key in element) {
        document.write(`<h5>${key} - ${element[key]}</h5>`)
    }
}


// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//             {
//                 id: 1, // <===
//                 name: 'vasya',
//                 age: 31,
//                 status: false,
//                 address: {
//                     user_id: 1, // <===
//                     country: 'Ukraine',
//                     city: 'Ternopil'
//                 }
//             },
//             // TO BE CONTINUED .....
//         ]

//
//         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.

let arrayTen = [2,6,9,25,4,6,45,32,1,65];
// for (let value of arrayTen) {
//     if (value % 2 === 0) {
//         console.log(value);
//     }
// }
//
// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
//

// let newArray = [], j = 0;
// let i = 0;
// while (i < arrayTen.length) {
//     newArray[j++] = arrayTen[i];
//     i++;
// }
// console.log(newArray)

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let arrayStr = ['a', 'b', 'c'];
let str = '';
for (let i = 0; i < arrayStr.length; i++) {
    str += arrayStr[i];
}
console.log(str);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.

let str1 = '';
let i = 0;
while (i < arrayStr.length) {
    str1 += arrayStr[i];
    i++;
}
console.log(str1);

// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.

let str2 = '';
for (let i of arrayStr) {
    str2 += i;
}
console.log(str2);