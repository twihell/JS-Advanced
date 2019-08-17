/* У нас є об'єкт юзер 
const user = {
  name: ‘alex’
}
а завданя таке: зробіть такий ланцюжок прототипів 
щоб коли я викликав user.age або user.bornDate я отримав дані, але тільки за допомогою прототипів,
тому що у юзера повина бути тільки одна властивіть "name" і все.
Результат повинен бути як на картинці. */

const user = {
    name: 'alex'
};

const sameUser = {
    age: 26
};

const yetSameUser =  {
    bornDate: 1993
};

user.__proto__ = sameUser;
sameUser.__proto__ = yetSameUser;

console.log(user.name);
console.log(user.age);
console.log(user.bornDate);
