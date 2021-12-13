// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста

let divElement = document.createElement('div');
divElement.classList.add('postsContent');

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(responsePosts => {
        responsePosts.forEach(post => {
            let divPostComment = document.createElement("div");
            divPostComment.classList.add('divPostComment');
            let ulPost = document.createElement("ul");
            let buttonComment = document.createElement('button');
            ulPost.classList.add('ul_post');
            buttonComment.innerText = 'show comment'

            for (const key in post) {
                let li = document.createElement('li');
                let h3 = document.createElement('h3');
                let h4 = document.createElement('h4');
                li.classList.add('d_flex');
                h3.classList.add('w_h3');
                h4.classList.add('w_h4')
                h3.innerHTML = `${key}:`
                h4.innerHTML = `${post[key]}:`
                li.append(h3, h4);
                ulPost.appendChild(li);
            }
            buttonComment.onclick = function () {
                let divComments = document.createElement('div');
                divComments.classList.add('comments');
                getComment(post.id, divComments);
                divPostComment.appendChild(divComments);
                buttonComment.disabled = true;
            };


            ulPost.appendChild(buttonComment);
            divPostComment.appendChild(ulPost);
            divElement.appendChild(divPostComment);
            document.body.appendChild(divElement);

        });
    });


function getComment(id, append) {
fetch('https://jsonplaceholder.typicode.com/comments')
    .then(response => response.json())
    .then(responseComments => {
        responseComments.forEach(comment => {
            console.log(comment)
            if (comment.postId === id) {
    let blocComments = document.createElement('div');
            blocComments.classList.add('show');
                for (const key in comment) {
                    let h4 = document.createElement('h4');
                    h4.classList.add('w_h4')
                    h4.innerHTML = `<u>${key}:</u>   <i>${comment[key]}</i>`
                    blocComments.append( h4);
                }
           append.appendChild(blocComments);
            }

        })
    })
}






