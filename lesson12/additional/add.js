// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста


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

                divUser.append(h3, buttonPosts);
            }

            let divPosts = document.createElement('div');
            divPosts.classList.add('d_none');

            fetch('https://jsonplaceholder.typicode.com/posts')
                .then(response => response.json())
                .then(responsePosts => {
                    responsePosts.forEach(post => {

                        let buttonComments = document.createElement('button');
                        buttonComments.innerText = 'Open Comments'
                        buttonComments.classList.add('btn1');


                        if (post.userId === user.id) {
                            let blocPost = document.createElement('div');
                            blocPost.classList.add('show');
                            for (const key in post) {
                                let h4 = document.createElement('h4');
                                h4.classList.add('w_h4')
                                h4.innerHTML = `<u>${key}:</u>   <i>${post[key]}</i>`




                            let divComments = document.createElement('div');
                            divComments.classList.add('d_none', 'showComments');


                            fetch('https://jsonplaceholder.typicode.com/comments')
                                .then(response => response.json())
                                .then(responseComment => {
                                    responseComment.forEach(comment => {

                                        let blocComment = document.createElement('div');
                                        blocComment.classList.add('show');
                                        blocComment.classList.add('show1');
                                        if (comment.postId === post.id) {

                                            for (const key in comment) {
                                                let h4 = document.createElement('h4');
                                                h4.classList.add('w_h4')
                                                h4.innerHTML = `<u>${key}:</u>   <i>${comment[key]}</i>`
                                                blocComment.append(h4);

                                            }
                                            divComments.appendChild(blocComment);
                                        }

                                    })
                                })
                            buttonComments.onclick = function () {
                                divComments.classList.toggle('showPostsComments')

                            }
                                blocPost.append(h4, buttonComments, divComments);
                            }
                            divPosts.appendChild(blocPost);
                        }

                    })
                })


            buttonPosts.onclick = function () {
                divPosts.classList.toggle('showPostsComments')
            };


            divUserCommentPost.append(divUser, divPosts);
            divElement.appendChild(divUserCommentPost);
        });

    });
document.body.appendChild(divElement);


