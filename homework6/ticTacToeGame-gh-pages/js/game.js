let field;
let coloredBlock;


for (let i = 0; i < 9; i++) {
    field = document.getElementById('game');
    field.innerHTML += "<button class='block'></button>";
}


function toggle(button) {

    if (coloredBlock) {
        coloredBlock.classList.remove('block-on-click');

    } 
    coloredBlock = button;
    button.classList.add('block-on-click');
}

field.addEventListener('click', (event) => {
    let target = event.target;
    if (target.tagName === 'BUTTON') {
        toggle(target);
    } 
})