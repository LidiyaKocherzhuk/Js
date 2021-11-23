function isNumber() {
    if (typeof arguments === 'number') {
        return arguments;
    } else {
        console.log('Is not a number!!!');
    }
}

// - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

// function numberMin(a, b, c) {
    // isNumber(a, b, c);
    // if (a < b && a < c) {
    //     console.log(a);
    // }else if (b < a && b < c) {
    //     console.log(b)
    // }else{
    //     console.log(c);
    // }
// }
// numberMin(5, 58, 3);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

// function numberMax(a, b, c) {
//     isNumber(a, b, c);
//     if (a > b && a > c) {
//         console.log(a);
//     } else if (b > a && b > c) {-
//         console.log(b)
//     } else{
//         console.log(c);
//     }
// }
// numberMax(85, 53, 36);

// - створити функцію яка повертає найбільше число з масиву

let arrayNumbers = [6, 9, 3, 5];

function max(array) {
    let arMax = array.length;
    for (let num of array) {
        if (num > arMax) {
            arMax = num;
        }
    }
    return arMax;
}
console.log(max(arrayNumbers));

// - створити функцію яка повертає найменьше число з масиву

// function min(array) {
//     let arMin = array.length;
//     for (let num of array) {
//         if (num < arMin) {
//             arMin = num;
//         }
//     }
//     return arMin;
// }
//
// console.log(min(arrayNumbers));


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

// function sum(array) {
//     let arSum = 0;
//     for (let i of array) {
//         arSum += i;
//     }
//     return arSum;
// }
//
// console.log(sum(arrayNumbers));

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

// function average(array) {
//     let arSum = 0;
//     for (let i of array) {
//         arSum += i;
//     }
//     return arSum / array.length;
// }
//
// console.log(average(arrayNumbers))

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

// function minMax() {
//     let min = arguments.length;
//     let max = arguments.length;
//     for (let i of arguments) {
//         if (i < min) {
//             min = i;
//         }
//        if (i > max) {
//             max = i;
//         }
//     }
//     console.log(`Max - ${max}`);
//     return min;
//
// }
//
// console.log('Min - ' + minMax(2,6,8,4));

// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

// function random(array) {
//     for (let i = 0; i < 10; i++) {
//        let randomNam = Math.round(Math.random() * 100);
//         array[i] = randomNam;
//     }
//     return array;
// }
let arrRandom = [];
// console.log(random(arrRandom))

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

// function randomLimit(array, limit) {
//     let i = 0;
//     while (i < 10) {
//         let randomNum = Math.round(Math.random()*limit);
//         array[i] = randomNum;
//     i++;
//     }
//     return array;
// }
//
// console.log(randomLimit(arrRandom, 50));

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

// function newArray(array, arrayNew) {
//     for (let i = array.length - 1, j = 0; i >= 0; i--, j++) {
//         arrayNew[j] = array[i]
//     }
//        return  arrayNew;
// }
// console.log(newArray(arrayNumbers, arrRandom))
