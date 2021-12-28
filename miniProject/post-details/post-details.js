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
//
// На странице post-details.html:
// 7 Вывести всю, без исключения, информацию про объект post на кнопку/ссылку которого был совершен клик ранее.
// 8 Ниже информации про пост, вывести все комментарии текущего поста (эндпоинт для получения информации - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
//
// Стилизация проекта -
// index.html - все блоки с user - по 2 в ряд. кнопки/ссылки находяться под информацией про user.
// user-details.html - блок с информацией про user вверху страницы. Кнопка ниже, на 90% ширины страницы, по центру.
// блоки с краткой информацией про post - в ряд по 5 объектов.
// post-details.html - блок с информацией про пост вверху. Комментарии - по 4 в ряд.
// Все без исключения элементы, который характеризируют user,post,comment  визуализировать, так, что бы было видно их блоки (дать задний фон + margin. Иными словами - крайне четкая сетка)


let posts = localStorage.getItem('Posts')
let postsParse = JSON.parse(posts);
console.log(postsParse);

const blocPost = document.createElement('div');
blocPost.classList.add('blocPost','back', 'd_flex')
const divPost = document.createElement("div");
divPost.classList.add('post', 'postOne', 'd_flex');
const divPostClone = divPost.cloneNode()
divPostClone.classList.add('post', 'postTwo', 'd_flex');

for (const key in postsParse) {
    const h4Posts = document.createElement('h4');
    if (typeof postsParse[key] === 'number') {
        h4Posts.innerHTML = `------- ${key}: ${postsParse[key]} -------`;
    }
    divPostClone.appendChild(h4Posts);
}

divPost.innerHTML = `<h2>${postsParse.title}</h2> <h5>${postsParse.body}</h5>`
blocPost.append(divPost, divPostClone);

fetch(`https://jsonplaceholder.typicode.com/posts/${postsParse.id}/comments`)
    .then(response => response.json())
    .then(comments => {
        let divComments = document.createElement('div');
        divComments.classList.add('comments', 'd-flex', 'flex-wrap', 'justify-content-center')
        comments.forEach(comment => {

            let divComment = document.createElement('div');
            divComment.classList.add('comment')

            for (const commentKey in comment) {
                const h4Comments = document.createElement('h6');
                h4Comments.innerHTML = `<u><i>${commentKey}:</i></u> <span>${comment[commentKey]};</span>`
                divComment.appendChild(h4Comments);
            }

            divComments.appendChild(divComment);

        });
        blocPost.appendChild(divComments);
    });
document.body.appendChild(blocPost);
