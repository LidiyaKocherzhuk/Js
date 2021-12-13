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
