const $totoInput = document.querySelector('#todoInput');
const $listTodos = document.querySelector('#listTodos');

$totoInput.addEventListener('keypress', (e) => {
    let todo;
    if(e.code === 'Enter' && e.target.value !== "") {
        todo = e.target.value;
        let $todoElement = document.createElement('li');
        let todoId = new Date().getTime();
        $todoElement.innerHTML = `
            <input id="${todoId}" type="checkbox" /> 
            <label for="${todoId}">${todo}</label>
        `;
        $listTodos.appendChild($todoElement);

        $totoInput.value = "";
    }
});

$listTodos.addEventListener('click', (e) => {
    if(e.target.checked) {
        document.getElementById(e.target.id).parentElement.classList.add('completed');
    } else {
        document.getElementById(e.target.id).parentElement.classList.remove('completed');
        // document.getElementById(e.target.id).parentElement.style.textDecoration = "none";
    }
});
