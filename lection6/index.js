// const list = document.querySelector('.listOfElements');
// let currentStyle;

// console.dir(list.childNodes[1].textContent.trim().split(' '));
// //nodeType: 8 => comment

// console.dir(list.childNodes);

// list.childNodes.forEach(element => {
//     if(element.nodeType === 8) {
//         currentStyle = element.textContent.trim().split(' ');
//     }
//     if(element.nodeType === 1) {
//         element.style[currentStyle[0]] = currentStyle[1];

//     }
// })

//-----------------------------------------------------------------

// const section = document.querySelector('#section');
// const text = 'Hello world!';
// const p = document.createElement('p');
// p.textContent = text;

// section.appendChild(p);

// const h = document.createElement('h1');
// console.log(h)
// const text1 = "JavaScript";
// h.textContent = text1;
// section.insertBefore(h,p);
// const hr = document.createElement('hr');
// section.replaceChild(hr,p);

// h.remove();

//--------------------------------------------------------------

// const bodyElement = document.querySelector('body');
// const h1 = document.createElement('h1');
// bodyElement.childNodes.forEach(el => {
//     if(el.nodeType === 3) {
//         console.dir(el.nodeValue.split(' '));
//         h1.textContent = el.nodeValue;
//         console.log(el.nodeValue);
//     }
//     // el.innerText
// })

// bodyElement.appendChild(h1);

//----------------------------------------------------------------

const btn = document.querySelector('button');
// const removeClass = document.querySelector('.removeClass');

btn.addEventListener('click', (e) => {
    btn.classList.toggle('btn-primary');
});

// removeClass.addEventListener('click', (e) => {
//     btn.classList.remove('btn-primary');
// });


