'use strict';

var gNextId = 101;
var gTodos = createTodos();
var gFilterBy = 'All';

function createTodos() {
    return [
        createTodo('Do this', 1),
        createTodo('Do that', 2),
        createTodo('Sleep now', 3),
    ]
}

function createTodo(txt, importance) {
    return {
        id: gNextId++,
        txt: txt,
        importance: importance,
        isDone: false,
        createdAt: getDate()
    }
}

function removeTodo(todoId) {
    var isSure = confirm('You sure you want to delete?') ? true : false;
    if (!isSure) return;
    var todoIdx = gTodos.findIndex(function (todo) {
        return todo.id === todoId
    })
    gTodos.splice(todoIdx, 1);
}

function getTodosToShow() {
    if (gFilterBy === 'All') return gTodos;
    if (gFilterBy === 'Importance') return sortByImportance();
    if (gFilterBy === 'Text') return sortByTxt();
    if (gFilterBy === 'Creation') return sortByCreationDate();
    var todosToShow = gTodos.filter(function (todo) {
        return (gFilterBy === 'Done' && todo.isDone) ||
            (gFilterBy === 'Active' && !todo.isDone)
    })
    return todosToShow;
}

function getTotalCount() {
    return gTodos.length;
}

function toggleTodo(todoId) {
    var todo = gTodos.find(function (todo) {
        return todo.id === todoId
    })
    todo.isDone = !todo.isDone;
}

function addTodo(txt, importance) {
    gTodos.push(createTodo(txt, importance));
}

function setFilter(filterBy) {
    gFilterBy = filterBy;
}

function getActiveCount() {
    var activeTodos = gTodos.filter(function (todo) {
        return !todo.isDone
    });
    return activeTodos.length
}

function sortByImportance() {
    return gTodos.sort((a, b) => {
        return b.importance - a.importance;
    });
}

function sortByCreationDate() {
    return gTodos.sort((a, b) => {
        return (a.createdAt < b.createdAt) ? -1 : (a.createdAt > b.createdAt) ? 1 : 0
    })
}

function sortByTxt() {
    return gTodos.sort((a, b) => {
        return (a.txt < b.txt) ? -1 : (a.txt > b.txt) ? 1 : 0
    });
}

function checkIfTodosExist(todos, elTodoList) {
    if (gFilterBy === 'Active' && !todos[0]) elTodoList.innerHTML = `<h4>No active todos my dude</h4>`
    if (gFilterBy === 'Done' && !todos[0]) elTodoList.innerHTML = `<h4>No done todos my dude</h4>`
    if (!isTodos()) elTodoList.innerHTML = `<h4>No todos, you can set one if you want :)</h4>`;
}

function isTodos() {
    return (gTodos[0]) ? true : false;
}

function getDate() {
    return Date(Date.now()).toString();
}