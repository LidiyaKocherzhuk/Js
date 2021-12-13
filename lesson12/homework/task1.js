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

