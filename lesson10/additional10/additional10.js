// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
function aboutElement(element) {
    element.onclick = function (e) {
        console.log(`Назва тегу - ${e.target.localName}, список класів - ${element.classList.value},
        список ід - ${element.id}, розміри - ${e.target.clientHeight}*${e.target.clientWidth}`);
    }
}

let div = document.getElementsByTagName('div')[0];
aboutElement(div);

// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
//
function aboutBloc(element) {
        let popup = document.getElementsByClassName('popup')[0];
        let h1 = document.createElement('h1');
    element.onclick = function (e) {
        popup.classList.toggle('popupShow');
       h1.innerHTML = `Назва тегу - ${e.target.localName},</br> Cписок класів - ${element.classList.value},</br>
        Cписок ід - ${element.id},</br> Pозміри - ${e.target.clientHeight}*${e.target.clientWidth}`;
        popup.appendChild(h1);
    }
}

let idPop = document.getElementById('pop');
aboutBloc(idPop);

// -- взять массив пользователей
let usersWithAddress = [
    {id:1,name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:2,name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}},
    {id:3,name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}},
    {id:4,name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}},
    {id:5,name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}},
    {id:6,name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}},
    {id:7,name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}},
    {id:8,name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}},
    {id:9,name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}},
    {id:10,name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}},
    {id:11,name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}}
];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
//
//
// for (const element of usersWithAddress) {
//     let div = document.createElement('div');
//     div.innerHTML = element;
//     document.body.appendChild(div);
// }
let check1 = document.getElementById('check1');
let check2 = document.getElementById('check2');
let check3 = document.getElementById('check3');



//             let status = false;
//             let age = 29;
//             let city = 'Kyiv';
//             if (check1.checked) {
//             console.log(usersWithAddress.filter(value => value.status === status));
//             }
//
//
//
//
//
//             // let id = document.forms.formFilter.children
//             // for (const element of id) {
//             //     console.log(element.value);
//
//                 // if (element.checked) {
//                 //     iterArray(usersWithAddress, 'h2');
//                 //
//                 // }
//             // }


let buttonFilter = document.getElementById('buttonFilter');
        buttonFilter.onclick = function (e) {
            e.preventDefault()
            oneClick(usersWithAddress);

        }
            // for (const elementUser of usersWithAddress) {
function oneClick(arr) {
    check1.onclick = function () {
        if (this.checked) {
            let filterStatus = arr.filter(value => !value.status);
            iterArray(filterStatus, 'h2');
        }
    }
}


                check2.onclick = function () {
                    if (this.checked) {
                        let filterAge = usersWithAddress.filter(value => value.age >= 29);
                        iterArray(filterAge, 'h2');
                    }
                }

                check3.onclick = function () {
                    if (this.checked) {
                        let filterCity = usersWithAddress.filter(value => value.address.city === 'Kyiv');
                        iterArray(filterCity, 'h2');
                    }
                }

            // }









//         let buttonFilter = document.getElementById('buttonFilter');
//         buttonFilter.onclick = function (e) {
//             e.preventDefault()
//
//
//             let filterStatus = [], filterAge = [], filterCity = [];
//
//             if (check1.checked && check2.checked && check3.checked) {
//                 filterCity = filterAge.filter(value => value.address.city === 'Kyiv');
//                 console.log(filterCity)
//                 iterArray(filterCity, 'h2');
//             }else if (check2.checked && check3.checked) {
//                 filterCity = filterAge.filter(value => value.address.city === 'Kyiv');
//                 iterArray(filterCity, 'h2');
//                 console.log(filterCity)
//             } else if (check1.checked && check3.checked) {
//                 filterCity = filterStatus.filter(value => value.address.city === 'Kyiv');
//                 iterArray(filterCity, 'h2');
//             } else if (check1.checked && check2.checked) {
//                 filterAge = filterStatus.filter(value => value.age >= 29);
//                 iterArray(filterAge, 'h2');
//             } else if (check1.checked) {
//                 filterStatus = usersWithAddress.filter(value => !value.status);
//                 console.log(filterStatus);
//                 iterArray(filterStatus, 'h2');
//             } else if (check2.checked) {
//                 filterAge = usersWithAddress.filter(value => value.age >= 29);
//                 iterArray(filterAge, 'h2');
//             } else if (check3.checked) {
//                 filterCity = usersWithAddress.filter(value => value.address.city === 'Kyiv');
//                 iterArray(filterCity, 'h2');
//             }
//         };
//
// }


    function iterArray(object, tag) {
        for (const filterElement of object) {
            let divElement = document.createElement('div');
            divElement.id = 'objStyle';
            function foo(element, tag) {
                for (const key in element) {
                    let hElement = document.createElement(tag);
                    hElement.innerHTML = `${key} - ${element[key]};`;
                    divElement.appendChild(hElement);
                    if (typeof element[key] === 'object') {
                        hElement.innerHTML = `${key}:`;
                        foo(element[key], 'h3');
                    }
                }
            }
            foo(filterElement, tag);
            document.body.appendChild(divElement);
        }
    }



//
//
// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне
//
//




let pop = document.getElementById('pop');
console.log(pop)
console.log(pop.nextElementSibling)

function overDoz(element) {
    let buttonBack = document.createElement('button');
    buttonBack.innerText = 'Back';
    let buttonForward = document.createElement('button');
    buttonForward.id = 'btnForward;';
    buttonForward.innerText = 'Forward';


    function f(element) {
        buttonForward.onclick = function () {
            if (element.children.length) {
                console.log(element.children[0])
                f(element.children[0]);

            }
            if (element.nextElementSibling) {
                console.log(element.nextElementSibling);
                f(element.nextElementSibling)
            }

        }

    }

    f(element);
    document.body.append(buttonForward, buttonBack);
}







    // let a=0;
    // function f(element) {
    //     let b=element;
    //     buttonForward.onclick = function () {
    //         if (b.children.length) {
    //             let i = 0;
    //             function childrenn() {
    //                 console.log(b.children[a][i]);
    //                 i++
    //
    //                 if (!b.children[a][i-1].nextElementSibling){
    //                     return;
    //                 }
    //                 childrenn(b.children[a]);
    //             }
    //             childrenn()
    //             console.log(a)
    //             console.log(element.nextElementSibling);
    //             f(element.nextElementSibling);
    //         }
    //     }
    //     a++;
    // }

//
//     function f(element) {
//         let a = element;
//         let b = element;
//         buttonForward.onclick = function () {
//             console.log(element)
//             if (element.children.length) {
//                 console.log(element.children[0])
//                 b = element.children[0]
//                 f(b);
//             }
//             if (!element.children.length) {
//                 a = element.nextElementSibling;
//                 console.log(element.nextElementSibling);
//                 f(a);
//             } /*else {
//                 return ()
//             }*/
//         }
//     }
// f(element)


    // document.body.append(buttonBack, buttonForward);
// }

let div1 = document.createElement('div');
let p = document.createElement('p');
let h2_ = document.createElement('h2');
let div2 = document.createElement('div');
let ul = document.createElement('ul');
let li = document.createElement('li');
let h3 = document.createElement('h3');
let h5 = document.createElement('h5');
let h6 = document.createElement('h6');

ul.appendChild(li);
div2.appendChild(ul);
h2_.append(h3,h5,h6);
div1.append(p, h2_, div2);

overDoz(div1);

// function reCall(startElement) {
//     console.log(startElement);
//     if (startElement.children.length) {
//         for (const element of startElement.children) {
//             reCall(element);
//         }
//     }
// }
//
// reCall(div1);

// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
//
//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан

// let select1 = document.getElementById('select');
// select1.onmousemove = function () {
//     select1.classList.toggle('italic')
// };
// let rung = new Range();
// let m = {insertNode(node) {
//     }}


