function Car() {
    this.enabled = false; //let enabled = false; - it will not be seen anywhere in the output;
    this.enableEngine = function () {
        enabled = true;
        console.log('The engine is enabled!');
    }
    this.disableEngine = function () {
        enabled = false;
        console.log('The engine is disabled!');
    }
}

function Audi(model) {
    Car.call(this);
    this.model = model;
}

const q5 = new Audi('Q5');
q5.enableEngine();

const User = function (name, type) {
    this.name = name;
    this.type = type;
    this.sayHello = funсtion() {
        return `Hello, I'm ${this.name}, and my type is ${this.type}`;
    };
};

const StudentFunctionality = function () {
    this.sayCourse = function () {
        return 'Course => 5';
    }
}



const vasya = new User('Vasya', 'student');

console.log(vasya.sayHello());

function multiply(a, b) {
    return a * b;
}

const double = multiply.bind(null, 2);


function greetFn(salute) {
    return function (name) {
        return salute + ' ' + name;
    }

}

const greet = greetFn("Hello,");

console.log(greet("Alex")); //Hello, Alex
console.log(greet("Max"));