"use strict";
class Person {
    constructor(name, age) {
        this.name = name !== null && name !== void 0 ? name : "Неизвестно";
        this.age = age !== null && age !== void 0 ? age : 0;
    }
    // Геттеры
    getName() {
        return this.name;
    }
    getAge() {
        return this.age;
    }
    // Сеттеры
    setName(name) {
        this.name = name;
    }
    setAge(age) {
        this.age = age;
    }
    // Метод для вывода информации
    display() {
        console.log(`Имя: ${this.name}, Возраст: ${this.age}`);
    }
}
// Создание экземпляров класса
const person1 = new Person("Алиса", 22);
const person2 = new Person();
person2.setName("Боб");
person2.setAge(30);
// Вывод информации
person1.display();
person2.display();
class Octagon {
    constructor(innerRadius) {
        this.innerRadius = innerRadius;
    }
    setInnerRadius(value) {
        this.innerRadius = value;
    }
    getInnerRadius() {
        return this.innerRadius;
    }
    calculateArea() {
        // Площадь правильного восьмиугольника через радиус вписанной окружности:
        // A = 2 * r^2 * (1 + √2)
        return 2 * this.innerRadius ** 2 * (1 + Math.SQRT2);
    }
    calculatePerimeter() {
        // Сторона s = r * √(2 - √2)
        // Периметр = 8 * s
        const side = this.innerRadius * Math.sqrt(2 - Math.sqrt(2));
        return 8 * side;
    }
    display() {
        console.log(`Вписанный радиус: ${this.innerRadius}`);
        console.log(`Площадь: ${this.calculateArea().toFixed(2)}`);
        console.log(`Периметр: ${this.calculatePerimeter().toFixed(2)}`);
    }
}
// Пример использования
const oct = new Octagon(10);
oct.display();
class Student {
    constructor(name, birthDate, group, studentId, averageScore) {
        this.name = name;
        this.birthDate = birthDate;
        this.group = group;
        this.studentId = studentId;
        this.averageScore = averageScore;
    }
    getName() {
        return this.name;
    }
    setName(name) {
        this.name = name;
    }
    getBirthDate() {
        return this.birthDate;
    }
    setBirthDate(birthDate) {
        this.birthDate = birthDate;
    }
    getGroup() {
        return this.group;
    }
    setGroup(group) {
        this.group = group;
    }
    getStudentId() {
        return this.studentId;
    }
    setStudentId(id) {
        this.studentId = id;
    }
    getAverageScore() {
        return this.averageScore;
    }
    setAverageScore(score) {
        this.averageScore = score;
    }
    getAge() {
        const now = new Date();
        const age = now.getFullYear() - this.birthDate.getFullYear();
        const monthDiff = now.getMonth() - this.birthDate.getMonth();
        const dayDiff = now.getDate() - this.birthDate.getDate();
        return monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? age - 1 : age;
    }
    isExcellentStudent() {
        return this.averageScore >= 4.8;
    }
    toString() {
        return `Студент: ${this.name}, Возраст: ${this.getAge()} лет, Группа: ${this.group}, ID: ${this.studentId}, Средний балл: ${this.averageScore.toFixed(2)} (${this.isExcellentStudent() ? "Отличник" : "Обычный студент"})`;
    }
}
// 🔹 Пример использования:
const student1 = new Student("Иван Иванов", new Date(2004, 2, 15), "ПРОГ-101", 12345, 4.9);
const student2 = new Student("Анна Смирнова", new Date(2005, 10, 5), "ПРОГ-102", 23456, 4.5);
console.log(student1.toString());
console.log(student2.toString());
class BankAccount {
    constructor(accountNumber, initialBalance = 0) {
        this.accountNumber = accountNumber;
        this.balance = initialBalance;
    }
    deposit(amount) {
        if (amount > 0) {
            this.balance += amount;
            console.log(`✅ Пополнение: +${amount}. Текущий баланс: ${this.balance}`);
        }
        else {
            console.log("❌ Сумма пополнения должна быть положительной.");
        }
    }
    withdraw(amount) {
        if (amount <= this.balance && amount > 0) {
            this.balance -= amount;
            console.log(`✅ Снятие: -${amount}. Текущий баланс: ${this.balance}`);
        }
        else {
            console.log("❌ Недостаточно средств или неверная сумма.");
        }
    }
    getBalance() {
        return this.balance;
    }
}
// 🔹 Пример использования:
const account = new BankAccount("RU-0011223344", 1000);
account.deposit(500);
account.withdraw(300);
account.withdraw(1500); // ошибка
console.log("🔎 Итоговый баланс:", account.getBalance());
class Author {
    constructor(name, birthYear) {
        this.name = name;
        this.birthYear = birthYear;
    }
    getName() {
        return this.name;
    }
    getBirthYear() {
        return this.birthYear;
    }
    toString() {
        return `${this.name} (род. ${this.birthYear})`;
    }
}
class Book {
    constructor(title, author) {
        this.title = title;
        this.author = author;
    }
    getAuthorInfo() {
        return this.author.toString();
    }
    setAuthor(author) {
        this.author = author;
    }
    getTitle() {
        return this.title;
    }
    displayBookInfo() {
        return `Книга: "${this.title}", Автор: ${this.getAuthorInfo()}`;
    }
}
// 🔹 Пример использования:
const author = new Author("Лев Толстой", 1828);
const book = new Book("Война и мир", author);
console.log(book.displayBookInfo());
class Engine {
    constructor(power) {
        this.power = power;
    }
    getPower() {
        return this.power;
    }
    toString() {
        return `${this.power} л.с.`;
    }
}
class Passenger {
    constructor(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
}
class Car {
    constructor(model, engine) {
        this.passengers = [null, null];
        this.model = model;
        this.engine = engine;
    }
    addPassenger(passenger) {
        for (let i = 0; i < this.passengers.length; i++) {
            if (this.passengers[i] === null) {
                this.passengers[i] = passenger;
                return `✅ Пассажир ${passenger.getName()} добавлен.`;
            }
        }
        return "❌ Нет свободных мест!";
    }
    removePassenger(passenger) {
        var _a;
        for (let i = 0; i < this.passengers.length; i++) {
            if (((_a = this.passengers[i]) === null || _a === void 0 ? void 0 : _a.getName()) === passenger.getName()) {
                this.passengers[i] = null;
                return `🧾 Пассажир ${passenger.getName()} удалён.`;
            }
        }
        return `❌ Пассажир ${passenger.getName()} не найден.`;
    }
    displayInfo() {
        console.log(`🚗 Автомобиль: ${this.model}`);
        console.log(`🛠️ Двигатель: ${this.engine.toString()}`);
        console.log(`👥 Пассажиры:`);
        this.passengers.forEach((p, index) => {
            console.log(`   Место ${index + 1}: ${p ? p.getName() : "пусто"}`);
        });
    }
}
// 🔹 Пример использования:
const engine = new Engine(150);
const car = new Car("Toyota Camry", engine);
const passenger1 = new Passenger("Иван");
const passenger2 = new Passenger("Мария");
const passenger3 = new Passenger("Петр");
console.log(car.addPassenger(passenger1));
console.log(car.addPassenger(passenger2));
console.log(car.addPassenger(passenger3)); // места нет
car.displayInfo();
console.log(car.removePassenger(passenger1));
car.displayInfo();
