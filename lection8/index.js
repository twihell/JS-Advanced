


// document.cookie = "surname=Dufrain";


// const today = new Date();
// today.setTime(today.getTime() + 50 * 1000);
// const timer = today;
// document.cookie = "name=Alex; expires =" + timer ";

// console.log(document.cookie);



const h1 = document.querySelector('h1');
const h2 = document.querySelector('h2');

localStorage.setItem('person', JSON.stringify(
    {
        name: 'Yuri',
        surname: 'Petrichenko'
    }
));

const data = JSON.parse(localStorage.getItem('person'));

h1.textContent = data.name;
h2.textContent = data.surname;
