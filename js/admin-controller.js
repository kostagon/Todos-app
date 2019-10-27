'use strict';

function renderUsers() {
    var usersTable = document.querySelector('.users-table');
    var htmlStr = '';
    htmlStr += '<table><tbody>';
    htmlStr += '<thead><th>Name</th><th>Last login time</th><th>Admin?</th></thead>';
    gUsers.forEach((user)=>{
        (user.lastLoginTime)? htmlStr += `<tr><td>${user.name}</td><td>${user.lastLoginTime}</td>`
                            : htmlStr += `<tr><td>${user.name}</td><td>-</td>`;
        (user.isAdmin)? htmlStr += '<td>yep</td>' : htmlStr += '<td>nope</td>';

        htmlStr += '</tr>';
    })
    htmlStr += '</tbody></table>';
    usersTable.innerHTML = htmlStr;
}
function onSetSort(val) {
    doSortContent(val);
    renderUsers();
}