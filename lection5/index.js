function Person(name) {
    this.name = name;
}

function Developer(name, specializeIn) {
    Person.call(this,name);
    this.specializeIn = specializeIn;
}

Developer.prototype = Object.create(Person.prototype);
Developer.prototype.saySomething = function() {
    return `Hello I'm ${this.name} and I'm ${this.specializeIn}`;
}
Developer.prototype.constructor = Developer; // нужно, ибо после Object.create объект пустой, без конструктора и других базовых properties;
const Yuri = new Developer('Yuri', 'JS-developer');

