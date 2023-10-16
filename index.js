/* Функція конструктор: Vehicle
 * Властивості:
 * --------------------------------------
 * | Аргументи  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 */
// Створюємо функцію конструктор Vehicle.
function Vehicle(brand, model, year, mileage) {
  //  Записуєм в this.brand значення аргументу brand, в this.model значення аргументу model і так далі зі всіми аргументами
  this.brand = brand;
  this.model = model;
  this.year = year;
  this.mileage = mileage;
  // Рядковому представленю Vehicle призначаємо функцію яка повертає рядок: <brand> <model> <year>
  this.toString = function () {
    return `${this.brand} ${this.model} ${this.year}`
  };
  // valueOf - це метод, який використовується JavaScript для конвертації об'єкта в примітивне значення. Ми перевизначаємо його тут, щоб він повертав this.mileage.
  this.valueOf = function () {
    return `${this.mileage}`
  };
}
// console.log(new Vehicle("Audi", "Allroad", 1999, 465000));
// console.log(Vehicle.length);
// console.log(Vehicle.name);


/*
 * Функція конструктор: Car
 * Властивості:
 * ----------------
 * | Властивість  |
 * |--------------|
 * | brand        |
 * | model        |
 * | year         |
 * | mileage      |
 * | fuelType     |
 * | speed        |
 */

//Створюємо Car - це ще один конструктор, який наслідує властивості і методи з Vehicle за допомогою функції apply.
function Car(brand, model, year, mileage, fuelType, speed) {
  // Викликаємо конструктор Vehicle за допомогою apply, передаємо в нього this, [brand, model, year, mileage].
  Vehicle.apply(this, [brand, model, year, mileage]);
  //  Записуєм в this.fuelType значення аргументу fuelType, в this.speed значення аргументу speed
  this.fuelType = fuelType;
  this.speed = speed;
  // Ми можемо перевизначити методи з Vehicle в Car.
  // Рядковому представленю прототипу Car призначаємо функцію яка повертає рядок: <brand> <model> <year> - <fuelType>.
  this.toString = function () {
    return `${this.brand} ${this.model} ${this.year} - ${this.fuelType}`
  };
  // Cтворюємо метод accelerate для прискорення швидкості прототипу Car, збільшує this.speed на передане число та виводить рядок в консоль: Автомобіль <brand> <model> прискорився до швидкості <speed> км/год
  this.accelerate = function (value) {
    this.speed = this.speed + value;
    return `Автомобіль ${this.brand} ${this.model} прискорився до швидкості ${this.speed} км/год`
  };
  // Метод brake для гальмування прототипу Car,зменшує this.speed на передане число та виводить рядок в консоль в консоль: Автомобіль <brand> <model> зменшив до швидкості <speed> км/год
  this.brake = function (value) {
    this.speed = this.speed - value;
    return `Автомобіль ${this.brand} ${this.model} зменшив до швидкості ${this.speed} км/год`
  }
}
const audiB8 = new Car("Audi", "Allroad", 1999, 465000, "gasoline", 250);
// console.log(audiB8.accelerate(20));
// console.log(audiB8.brake(20));

// Створюємо новий екземпляр об'єкта Car
/*
 * Екземпляр об'єкту: Car
 * Властивості:
 * --------------------------------------
 * | Властивість  |  Значення           |
 * |--------------|---------------------|
 * | brand        |  "Audi"             |
 * | model        |  "A6"               |
 * | year         |  2018               |
 * | mileage      |  30000              |
 * | fuelType     |  "Petrol"           |
 * | speed        |  0                  |
 */
const newCar = new Car("Audi", "A6", 2018, 30000, "Petrol", 0);
// Викличемо функції toString та valueOf об'єкта car
console.log(newCar.toString());
console.log(newCar.valueOf());
// Використовуємо методи для прискорення та передаємо 50
newCar.accelerate(50);
// Використовуємо методи для гальмування та передаємо 20
newCar.brake(20);
console.log(newCar.speed);

/*
 * Функція конструктор Truck
 * Властивості:
 * --------------------
 * | Властивість      |
 * |------------------|
 * | brand            |
 * | model            |
 * | year             |
 * | mileage          |
 * | color            |
 * | engineType       |
 * | towingCapacity   |
 * | fuelType         |
 * | transmissionType |
 * | doors            |
 * | weight           |
 */

// Конструктор Truck наслідуємо Vehicle викликавши його в конструкторі з call
function Truck(
  brand,
  model,
  year,
  mileage,
  color,
  engineType,
  towingCapacity,
  fuelType,
  transmissionType,
  doors,
  weight
) {
  // Викликаємо Vehicle.call та передаємо в нього: this, brand, model, year, mileage
  Vehicle.call(this, brand, model, year, mileage);
  //  Записуєм в this.color значення аргументу color, в this.engineType значення аргументу engineType і так далі зі всіми аргументами
  this.color = color;
  this.engineType = engineType;
  this.towingCapacity = towingCapacity;
  this.fuelType = fuelType;
  this.transmissionType = transmissionType;
  this.doors = doors;
  this.weight = weight;
  // Додатковий метод specific для прототипу Trucks, примає число якщо воно більше towingCapacity виводить рядок в консоль: Навантаження занадто важке для буксирування, якщо ні то рядок Тягнення навантаження...
  this.tow = function (value) {
    return (value > this.towingCapacity ? `Навантаження занадто важке для буксирування` : `Тягнення навантаження ${value}`)
  }
}

// Створюємо новий екземпляр об'єкта Truck
/*
 * Екземпляр об'єкту: myTruck
 * Властивості:
 * ---------------------------------------------------
 * | Властивість      | Значення                     |
 * |------------------|------------------------------|
 * | brand            | "Toyota"                     |
 * | model            | "Tundra"                     |
 * | year             | 2019                         |
 * | mileage          | 20000                        |
 * | color            | "Red"                        |
 * | engineType       | "V8"                         |
 * | towingCapacity   | 10000                        |
 * | fuelType         | "Gasoline"                   |
 * | transmissionType | "Automatic"                  |
 * | doors            | 4                            |
 * | weight           | 5600                         |
 */
const newTruck = new Truck("Toyota", "Tundra", 2019, 20000, "Red", "V8", 10000, "Gasoline", "Automatic", 4, 5600);
// Викликаємо метод tow з вагою меншою за towingCapacity
console.log(newTruck.tow(4000));
// Викликаємо метод tow з вагою більшою за towingCapacity
console.log(newTruck.tow(11000));

// Додаємо метод drive для прототипу Car, який збільшує kilometers на передане число, та виводить Подорожуємо <kilometers> кілометрів у <brand> <model>.
Car.drive = function (km) {
  this.mileage = this.mileage + km;
  return `Подорожуємо ${km} кілометрів у ${this.brand} ${this.model}`
}
// Використовуємо bind для зв'язування методу drive з конкретним об'єктом car.
const travel = Car.drive.bind(newCar);
// Це створює нову функцію, в якій this постійно встановлено на car, незалежно від того, як функцію викликають.
// Викликаємо функцію зі значенням 100,
console.log(travel(100));

/*
 * Функція конструктор: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість   |
 * |---------------|
 * | brand         |
 * | model         |
 * | year          |
 * | mileage       |
 * | batteryCapacity|
 */

function ElectricCar(brand, model, year, mileage, batteryCapacity) {
  // Перевіряємо, чи функцію було викликано з new, якщо ні виволимо помилку "Конструктор має бути викликаний з 'new'"
  if (new.target) {
    // Викликаємо Car.call та передаємо в нього this, brand, model, year, mileage
    Car.call(this, brand, model, year, mileage);
    //  Записуєм в this.batteryCapacity значення аргументу batteryCapacity
    this.batteryCapacity = batteryCapacity;
    // Перевизначаємо toString для прототипу ElectricCar він має повертати <brand> <model> <year> - Батарея: <batteryCapacity> kWh
    this.toString = function () {
      return `${this.brand} ${this.model} ${this.year} - Батарея: ${this.batteryCapacity} kWh`
    }
  } else {
    return new ElectricCar(brand, model, year, mileage, batteryCapacity);
  }
}

// Створюємо новий екземпляр ElectricCar
/*
 * Екземпляр об'єкту: ElectricCar
 * Властивості:
 * --------------------------------------
 * | Властивість     | Значення          |
 * |-----------------|-------------------|
 * | brand           | Tesla             |
 * | model           | Model S           |
 * | year            | 2020              |
 * | mileage         | 10000             |
 * | batteryCapacity | 100               |
 */
const newElectroCar = new ElectricCar("Tesla", "Model S", 2020, 10000, 100);
// Викликаємо метод toString об'єкту tesla та виводимо в консоль
console.log(newElectroCar.toString());
//done




// Функція конструктор - це нібито звичайна функція, але її ім'я починається з великої літери і її для виконання обов'язковий префікс new
// new Order - де Order це ім'я функції-конструктор

// new.target - це вбудованна зміна яка дозволяє перевірити чи викликана функція з  конструктором new чи без нього
// повертає посилання на конструктор який був викликаний цим new
// цікава наступна конструкція
// function Test(data) {}
// if (new.target) {
//   робимо код фугкції
// } else {
//   return new Test(data)
// }}

// length - вбудована властивість, яка вказує на кількість параметрів в конструкторі
// name - вбудована властивість, яка показує ім'я конструктора
// prototype - це вбудована властивість, яка представляє доступ до прототипу об'єкта, що створюється функцією

// apply(thisArg, [arguments]) - thisArg об'єкт що передається в функцію, Аргументи передаються масивом
// bind() - 
// call()


