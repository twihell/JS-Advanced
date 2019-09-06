const inp = document.querySelector('input');
const addTaskButton = document.querySelector('button');
const list = document.querySelector('ul');
const checkBox = document.getElementsByClassName('check')[0];
const priorityBtn = document.getElementsByClassName('priorityBtn')[0];


priorityBtn.addEventListener('click', () => {
    checkBox.checked = !checkBox.checked;

});


function getInputValue(inputElement) {
    return inputElement.value;
}


function createElementWithText(elementName, text) {
    let el = document.createElement(elementName);
    el.textContent = text;
    return el;
}

function appendChildTodo(parent, child) {
    parent.appendChild(child);
}

addTaskButton.addEventListener('click', () => {
    if (getInputValue(inp)) {
        let child = createElementWithText('li', getInputValue(inp));
        if (checkBox.checked) {
            child.style.color = "red";
            list.insertBefore(child, list.firstChild);
        } else {
            appendChildTodo(list, child);
        }
    }

});

