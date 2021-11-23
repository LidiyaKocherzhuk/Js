//
// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)

let fnMin = (a, b, c) => {
    let min = a < b && a < c ? a : (b < a && b < c ? b : (c < a && c < b ? c : 'не вірні дані!'));
    console.log(min);
};
fnMin(26, 38, 5);

// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)

let fnMax = (a, b, c) => {
    let max = a > b && a > c ? a : (b > a && b > c ? b : (c > a && c > b ? c : 'не вірні дані!'));
    console.log(max);
};
fnMax(36, 5, 9);

// - створити функцію яка повертає найбільше число з масиву
arrayNamber = [6, 8, 36, 14, 96, 54, 66, 45];

let maxNamber = (arr) => {
    let max = arr[0];
    for (const element of arr) {
        if (element > max) {
            max = element;
        }
    }
    console.log(max);
};
maxNamber(arrayNamber);

// - створити функцію яка повертає найменьше число з масиву

let minNamber = (arr) => {
    let min = arr[0];
    for (const arrElement of arr) {
        if (arrElement < min) {
            min = arrElement;
        }
    }
    console.log(min);
};
minNamber(arrayNamber);

// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13

let sumArr = (arr) => {
    let sum =0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    console.log(sum);
};
sumArr(arrayNamber);

// - створити функцію яка приймає масив чисел та повертає середнє арифметичне його значень.

let arithmetiMean = (arr) => {
    let sum =0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum / arr.length;
}
console.log(arithmetiMean(arrayNamber));

// - створити функцію яка приймає будь-яку кількість чисел, повертає найменьше, а виводить найбільше (Math використовувати заборонено);

let maxMin = (...numbers) => {
    let max = numbers[0], min = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        if (numbers[i] > max) {
            max = numbers[i];
        }
        if (numbers[i] < min) {
            min = numbers[i];
        }
    }
    console.log(max);
    return min;
};
console.log(maxMin(2, 6, 9, 45, 78, 25, 41, 36));


// - створити функцію яка заповнює масив рандомними числами
// (цей код генерує рандомні числа в діапазоні від 0 до 100 - Math.round(Math.random()*100)) та виводить його.

let random = () => {
    let array = [];
    for (let i = 0, j = 0; i < 10; i++) {
        array[j++] = Math.round(Math.random()*100);
    }
    console.log(array)
};
random();

// - створити функцію яка заповнює масив рандомними числами в діапазоні від 0 до limit. limit - аргумент, який характеризує кінцеве значення діапазону.

let randomLimit = (limit) => {
    let array = [];
    for (let i = 0, j = 0; i < 10; i++) {
        array[j++] = Math.round(Math.random()*limit);
    }
    console.log(array)
};
randomLimit(500);

// - Функція приймає масив та робить з нього новий масив в зворотньому порядку. [1,2,3] -> [3, 2, 1].

let fnRevers = (arr) => {
    let newArr = [];
    for (let i = arr.length - 1, j=0; i >= 0; i--, j++) {
        newArr[j] = arr[i];
    }
    return newArr
};
console.log(fnRevers(arrayNamber))