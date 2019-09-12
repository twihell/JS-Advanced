// let field;
let initialStep = 0;
// const player = document.getElementById('player');
// player.textContent = 'Player X Move';
const gamePlace = document.querySelector('#game');
const resetButton = document.getElementById('btnAgain');



function step(event) {
    let target = event.target;
    if (target.textContent) {
        return warning(target);
    }
    handleStep(target);
}


function handleStep(target) {
    if (target.tagName.toLowerCase() === 'button' && !target.textContent) {
        if (initialStep % 2 === 0) {
            target.textContent = 'X';
        } else {
            target.textContent = 'O';
        }
        initialStep++;
    }

    checkWinner();
    
}

function warning(target) {
    target.classList.add('warning');
    setTimeout(() => {
        target.classList.remove('warning');
    }, 1000)
}


function checkWinner() {
    let buttons = [...gamePlace.children];
    
    buttons.forEach(function (item, index, array) {
        let message = document.getElementById('result');
        if (array[0].textContent === 'X' &&
            array[1].textContent === 'X' &&
            array[2].textContent === 'X') {
            message.style.display = 'grid';
            message.firstElementChild.textContent = "Player X Won!";
            
        } else if (array[0].textContent === 'O' &&
                   array[1].textContent === 'O' &&
                   array[2].textContent === 'O') {
            message.style.display = 'grid';
            message.firstElementChild.textContent = "Player O Won!";
        }
        if (array[3].textContent === 'X' &&
            array[4].textContent === 'X' &&
            array[5].textContent === 'X') {
            message.style.display = 'grid';
            message.firstElementChild.textContent = "Player X Won!";
        } else if (array[3].textContent === 'O' &&
                   array[4].textContent === 'O' &&
                   array[5].textContent === 'O') {
            message.style.display = 'grid';
            message.firstElementChild.textContent = "Player O Won!";
        }
        if (array[6].textContent === 'X' &&
            array[7].textContent === 'X' &&
            array[8].textContent === 'X') {
            message.style.display = 'grid';
            message.firstElementChild.textContent = "Player X Won!";
        } else if (array[6].textContent === 'O' &&
                   array[7].textContent === 'O' &&
                   array[8].textContent === 'O') {
            message.style.display = 'grid';
            message.firstElementChild.textContent = "Player O Won!";
        }

        if (array[0].textContent === 'X' &&
            array[4].textContent === 'X' &&
            array[8].textContent === 'X') {
            message.style.display = 'grid';
            message.firstElementChild.textContent = "Player X Won!";
        } else if (array[0].textContent === 'O' &&
                   array[4].textContent === 'O' &&
                   array[8].textContent === 'O') {
            message.style.display = 'grid';
            message.firstElementChild.textContent = "Player O Won!";
        }

        if (array[2].textContent === 'X' &&
            array[4].textContent === 'X' &&
            array[6].textContent === 'X') {
            message.style.display = 'grid';
            message.firstElementChild.textContent = "Player X Won!";
        } else if (array[2].textContent === 'O' &&
                   array[4].textContent === 'O' &&
                   array[6].textContent === 'O') {
            message.style.display = 'grid';
            message.firstElementChild.textContent = "Player O Won!";
        }

        if (array[0].textContent === 'X' &&
            array[3].textContent === 'X' &&
            array[6].textContent === 'X') {
            message.style.display = 'grid';
            message.firstElementChild.textContent = "Player X Won!";
        } else if (array[0].textContent === 'O' &&
                   array[3].textContent === 'O' &&
                   array[6].textContent === 'O') {
            message.style.display = 'grid';
            message.firstElementChild.textContent = "Player O Won!";
        }

        if (array[1].textContent === 'X' &&
            array[4].textContent === 'X' &&
            array[7].textContent === 'X') {
            message.style.display = 'grid';
            message.firstElementChild.textContent = "Player X Won!";
        } else if (array[1].textContent === 'O' &&
                   array[4].textContent === 'O' &&
                   array[7].textContent === 'O') {
            message.style.display = 'grid';
            message.firstElementChild.textContent = "Player O Won!";
        }
        
        if (array[2].textContent === 'X' &&
            array[5].textContent === 'X' &&
            array[8].textContent === 'X') {
            message.style.display = 'grid';
            message.firstElementChild.textContent = "Player X Won!";
        } else if (array[2].textContent === 'O' &&
                   array[5].textContent === 'O' &&
                   array[8].textContent === 'O') {
            message.style.display = 'grid';
            message.firstElementChild.textContent = "Player O Won!";
        }

        function boxesFilled (element, index, array) {
            return array[index].textContent;
        }
        if (array.every(boxesFilled)) {
            message.style.display = 'grid';
            message.firstElementChild.textContent = "It is Draw!";
        }
    })
   
}



gamePlace.addEventListener('click', step);



for (let i = 0; i < 9; i++) {
    document.getElementById('game').innerHTML += "<button class='block'></button>";

}

resetButton.addEventListener('click', function () {
        let buttons = [...gamePlace.children];
    buttons.forEach(function (item, index, array) {
        
        array[index].textContent = '';
    })
    let message = document.getElementById('result');
    message.style.display = null;
})


// field.addEventListener('click', (event) => {
//     let target = event.target;
//     if (target.textContent) {
//         return;
//     }
//     if (target.tagName === 'BUTTON') {
//         firstMove(target);
//     }

// })

// function firstMove(button) {
//     button.textContent = currentSymbol;

//     if (currentSymbol === 'X') {
//         player.textContent = 'Player O Move';
//         currentSymbol = 'O';
//     } else {
//         player.textContent = 'Player X Move';
//         currentSymbol = 'X';

//     }    
// }
