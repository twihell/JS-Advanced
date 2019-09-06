//вытащить элемент с таской из списка

section.addEventListener('click', function(event) {
    if(event.target.tagName) {
    console.log(event.target.tagName);
    }
})

//заменить элемент с одной таской на элемент с другой таской

section.addEventListener('click', function(event) {
    if(event.target.tagName === 'p' && inp.value) {
    console.log(event.target);
    console.log(inp.value);
    let p = document.createElement('p');
    p.textContent = inp.value;
    section.replaceChild(p, event.target);
    }
})

//-----------------------------------------------------------------------


