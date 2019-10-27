'use strict';
var gId = 101;
var gCurrUser;
var gUsers;
var gFilterBy = 'all';

function init() {
    if (!gCurrUser) {
        localStorage.clear()
        gUsers = createUsers();
        saveUsers(gUsers);
    } else {
        renderContent();
    }
}

function getUsersToShow() {
    return gUsers;
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function getLogin(userName, password) {
    // * return user object if found, else null (use array.find());
    // * if user successfully logs in, update his lastLoginDate;
    if (!userName || !pass) return;
    return gUsers.find((user) => {
        if (userName === user.userName && password === user.password) {
            user.lastLoginDate = Date(Date.now()).toString(); //TODO make a nice date & time;
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            gCurrUser = user;
            renderContent();
        } else null;
    })
}

function checkIfAdmin() {
    gCurrUser = localStorage.getItem('loggedInUser');
    gCurrUser = JSON.parse(gCurrUser);
    if (!gCurrUser || !gCurrUser.isAdmin) return window.location = "index.html";
    renderAdminContent(gCurrUser);
}

function getLogout() {
    gCurrUser = null;
    localStorage.removeItem('loggedInUser');
    renderLoginForm();
}

function createUsers() {
    return [
        createUser('kosta', '123', true),
        createUser('yoni', '222', false),
        createUser('toni', '666', true)
    ];

};

function createUser(name, pass, isAdmin) {
    return {
        id: gId++,
        userName: name,
        password: pass,
        isAdmin: isAdmin
    }
}

function getHiddenContent() {
    return document.querySelector('.content');
}

function getLoginForm() {
    return document.querySelector('.login-form');
}

function getCurrUser() {
    return gCurrUser;
}