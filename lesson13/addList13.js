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
    let btnDeleteProduct = document.createElement('button');
    btnDeleteProduct.classList.add('productDelete')
    btnDeleteProduct.innerText = 'delete this produkt';

    for (const key in product) {
        if (key.includes('image')) {
            let img = document.createElement('img');
            img.src = product[key];
            divProduct.appendChild(img);
        } else {
            let h2 = document.createElement('h2');
            h2.innerHTML = `<i>${key}:</i> - ${product[key]}.`
            if (key.includes('price')) {
                h2.innerHTML = `<i>${key}:</i> - ${product[key]}$.`
            }
            divProduct.append(h2, btnDeleteProduct);
        }

    }

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
