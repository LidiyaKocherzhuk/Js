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

//
// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе
// :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ
// далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях

let mail1 = 'someemail@gmail.com'
let mail2 = 'someeMAIL@gmail.com'
let mail3 = 'someeMAIL@i.ua'
let mail4 = 'some.email@gmail.com'

function validatorEmail  (mail)  {
    if (mail.indexOf('@') > 1 && mail.includes('@')
        && mail.lastIndexOf('.') > (mail.indexOf('@')+2)
    && mail.toUpperCase() && mail.toLowerCase()){
        console.log(true);
    }
    else {
        console.log(false);
    }
}

validatorEmail(mail1);
validatorEmail(mail2);
validatorEmail(mail3);
validatorEmail(mail4);

let validatorEmail2 = (mail) => mail.indexOf('@') > 1 && mail.includes('@')
    && mail.lastIndexOf('.') > (mail.indexOf('@')+2)
    && mail.toUpperCase() && mail.toLowerCase();

console.log(validatorEmail2(mail1));
console.log(validatorEmail2(mail2));
console.log(validatorEmail2(mail3));
console.log(validatorEmail2(mail4));


//
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком
// подумайте над протоколом, з регулярками будете потім бавитись.
//

// - є масив:
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];

// відсортувати його в спадаючому порядку за кількістю елементів в полі modules

let coursesArraySort = coursesArray.sort((first, second) => first.modules.length - second.modules.length);
console.log(coursesArraySort)
//
// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5

let count = (str, stringsearch) => str.split('').filter((a) => a === stringsearch).length;

console.log(count("Астрономия это наука о небесных объектах", 'о'));

//
// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'

let cutString2 = (str, n) => str.split(' ').slice(0, n).join(' ');

console.log(cutString2("Сила тяжести приложена к центру масс тела", 5));