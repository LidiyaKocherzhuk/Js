// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(responsePosts => {
        responsePosts.forEach(post => {

            let ulPost = document.createElement("ul");
            let buttonComment = document.createElement('button');
            ulPost.classList.add('ul_post');
            buttonComment.innerText = 'show comment'

            for (const key in post) {
                let li = document.createElement('li');
                let h3 = document.createElement('h3');
                let h4 = document.createElement('h4');
                li.classList.add('li_flex');
                h3.classList.add('w_h3');
                h4.classList.add('w_h4')
                h3.innerHTML = `${key}:`
                h4.innerHTML = `${post[key]}:`
                li.append(h3, h4);
                ulPost.appendChild(li);
            }
            let divBlocComments = document.createElement('div');
            divBlocComments.id = 'divBlocComments'


            fetch('https://jsonplaceholder.typicode.com/comments')
                .then(response => response.json())
                .then(responseComments => {

            buttonComment.onclick = function () {
                        divBlocComments.classList.toggle('show_comment')
                        let show_commentElement = document.getElementsByClassName('show_comment')[0];

                responseComments.forEach(comment => {
                            if (comment.id === post.id) {
                                for (const key in comment) {
                                    let h3 = document.createElement('h3');
                                    let h4 = document.createElement('h4');
                                    h3.classList.add('w_h3');
                                    h4.classList.add('w_h4')
                                    h3.innerHTML = `${key}:`
                                    h4.innerHTML = `${comment[key]}:`
                                    divBlocComments.append(h3, h4);
                                }
                            }

                        });

                show_commentElement.innerHTML = divBlocComments;
                    }
                    document.body.appendChild(divBlocComments);
                })

            ulPost.appendChild(buttonComment);
            document.body.appendChild(ulPost);

        });
    });