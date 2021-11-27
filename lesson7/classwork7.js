// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Cars(model, manufacturer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }
    this.info = function (object) {
        for (const key in object) {
            if (typeof object[key] !== "function") {
                console.log(`${key} - ${object[key]};`);
            }
        }
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed = newSpeed;
        return newSpeed;
    };
    this.changeYear = function (newValue) {
        this.year = newValue;
        return newValue;
    };
    this.addDriver = function (object, driverName, driverSurname) {
        object.driver = {
            driverName: driverName,
            driverSurname: driverSurname
        }
        return object;
    }
}
let cars = new Cars('BMW', 'Germany', 2020, '180 km/h', '2,5l');
console.log(cars);
cars.drive();
cars.info(cars);
console.log(cars.increaseMaxSpeed('200 km/h'))
console.log(cars.changeYear(2021))
console.log(cars.addDriver(cars, 'Lidiya', 'Kocherzhuk'));


//
//
// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Cars2 {

    constructor(model, manufacturer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;

    }
    drive () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} на годину`)
    }

    info (object) {
        for (const key in object) {
            if (typeof object[key] !== "function") {
                console.log(`${key} - ${object[key]};`);
            }
        }
    }

    increaseMaxSpeed(newSpeed) {
        this.maxSpeed = newSpeed;
        return newSpeed;
    }

    changeYear(newValue) {
        this.year = newValue;
        return newValue;
    }

    addDriver(object, driver) {
        object.driver = driver;
        return object;
    }

}

let car = new Cars2('Subaru', 'Japan', 2020, '180 km/h', '2 l');
car.drive();
car.info(car);
console.log(car.increaseMaxSpeed('200 km/h'));
console.log(car.changeYear(2021));


class Man {
    constructor(manName, manSurname, manAge) {
        this.manName = manName;
        this.manSurname = manSurname;
        this.manAge = manAge;
    }
}

console.log(car.addDriver(car, new Man('Bohdan', 'Kocherzhuk', 26))) ;

//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

class Cinderella {
    constructor(nameOfHero, age, footSize) {
        this.nameOfHero = nameOfHero;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderella = [
    new Cinderella('Olivia',20, 35),
    new Cinderella('Emma',17, 34),
    new Cinderella('Ava',19, 36),
    new Cinderella('Charlotte',18, 37),
    new Cinderella('Sophia',19, 38),
    new Cinderella('Amelia',20, 39),
    new Cinderella('Isabella',18, 38),
    new Cinderella('Mia',21, 39),
    new Cinderella('Emma',17, 40),
    new Cinderella('Olivia',18, 36)
]

class Prince extends Cinderella {

}

let prince = new Prince('Charming', 22, 35);
for (let i = 0; i < cinderella.length; i++) {
    if (cinderella[i].footSize === prince.footSize) {
        console.log(`Принц ${prince.nameOfHero} знайшов свою попелюшку! Її звати ${cinderella[i].nameOfHero} їй ${cinderella[i].age})`);
    }
}

cinderella.find((element) => {
    if (element.footSize === prince.footSize) {
    console.log(`Принц ${prince.nameOfHero} знайшов свою попелюшку! Її звати ${element.nameOfHero} їй ${element.age})`)
    }
});