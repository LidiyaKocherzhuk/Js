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

let productForm = document.forms.product

productForm.onsubmit = function (e) {
    e.preventDefault();

    let nameProduct = this.nameProduct.value;
    let howMach = this.howMach.value;
    let price = this.price.value;
    let image = this.image.value;
    let product = {nameProduct: nameProduct, howMach: howMach, price: price, image: image};
    let products = JSON.parse(localStorage.getItem('products'));
    if (!products) {
            let products = [];
            products.push(product);
        console.log(products)
        localStorage.setItem('products', JSON.stringify(products));
        }
    else {
        products.push(product);
        localStorage.setItem('products', JSON.stringify(products));
    }
    }
let anchorElement = document.createElement('a');
anchorElement.href = 'list.html';
anchorElement.innerText = 'На сторінку товарів';
document.body.appendChild(anchorElement);



