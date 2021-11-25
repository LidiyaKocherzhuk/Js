// - Дано список імен.
let n1 = 'Harry..Potter'
let n2 = 'Ron---Whisley'
let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'

let normName = (name) =>
    name.replace('.',' ').replace('.', '')
        .replace('-',' ').replaceAll('-', '')
        .replace('_',' ').replace('_', '')

console.log(normName(n1));
console.log(normName(n2));
console.log(normName(n3));

//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.

let fnRandom = (arr) => {
    for (let i = 0; i < 10; i++) {
    arr[i] = Math.round(Math.random() * 100);
    }
    return arr;
};
console.log(fnRandom([]));

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort

let sortArray = fnRandom([]).sort((a,b)=> a-b);
console.log(sortArray);

let sortArray2 = sortArray.sort((a,b)=> b-a);
console.log(sortArray2);

// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа

let filterArray = sortArray.filter((element) => element % 2 === 0);
console.log(filterArray);

// - створити масив рандомних цілих числових значень (або згенерувати, за допомоги попередньої функції) . за допомоги map та колбеку перетворити всі об'єкти в масиві на стрінгові.

let arrStr = sortArray.map((element) => String(element));
console.log(arrStr);

// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
    let nums = [11,21,3];
// sortNums('ascending') // [3,11,21]
// sortNums('descending') // [21,11,3]
let sortNums = (arr, direction) => {

    if (direction === 'ascending') {
        return arr.sort((num1, num2) => num1 - num2);
    }
    if (direction === 'descending') {
        return arr.sort((num1, num2) => num2 - num1);
    }
}
console.log(sortNums( nums,'ascending'));
//
//
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців

let sortCoursesAndDurationArray = coursesAndDurationArray.sort((element1, element2) =>
    element1.monthDuration - element2.monthDuration);
console.log(sortCoursesAndDurationArray);

console.log(coursesAndDurationArray.filter((element) => element.monthDuration > 5));

// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]

let cutString= (str, n) =>{
    let cutStringNew = [];
    while (str.length) {
        cutStringNew.push(str.substring(0,n));
        str = str.slice(n);
    }
    return cutStringNew;
}
console.log(cutString('наслаждение',3));
