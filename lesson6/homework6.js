// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'

let strHello = 'hello world', strLorem = 'lorem ipsum', strJs = 'javascript is cool';

console.log(strHello.length);
console.log(strLorem.length);
console.log(strJs.length);

// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'

let toUpperCase = strHello.toUpperCase();
console.log(toUpperCase);
let toUpperCaseLorem = strLorem.toUpperCase();
console.log(toUpperCaseLorem);
let toUpperCaseJs = strJs.toUpperCase();
console.log(toUpperCaseJs);

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'

let toLowerCase = strHello.toLowerCase();
console.log(toLowerCase);
let toLowerCaseLorem = strLorem.toLowerCase();
console.log(toLowerCaseLorem);
let toLowerCaseJs = strJs.toLowerCase();
console.log(toLowerCaseJs);


// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.

let strDirty = ' dirty string   ';
let trim = strDirty.trim();
console.log(trim)
document.write(`<h3>${trim}</h3>`);


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Каждый охотник желает знать';
// let arr = stringToarray(str);
// document.writeln(arr); // ['Каждый', 'охотник', 'желает', 'знать']

let str = 'Каждый охотник желает знать';
let arr = str.split(' ');
console.log(arr);
document.writeln(`<h3>${arr}</h3>`); // ['Каждый', 'охотник', 'желает', 'знать']

// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый

let slice = str.slice(0,7);
console.log(slice)
document.write(`<h3>${slice}</h3>`);

// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'

let strHTML = "HTML JavaScript PHP";
let replaceAll = strHTML.replaceAll(' ','-')
                        .toUpperCase();
console.log(replaceAll)
document.writeln(`<h3>${replaceAll}</h3>`); // 'HTML-JAVASCRIPT-PHP'

// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.

let toUpperCaseFirst = str => str[0].toUpperCase() + str.slice(1);
console.log(toUpperCaseFirst('hi JavaScript'));

// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.

let fnUpp = (str) => {
    let newStr = str.split(' ')
                    .map(element => element[0].toUpperCase() + element.slice(1))
    console.log(newStr.join(' '))
};
fnUpp('hi js, java, python, node');

let toUpperCaseAll = (str) => {
    let newStr = str.split(' ')
        .map(([firstChar, ...rest]) =>
            firstChar.toUpperCase() + rest.join("").toLowerCase()).join(" ");
    console.log(newStr);
}
toUpperCaseAll('hello javaScript, java, python, node');





















