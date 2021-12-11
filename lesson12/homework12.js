// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ об'єкти. Застилізувати, за допомоги css, щоб отримати 5 елементів в рядку.
// Для кожного елементу свій блок div.post
// Всі характеристики повинні мати свої блоки всередені div.post
// https://jsonplaceholder.typicode.com/posts
//

fetch('https://jsonplaceholder.typicode.com/posts').then(response => response.json())
    .then(responsePosts => {
            responsePosts.forEach(post => {
                let divPost = document.createElement('div');
                divPost.classList.add('posts');
                let ul = document.createElement('ul');
                for (const key in post) {
                    let li = document.createElement('li');
                    li.innerHTML = `${key} - ${post[key]} `;
                    ul.appendChild(li);
                }
                divPost.appendChild(ul);
                document.body.appendChild(divPost);
            });
        }
    );



//     2.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті.
//     Для кожного елементу свій блок div.comment
// Всі характеристики повинні мати свої блоки всередені div.comment
// https://jsonplaceholder.typicode.com/comments

fetch('https://jsonplaceholder.typicode.com/comments').then(response => response.json())
    .then(responseComments => {
        responseComments.forEach(comment => {
                let divComment = document.createElement('div');
                divComment.classList.add('comment');
                for (const key in comment) {
                    let h3 = document.createElement('h3');
                    let h4 = document.createElement('h4');
                    h3.classList.add('w_h3');
                    h4.classList.add('w_h4');
                    h3.innerHTML = `${key}:`;
                    h4.innerHTML = `${comment[key]};`;
                        divComment.append(h3,h4);
                }
                document.body.appendChild(divComment);
            });
        });