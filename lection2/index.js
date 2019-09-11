// const user = {
//     name: 'Alex'
// };

// user._proto_= {age: 25};
// console.log(user);

// const another = {
//     age: 23
// };

// const human = {
// 	greet: 'Hello world!'
// };

// const user = {
// 	age: 21,
//   name: 'Ng-speedster'
// };

// user._proto_ = human; // _proto_ - просто сcылка. deprecated. не то же самое, что prototype

// for (let key in user) {
// 	if (user.hasOwnProperty(key)) {
//   	console.log(key);
//   } 
// }

// const obj1 = new Object({}); //properties типа "constructor" присутствуют
// const obj2 = Object.create(null); //пустой объект без каких-либо properties прототипов
// //прототип - read-only. менять нельзя

// let fruits = {
//     apple: 3,
//     lemon: 0,
//     bananas: 5,
//     pineapple: 0
// };

// let vegetables = {
//     potato: 2,
//     tomato: 1,
//     carrot: 0
// };

// Object.setPrototypeOf(fruits, vegetables);
// console.log(fruits);

// let sortedFoods = {};

// for (let key in fruits) {
//     if (fruits[key] != 0) {
//         sortedFoods[key] = fruits[key];
//     } 
// }

// console.log(sortedFoods);

// function Person(name,surname) {
//     this.name = name;
//     this.surname = surname;
//     this.sayHello = function() {
//         console.log("Hello, " + this.name + this.surname);
//     }
// }

// const user = new Person("Rita ","Aloshkina ");

// user.sayHello();

// function Calculator() {
//     this.sum = function(firstNumber,secondNumber) {
//         console.log(firstNumber+secondNumber);
//     }
// }

// const calc = new Calculator();

// calc.sum(2,2);

function Car(name,color) {
    this.name = name;
    this.color = color;
}

Car.prototype = {
    constructor: Car,
    madeIn: 'Ukraine'
}

function Audi(name,color) {
    this.name = name;
    this.color = color;
}


Audi.prototype = Object.create(Car.prototype);
// Audi.prototype = Car.prototype;
Audi.prototype.constructor = Audi;

const q5 = new Audi('q5','silver');

console.log(q5 instanceof Car);

console.log(q5.madeIn);