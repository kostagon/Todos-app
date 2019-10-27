'use strict';
var gUsers = JSON.parse(localStorage.getItem('users-list'));
var gCurrUser = JSON.parse(localStorage.getItem('loggedInUser'));

function checkIfAdmin() {
    if (!gCurrUser || !gCurrUser.isAdmin) {
        window.location = 'index.html';
    } else renderUsers();
}

function doSortContent(val) {
    if (val === 'name') {
        return gUsers.sort((a, b) => {
            return (a.name < b.name) ? -1 : (a.name > b.name) ? 1 : 0
        });
    }
    if (val === 'last-login') {
        getVisitedUsers();
        return gUsers.sort((a, b) => {
            return (a.lastLoginTime > b.lastLoginTime) ? -1 : (a.lastLoginTime < b.lastLoginTime) ? 1 : 0
        });
    }
}

function getVisitedUsers() {
    var res = [];
    gUsers.forEach((user) => {
        (user.lastLoginTime) ? res.unshift(user): res.push(user);
    })
    gUsers = res;
}