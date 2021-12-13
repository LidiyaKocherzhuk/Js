// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста

function getComment(placeholder,id, append) {
    fetch(placeholder)
        .then(response => response.json())
        .then(responseItem => {
            responseItem.forEach(item => {
                if (item.postId === id) {
                    let blocComments = document.createElement('div');
                    blocComments.classList.add('show');
                    for (const key in item) {
                        let h4 = document.createElement('h4');
                        h4.classList.add('w_h4')
                        h4.innerHTML = `<u>${key}:</u>   <i>${item[key]}</i>`
                        blocComments.append( h4);
                    }
                    append.appendChild(blocComments);
                }

            })
        })
}
let divElement = document.createElement('div');
divElement.id = 'users'

fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(responseUsers => {
        responseUsers.forEach(user =>{
            let divUserCommentPost = document.createElement('div');
            divUserCommentPost.classList.add('blocUser')
            let divUser = document.createElement('div');
            let buttonPosts = document.createElement('button');
            buttonPosts.innerText = 'open posts'
            let buttonComments = document.createElement('button');
            buttonComments.innerText = 'open comments'


            for (const keyUser in user) {
                    let h3 = document.createElement('h3');
                    h3.innerHTML = `${keyUser}: - ${user[keyUser]}`

                    getAll(keyUser, user[keyUser], h3)

                    function getAll(key ,obj, tag) {
                        if (typeof obj === 'object') {
                            let divIn = document.createElement('div');
                            divIn.classList.add('marg');
                            tag.innerHTML = `${key}:`
                            let inElement = obj;
                            for (const key in inElement) {
                                let h5 = document.createElement('h5');
                                h5.innerHTML = `${key} - ${inElement[key]}`
                                divIn.appendChild(h5);
                                console.log(inElement[key])
                                getAll(key, inElement[key],h5);
                                tag.appendChild(divIn);
                            }
                        }
                    }

                    divUser.append(h3, buttonPosts, buttonComments);
                }

            let divPosts = document.createElement('div');
            divPosts.classList.add('posts')
            let divComments = document.createElement('div');
            divPosts.classList.add('comments')



            divUserCommentPost.append(divUser, divPosts, divComments);
            divElement.appendChild(divUserCommentPost);
        });

    });
            document.body.appendChild(divElement);












