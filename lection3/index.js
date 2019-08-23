// function setPrototypeOf(ob1,ob2) {
//     if(ob1 && ob2){
//      ob1.__proto = ob2;
//      return ob1;
//     }
//     return new Error('Some of the objects not exist');
//    }

const noBinding = {
    person: "NG-SPEEDSTER",
    showText() {
        setTimeout(this.printInfo.bind(this),2000)  
        },
        printInfo() {
            document.write(`Hello ${this.person}`);
     }
}
 
noBinding.showText();


let fruits = [
    {
        name: "Lemon",
        color: "Yellow"
    },
    {   
        name: "Banana",
        color: "Yellow"
    },
    {
        name: "Pineapple",
        color: "Brown"
    }
];

function printFruitInfo() {
    document.write(`Fruit name: ${this.name}, has color: ${this.color} `);
    document.write('<hr>');
}

for (let i=0; i < fruits.length; i++) {

    printFruitInfo.call(fruits[i], fruits[i].name, fruits[i].color);
}