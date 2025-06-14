class Person {
  private name: string;
  private age: number;

  // Конструктор по умолчанию
  constructor();
  // Конструктор с параметрами
  constructor(name: string, age: number);
  constructor(name?: string, age?: number) {
    this.name = name ?? "Неизвестно";
    this.age = age ?? 0;
  }

  // Геттеры
  public getName(): string {
    return this.name;
  }

  public getAge(): number {
    return this.age;
  }

  // Сеттеры
  public setName(name: string): void {
    this.name = name;
  }

  public setAge(age: number): void {
    this.age = age;
  }

  // Метод для вывода информации
  public display(): void {
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
  private innerRadius: number;

  constructor(innerRadius: number) {
    this.innerRadius = innerRadius;
  }

  public setInnerRadius(value: number): void {
    this.innerRadius = value;
  }

  public getInnerRadius(): number {
    return this.innerRadius;
  }

  public calculateArea(): number {
    // Площадь правильного восьмиугольника через радиус вписанной окружности:
    // A = 2 * r^2 * (1 + √2)
    return 2 * this.innerRadius ** 2 * (1 + Math.SQRT2);
  }

  public calculatePerimeter(): number {
    // Сторона s = r * √(2 - √2)
    // Периметр = 8 * s
    const side = this.innerRadius * Math.sqrt(2 - Math.sqrt(2));
    return 8 * side;
  }

  public display(): void {
    console.log(`Вписанный радиус: ${this.innerRadius}`);
    console.log(`Площадь: ${this.calculateArea().toFixed(2)}`);
    console.log(`Периметр: ${this.calculatePerimeter().toFixed(2)}`);
  }
}

// Пример использования
const oct = new Octagon(10);
oct.display();

class Student {
  private name: string;
  private birthDate: Date;
  private group: string;
  private studentId: number;
  private averageScore: number;

  constructor(name: string, birthDate: Date, group: string, studentId: number, averageScore: number) {
    this.name = name;
    this.birthDate = birthDate;
    this.group = group;
    this.studentId = studentId;
    this.averageScore = averageScore;
  }

  public getName(): string {
    return this.name;
  }

  public setName(name: string): void {
    this.name = name;
  }

  public getBirthDate(): Date {
    return this.birthDate;
  }

  public setBirthDate(birthDate: Date): void {
    this.birthDate = birthDate;
  }

  public getGroup(): string {
    return this.group;
  }

  public setGroup(group: string): void {
    this.group = group;
  }

  public getStudentId(): number {
    return this.studentId;
  }

  public setStudentId(id: number): void {
    this.studentId = id;
  }

  public getAverageScore(): number {
    return this.averageScore;
  }

  public setAverageScore(score: number): void {
    this.averageScore = score;
  }

  public getAge(): number {
    const now = new Date();
    const age = now.getFullYear() - this.birthDate.getFullYear();
    const monthDiff = now.getMonth() - this.birthDate.getMonth();
    const dayDiff = now.getDate() - this.birthDate.getDate();
    return monthDiff < 0 || (monthDiff === 0 && dayDiff < 0) ? age - 1 : age;
  }

  public isExcellentStudent(): boolean {
    return this.averageScore >= 4.8;
  }

  public toString(): string {
    return `Студент: ${this.name}, Возраст: ${this.getAge()} лет, Группа: ${this.group}, ID: ${this.studentId}, Средний балл: ${this.averageScore.toFixed(2)} (${this.isExcellentStudent() ? "Отличник" : "Обычный студент"})`;
  }
}

// 🔹 Пример использования:
const student1 = new Student("Иван Иванов", new Date(2004, 2, 15), "ПРОГ-101", 12345, 4.9);
const student2 = new Student("Анна Смирнова", new Date(2005, 10, 5), "ПРОГ-102", 23456, 4.5);

console.log(student1.toString());
console.log(student2.toString());

class BankAccount {
  public accountNumber: string;
  private balance: number;

  constructor(accountNumber: string, initialBalance: number = 0) {
    this.accountNumber = accountNumber;
    this.balance = initialBalance;
  }

  public deposit(amount: number): void {
    if (amount > 0) {
      this.balance += amount;
      console.log(`✅ Пополнение: +${amount}. Текущий баланс: ${this.balance}`);
    } else {
      console.log("❌ Сумма пополнения должна быть положительной.");
    }
  }

  public withdraw(amount: number): void {
    if (amount <= this.balance && amount > 0) {
      this.balance -= amount;
      console.log(`✅ Снятие: -${amount}. Текущий баланс: ${this.balance}`);
    } else {
      console.log("❌ Недостаточно средств или неверная сумма.");
    }
  }

  public getBalance(): number {
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
  private name: string;
  private birthYear: number;

  constructor(name: string, birthYear: number) {
    this.name = name;
    this.birthYear = birthYear;
  }

  public getName(): string {
    return this.name;
  }

  public getBirthYear(): number {
    return this.birthYear;
  }

  public toString(): string {
    return `${this.name} (род. ${this.birthYear})`;
  }
}

class Book {
  private title: string;
  private author: Author;

  constructor(title: string, author: Author) {
    this.title = title;
    this.author = author;
  }

  public getAuthorInfo(): string {
    return this.author.toString();
  }

  public setAuthor(author: Author): void {
    this.author = author;
  }

  public getTitle(): string {
    return this.title;
  }

  public displayBookInfo(): string {
    return `Книга: "${this.title}", Автор: ${this.getAuthorInfo()}`;
  }
}

// 🔹 Пример использования:
const author = new Author("Лев Толстой", 1828);
const book = new Book("Война и мир", author);
console.log(book.displayBookInfo());

class Engine {
  private power: number;

  constructor(power: number) {
    this.power = power;
  }

  public getPower(): number {
    return this.power;
  }

  public toString(): string {
    return `${this.power} л.с.`;
  }
}

class Passenger {
  private name: string;

  constructor(name: string) {
    this.name = name;
  }

  public getName(): string {
    return this.name;
  }
}

class Car {
  private model: string;
  private engine: Engine;
  private passengers: (Passenger | null)[] = [null, null];

  constructor(model: string, engine: Engine) {
    this.model = model;
    this.engine = engine;
  }

  public addPassenger(passenger: Passenger): string {
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i] === null) {
        this.passengers[i] = passenger;
        return `✅ Пассажир ${passenger.getName()} добавлен.`;
      }
    }
    return "❌ Нет свободных мест!";
  }

  public removePassenger(passenger: Passenger): string {
    for (let i = 0; i < this.passengers.length; i++) {
      if (this.passengers[i]?.getName() === passenger.getName()) {
        this.passengers[i] = null;
        return `🧾 Пассажир ${passenger.getName()} удалён.`;
      }
    }
    return `❌ Пассажир ${passenger.getName()} не найден.`;
  }

  public displayInfo(): void {
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