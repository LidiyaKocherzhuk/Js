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
console.log(usersWithCities.address)
let a = usersWithCities.address;

for (let element of usersWithCities) {
    for (let key in element) {
        document.write(`<h5>${key} - ${element[key]}</h5>`)
    }
    // for (let i of a) {
    //     document.write(i)
    // }
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


// // - створити функцію яка повертає найбільше число з масиву
// // let array = [1, 5, 6, 8, 3, 7];
// //
// // function max(arr) {
// //     let max = '';
// //     for (const i of arr) {
// //         if (i > max) {
// //             max = i;
// //         }
// //     }
// //     return max;
// // }
// //
// // console.log(max(array));
// //
// // // - створити функцію яка повертає найменьше число з масиву
// //
// // function min(arr) {
// //     let min = arr[0];
// //     for (let i = 0; i < arr.length; i++) {
// //         if (arr[i] < min) {
// //             min = i;
// //         }
// //     }
// //     return min;
// // }
// //
// // console.log(min(array));
// //
// // // - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
// //
// // function sum(arr) {
// //     let sum = 0;
// //     for (const i of arr) {
// //         sum +=i;
// //     }
// //     return sum;
// // }
// // console.log(sum(array));
// //
// // // - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.
// //
// // function seredne(arr) {
// //     return sum(arr) / arr.length;
// // }
// // console.log(seredne(array));
// //
// // // - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);
// //
// // function maxMin(arr) {
// //     console.log(max(arr));
// //     return min(arr);
// // }
// //
// // maxMin(array);
// // console.log(maxMin(array));
// //
// //
// // // - створити функцію яка заповнює масив рандомними числами
// // // (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.
// //
// // function random() {
// //     let newArr = [], j = 0;
// //     for (let i = 0; i < 20; i++) {
// //         newArr[j++] = Math.round(Math.random()*100);
// //     }
// //     console.log(newArr)
// // }
// //
// // random();
// //
// //
// // // - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.
// // function rand(arr, limit) {
// //     for (let i = 0, j = 0; i < 10; i++, j++) {
// //         arr[j] = Math.round(Math.random() * limit);
// //     }
// //     console.log(arr);
// // }
// //
// // rand([],1000);
// //
// // // - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].
// //
// // function backwards(arr) {
// //     let newArr = [];
// //     for (let i = arr.length-1, j = 0; i >= 0; i--) {
// //         newArr[j++] = arr[i];
// //     }
// //     console.log(newArr);
// // }
// // backwards(array)
//
// // 1. Створити пустий масив та :
// let array = []
// //     a. заповнити його 50 парними числами за допомоги циклу.
//
// // for (let i = 2, j = 0; i <= 100; i+=2, j++) {
// //         array[j] = i;
// // }
// //         console.log(array)
// //
// // //     b. заповнити його 50 непарними числами за допомоги циклу.
// // for (let i = 1, j = 0; i < 100; i+=2, j++) {
// //     array[j] = i;
// // }
// // console.log(array);
// //     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
// for (let i = 0; i < 20; i++) {
//     array[i] = Math.round(Math.random() * 100);
// }
// console.log(array)
//
// // d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)le
// // let i = 0;
// // while (i < 20){
// // array[i] = Math.round(Math.random() * 724)+8
// //     i++;
// // }
// // console.log(array)
//
// // 2. Вивести за допомогою console.log кожен третій елемен
// // let i = 2;
// // while (i < array.length) {
// // console.log(array[i])
// //     i+=3;
// // }
//
// // 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
// // let i = 2;
// // while (i < array.length) {
// //     if (array[i] % 2 === 0) {
// //     console.log(array[i]);
// //     }
// //     i+=3;
// // }
// // 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
// // let i = 2;
// // let neaArray = [], j = 0;
// // while (i < array.length) {
// //     if (array[i] % 2 === 0) {
// //        neaArray[j++] = array[i];
// //     }
// //     i+=3;
// // }
// // console.log(neaArray);
//
// // 5. Вивести кожен елемент масиву, сусід справа якого є парним
// // EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// // let arr = [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ];
// // let i = 0;
// // while (i < arr.length) {
// //     if (arr[i] % 2 === 0) {
// //         console.log(arr[i-1])
// //     }
// //     i++;
// // }
//
// // 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
// // let arr =[100,250,50,168,120,345,188];
// // let sum = 0;
// // for (let i = 0; i < arr.length; i++) {
// //     sum += arr[i];
// // }
// // console.log(sum/arr.length)
// //
// // //
// // // 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
// // let newArr = [];
// // for (let i = 0, j=0; i < arr.length; i++) {
// //     newArr[j++] = arr[i] * 5;
// // }
// // console.log(newArr)
//
// // 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
// // let arr = [1, 5, 3, 'kvjhsj', true, 'lsojck', true];
// // let newArr = [];
// // for (let i = 0, j=0; i < arr.length; i++) {
// //     if (typeof arr[i] === 'number') {
// //         newArr[j++] = arr[i];
// //     }
// // }
// // console.log(newArr)
// //
// // - Дано 2 масиви з рівною кількістю об'єктів.
// // Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
// //
// // З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
// //     Записати цей об'єкт в новий масив
// let newArr = [];
// let j=0, newArr[j].address=[];
// for (let i = 0; i < usersWithId.length; i++) {
//     if (i.id === i.user_id) {
//         usersWithId[i].address = citiesWithId[i];
//         newArr[j++] = usersWithId[i];
//     }
//
// }
// console.log(newArr)
// for (const newArrElement of newArr) {
//     for (const key in newArrElement)
//         document.write(`<h3>${key} ${newArrElement[key]}</h3>`);
//     for (const element of newArr[j].address) {
//         for (const key in element) {
//             document.write(`<h4>${key} ${element[key]}</h4>`)
//         }
//     }
// }
//
//
//
// // Example:
// //     let usersWithCities = [
// //             {
// //                 id: 1, // <===
// //                 name: 'vasya',
// //                 age: 31,
// //                 status: false,
// //                 address: {
// //                     user_id: 1, // <===
// //                     country: 'Ukraine',
// //                     city: 'Ternopil'
// //                 }
// //             },
// //             // TO BE CONTINUED .....
// //         ]
// //
// //
// //
// //
// //         - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
// //
// // - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
// //
// //
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
// // - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
