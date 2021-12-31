// В index.html
// 1 получить массив объектов user с endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вывести id,name всех user в index.html. Отдельный блок для каждого user.
// 3 Добавить каждому блоку кнопку/ссылку , при клике на которую происходит переход на страницу user-details.html, которая имеет детальную информацию про объект на который кликнули
//
//
// На странице user-details.html:
// 4 Вывести всю, без исключения, информацию про объект user на кнопку/ссылку которого был совершен клик ранее.
// 5 Добавить кнопку "post of current user", при клике на которую, появляются title всех постов текущего юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
// 6 Каждому посту добавить кнопку/ссылку, при клике на которую происходит переход на страницу post-details.html, которая имеет детальную информацию про текущий пост.

// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)


let divUser = document.createElement('div');
divUser.classList.add('userDetails','back', 'd_flex')

let btnPostTitle = document.createElement('button');
btnPostTitle.classList.add('btnPostTitle');
btnPostTitle.innerHTML = 'POST OF CURRENT USER';

let parseUser = localStorage.getItem('Users')
let user = JSON.parse(parseUser);
console.log(user);

function getKeyOfUser(item, bloc) {
    let divElement = document.createElement('div');
    divElement.classList.add('userD')

    for (const key in item) {
        let h2Element = document.createElement('h2');
        h2Element.innerHTML = `<i>${key}: </i> <span>${item[key]};</span>`;
        divElement.appendChild(h2Element);
        if (typeof item[key] === 'object') {
            h2Element.innerHTML = `<i>${key}:</i>`;
            getKeyOfUser(item[key], divElement);
        }
    }

    bloc.appendChild(divElement);
}

getKeyOfUser(user, divUser);

divUser.appendChild(btnPostTitle);


fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`).
then(response => response.json()).
then(posts => {
    const divTitlePosts = document.createElement('div');
    divTitlePosts.classList.add('titlePosts')

    posts.forEach(post => {
        const divTitlePost = document.createElement('div');
        divTitlePost.classList.add('divTitlePost');
        let aTitle = document.createElement('a');

        for (const postKey in post) {

           aTitle.innerHTML = `${post.title}`
            aTitle.href = '../post-details/post-details.html'

            aTitle.onclick = function () {
                localStorage.setItem('Posts', JSON.stringify(post));
            };
        }
        divTitlePost.appendChild(aTitle);
        divTitlePosts.appendChild(divTitlePost);
    });

    btnPostTitle.onclick = function () {
        divTitlePosts.classList.toggle('showTitlePosts');
    }

    divUser.appendChild(divTitlePosts);
});


document.body.appendChild(divUser);






//
// function getUser() {
//     fetch('https://jsonplaceholder.typicode.com/users')
//         .then(response => response.json())
//         .then(users => {
//             users.forEach(user => {
//                 let divUser = document.createElement('div');
//
//                 function getKeyOfUser(item) {
//                     for (const key in item) {
//                         let divElement = document.createElement("div");
//                         let h3Element = document.createElement('h3');
//                         h3Element.innerHTML = `${key} - ${item[key]}`;
//                         divElement.appendChild(h3Element);
//                         divUser.appendChild(divElement);
//                         if (typeof item[key] === 'object') {
//                             h3Element.innerHTML = `${key}:`;
//                             getKeyOfUser(item[key]);
//                             // let objUserElement = user[key];
//                             // for (const key2 in objUserElement) {
//                             //     let divElement2 = document.createElement("div");
//                             //     let h3Element2 = document.createElement('h3');
//                             //     h3Element2.innerHTML = `${key2} - ${objUserElement[key2]}`;
//                             //     divElement2.appendChild(h3Element2);
//                             //     divUser.appendChild(divElement2);
//                             // }
//                         }
//                     }
//                 }
//
//                 getKeyOfUser(user);
//                 document.body.appendChild(divUser);
//             });
//         });
// }
//
// getUser();