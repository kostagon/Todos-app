'use strict';

function onLogin() {
    var userName = document.querySelector('#user-name').value;
    var userPass = document.querySelector('#user-pass').value;
    document.querySelector('#user-name').value = '';
    document.querySelector('#user-pass').value = '';
    doLogin(userName, userPass);
}

function onLogout() {
    toggleHidden();
    doLogout();
}

function renderContent(user) {
    toggleHidden();   
    var contentBox = document.querySelector('.safe-content');
    var htmlStr = '';
    htmlStr += `<h1>Hey ${user.name}</h1>`;
    htmlStr += `<p>this content is very safe, dont trust anyone with that information</p>`;
    if(user.isAdmin) {
        htmlStr += `<a href="admin.html" target="_blank">Admin panel</a> `
    }
    htmlStr += `<button onclick="onLogout()">Log out</button>`;
    contentBox.innerHTML = htmlStr;
}
