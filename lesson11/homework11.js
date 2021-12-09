// -створити форму з інпутами для name та age.
//     При відправці форми записати об'єкт в localstorage
let saveLocalstor = document.getElementById('saveLocalstor');
let userName = document.forms.localstorage.userName;
let age = document.forms.localstorage.age;
saveLocalstor.onclick = function (e) {
    e.preventDefault();
    localStorage.setItem('name', JSON.stringify(userName.value));
    localStorage.setItem('age', JSON.stringify(age.value));
};

//
// -створити форму з інпутами для model,type та volume автівки.
//     при відпарвці форми об'єкти зберігаються в масиві в локальному сховищі.
let saveCar = document.getElementById('saveCar');
let model = document.forms.car.model;
let carType = document.forms.car.carType;
let volume = document.forms.car.volume;

saveCar.onclick = function (e) {
    e.preventDefault();
    localStorage.setItem('model', JSON.stringify(model.value));
    localStorage.setItem('type', JSON.stringify(carType.value));
    localStorage.setItem('volume', JSON.stringify(volume.value));
};