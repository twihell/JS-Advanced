let field;
let currentSymbol = 'X';
const player = document.getElementById('player');
player.textContent = 'Player X Move';

for (let i = 0; i < 9; i++) {
    field = document.getElementById('game');
    field.innerHTML += "<button class='block'></button>";
    
}


field.addEventListener('click', (event) => {
    let target = event.target;
    if (target.textContent != '') {
        return;
    }
    if (target.tagName === 'BUTTON') {
        firstMove(target);
    }
    
})

function firstMove(button) {
    button.textContent = currentSymbol;
    
    if (currentSymbol === 'X') {
        player.textContent = 'Player O Move';
        currentSymbol = 'O';
    } else {
        player.textContent = 'Player X Move';
        currentSymbol = 'X';
       
    }    
}

