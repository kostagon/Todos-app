'use strict';
var gUsers = getUsersToShow();
var gCurrUser = getCurrUser();

function init() {
    gUsers = createUsers();
    saveUsers();
    if(gCurrUser) {
        renderContent(gCurrUser);
    }
}

function createUsers() {
    return [
        createUser('kosta', '123', true),
        createUser('yoni', '222', false),
        createUser('toni', '123', true)
    ]
}

function createUser(name, pass, isAdmin){
    return {
        name: name,
        pass: pass,
        isAdmin: isAdmin,
        lastLoginTime: null
    }
}

function saveUsers() {
    return localStorage.setItem('users-list', JSON.stringify(gUsers))
}

function getUsersToShow() {
    return gUsers;
}

function doLogin(userName, pass) {
    gUsers.find((user)=>{
        if(user.pass === pass && user.name === userName){
            user.lastLoginTime = getTime();
            gCurrUser = user;
            localStorage.setItem('loggedInUser', JSON.stringify(user));
            saveUsers();
            return renderContent(user);
        }else return null;
    })
}

function doLogout(){
    gCurrUser = null;
    localStorage.removeItem('loggedInUser');
}

function getCurrUser() {
    return JSON.parse(localStorage.getItem('loggedInUser'));
}