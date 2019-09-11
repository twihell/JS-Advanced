/*Створіть функцію-конструктор, яка буде мати наступні методи:
  sum(); додавання
  multiply() множення
  divide() ділення
  subtraction() віднімання
 Також у функції-конструктор повина бути локальна зміна типу const result = “The result is:”
  і ви маєте її використовувати у методах вказаних вище, наприклад:
  const calc = new Calculator();
  calc.sum(2,3) // виведе  “The result is: 5”;
  calc.divide(9,3) // виведе  “The result is: 3”; */

function Calculator() {
    const result = "The result is: ";
    this.sum = function (numberOne, numberTwo) {
        console.log(result + (numberOne + numberTwo));
    }
    this.multiply = function (numberOne, numberTwo) {
        console.log(result + (numberOne * numberTwo));
    }
    this.divide = function (numberOne, numberTwo) {
        if (numberOne < numberTwo) {
            console.log(result + (numberTwo / numberOne));
        } else if (numberOne > numberTwo) {
            console.log(result + (numberOne / numberTwo));
        }
    }
    this.subtract = function (numberOne, numberTwo) {
        if (numberOne < numberTwo) {
            console.log(result + (numberTwo - numberOne));
        } else if (numberOne > numberTwo) {
            console.log(result + (numberOne - numberTwo));
        }
    }
}

const calc = new Calculator();

calc.sum(2, 3); //5
calc.divide(12, 3); //4
calc.multiply(3, 3); //9
calc.subtract(9, 3); //6