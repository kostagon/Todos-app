'use strict';

function init() {
    renderTodos();
}

function renderTodos() {
    var todos = getTodosToShow();
    var strHTMLs = todos.map(function (todo) {
        // creates a list of Todos with a className of done if its the case.
        var className = (todo.isDone)? 'done' : '';
        return `<li onclick="onToggleTodo(this, ${todo.id})" class="${className}">
                    ${todo.txt}
                    <button onclick="onRemoveTodo(event, ${todo.id})">x</button>
                </li>`
    })
    var elTodoList = document.querySelector('.todo-list');
    elTodoList.innerHTML = strHTMLs.join('');
    checkIfTodosExist(todos, elTodoList);
    renderStats();

}

function renderStats() {
    var totalCount = getTotalCount();
    var activeCount = getActiveCount();

    document.querySelector('.total-count').innerText = totalCount;
    document.querySelector('.active-count').innerText = activeCount;
}

function onRemoveTodo(ev, todoId) {
    ev.stopPropagation()
    removeTodo(todoId)
    renderTodos();
}


function onToggleTodo(elTodo, todoId) {
    toggleTodo(todoId)
    elTodo.classList.toggle('done');
    renderStats();
}

function onAddTodo() {
    var elTxt = document.querySelector('input');
    var elImportance = document.querySelector('#importance-select');
    var txt = elTxt.value;
    var importance = +elImportance.value;
    if(!txt) return;
    console.log('Adding', txt, 'With importance:', importance);
    elImportance.value = '';
    elTxt.value = '';
    addTodo(txt, importance);
    renderTodos(gTodos)
}

function onSetFilter(filterBy) {
    console.log('Setting Filter', filterBy);
    setFilter(filterBy)
    renderTodos();
}
