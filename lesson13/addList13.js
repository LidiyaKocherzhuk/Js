// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар

let products = JSON.parse(localStorage.getItem('products'));

let btnDelete = document.createElement('button');
btnDelete.classList.add('btnDelete');
btnDelete.innerText = 'DELETE ALL';

for (const product of products) {
    let divProduct = document.createElement('div');
    divProduct.classList.add('divProduct')
    let btnDeleteProduct = document.createElement('button');
    btnDeleteProduct.classList.add('productDelete')
    btnDeleteProduct.innerText = 'DELETE!';

    let divProductItem = document.createElement('div');
    divProductItem.classList.add('divProductItem')
    for (const key in product) {
        if (key.includes('image')) {
            let img = document.createElement('img');
            img.src = product[key];
            divProduct.append(img);
        } else {
            let h3 = document.createElement('h3');
            h3.innerHTML = `<i>${key}:</i>  ${product[key]}.`
            if (key.includes('price')) {
                h3.innerHTML = `<i>${key}:</i>  ${product[key]}$.`
            }
            divProductItem.append(h3, btnDeleteProduct);
        }

    }
            divProduct.appendChild(divProductItem);

    btnDeleteProduct.onclick = function () {
        for (let i = 0; i < products.length; i++) {
            if (products[i] === product) {
                products.splice(i, 1)
                localStorage.setItem('products', JSON.stringify(products))
            }
        }
    };

    document.body.appendChild(divProduct);
}
btnDelete.onclick = function () {
    localStorage.removeItem('products');
};
btnDelete.onmouseover = function () {
   btnDelete.classList.toggle('btnOver')
};
btnDelete.onmouseleave = function () {
    btnDelete.classList.toggle('btnOver')
};
document.body.appendChild(btnDelete)
