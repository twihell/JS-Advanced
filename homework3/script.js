/*Make this with: apply method*/

let fruits = [
  {
    name: 'Lemon',
    color: 'Yellow'
  },
  {
    name: 'Apple',
    color: 'Red'
  },
  {
    name: 'Pineapple',
    color: 'Brown'
  }
];

function printFruitInfo() {
  document.write(this.name + ' is ' + this.color);
  document.write('<hr>');
}

for (let i = 0; i < fruits.length; i++) {
  printFruitInfo.apply(fruits[i], [fruits.name, fruits.color]);

}