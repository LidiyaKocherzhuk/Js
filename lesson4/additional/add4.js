// - створити функцію, яка якщо приймає один аргумент, просто вивдоить його, якщо два аргументи - складає або конкатенує їх між собою.

// function arg() {
//     let sum = 0;
//     let a = 0;
//     for (let i of arguments) {
//         a = arguments.length === 1 ? i : sum += i;
//
//     }
//     console.log(a)
// }
//
// arg(5, 5, 3, 85);

//
// - створити функцію  яка приймає два масиви та скаладає значення елементів з однаковими індексами  та повертає новий результуючий масив.
//     EXAMPLE:
// [1,2,3,4]
//     [2,3,4,5]
// результат
//     [3,5,7,9]

// let arrayOne = [1,2,3,4], arrayTwo =[2,3,4,5];
//
// function array(arr1, arr2) {
//     let newArray = [], k = 0;
//     for (let i = 0, j = 0; i < arr1.length, j < arr2.length; i++, j++) {
//         if (i === j) {
//             newArray[k++] = arr1[i]+arr2[j];
//         }
//     }
//     return newArray;
// }
// console.log(array(arrayOne,arrayTwo));

// - Створити функцію яка приймає масив будь яких объектів, та повертає масив ключів всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ name, age, model ]

let arrayObject = [{name: 'Dima', age: 13}, {model: 'Camry'}];



// function keyReturn(arr) {
//     let keyArray = [], k = 0;
//     for (let element of arr) {
//         for (let key in element) {
//             keyArray[k++] = key;
//         }
//     }
//     return keyArray;
// }
// console.log(keyReturn(arrayObject));

//
//     - Створити функцію яка приймає масив будь яких объектів, та повертає масив значень всіх обєктів
// EXAMPLE:
//     [{name: 'Dima', age: 13}, {model: 'Camry'}]  ===> [ Dima, 13, Camry ]

// function valueReturn(arr) {
//     let valueArray = [], k = 0;
//     for (let element of arr) {
//         for (let key in element) {
//         valueArray[k++] = element[key]
//         }
//     }
//     return valueArray;
// }
//
// console.log(valueReturn(arrayObject));