// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

function getInformation(placeholder, userId, user, append) {
    fetch(placeholder)
        .then(response => response.json())
        .then(responseItem => {
            responseItem.forEach(item => {
                if (item.userId === user.id) {
                    let blocItems = document.createElement('div');
                    blocItems.classList.add('show');
                    for (const key in item) {
                        let h4 = document.createElement('h4');
                        h4.classList.add('w_h4')
                        h4.innerHTML = `<u>${key}:</u>   <i>${item[key]}</i>`
                        blocItems.append(h4);
                    }
                    append.appendChild(blocItems);
                }

            })
        })
}

let divElement = document.createElement('div');
divElement.id = 'users'

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(responseUsers => {
        responseUsers.forEach(user => {
            let divUserCommentPost = document.createElement('div');
            divUserCommentPost.classList.add('blocUser')
            let divUser = document.createElement('div');
            divUser.classList.add('divUser');
            let buttonPosts = document.createElement('button');
            buttonPosts.innerText = 'OPEN POSTS'
            buttonPosts.classList.add('btn');
            let buttonComments = document.createElement('button');
            buttonComments.innerText = 'OPEN COMMENTS'
            buttonComments.classList.add('btn');


            for (const keyUser in user) {
                let h3 = document.createElement('h3');
                h3.innerHTML = `${keyUser}: - ${user[keyUser]}`

                getAll(keyUser, user[keyUser], h3)

                function getAll(key, obj, tag) {
                    if (typeof obj === 'object') {
                        let divIn = document.createElement('div');
                        divIn.classList.add('marg');
                        tag.innerHTML = `${key}:`
                        let inElement = obj;
                        for (const key in inElement) {
                            let h5 = document.createElement('h5');
                            h5.innerHTML = `${key} - ${inElement[key]}`
                            divIn.appendChild(h5);
                            getAll(key, inElement[key], h5);
                            tag.appendChild(divIn);
                        }
                    }
                }

                divUser.append(h3, buttonPosts, buttonComments);
            }

            let divPosts = document.createElement('div');
            divPosts.classList.add('d_none');
            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(responseItem => {
                    responseItem.forEach(item => {
                        if (item.userId === user.id) {
                            let blocItems = document.createElement('div');
                            blocItems.classList.add('show');
                            for (const key in item) {
                                let h4 = document.createElement('h4');
                                h4.classList.add('w_h4')
                                h4.innerHTML = `<u>${key}:</u>   <i>${item[key]}</i>`
                                blocItems.append(h4);
                            }
                            divPosts.appendChild(blocItems);
                        }

                    })
                })

            let divComments = document.createElement('div');
            divComments.classList.add('d_none');
            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then(responseItem => {
                    responseItem.forEach(item => {
                        if (item.postId === user.id) {
                            let blocItems = document.createElement('div');
                            blocItems.classList.add('show');
                            for (const key in item) {
                                let h4 = document.createElement('h4');
                                h4.classList.add('w_h4')
                                h4.innerHTML = `<u>${key}:</u>   <i>${item[key]}</i>`
                                blocItems.append(h4);
                            }
                            divComments.appendChild(blocItems);
                        }

                    })
                })

            buttonPosts.onclick = function () {
                divPosts.classList.toggle('showPostsComments')
            };
            buttonComments.onclick = function () {
                divComments.classList.toggle('showPostsComments')
            };

            divUserCommentPost.append(divUser, divPosts, divComments);
            divElement.appendChild(divUserCommentPost);
        });

    });
document.body.appendChild(divElement);


