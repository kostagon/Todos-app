'use strict';

function getTime() {
    var today = new Date();
    var date = today.getDate() + '/' + (today.getMonth() + 1) + '/' + today.getFullYear();
    var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
    var dateTime = time + '-' + date;
    return dateTime;
}

function toggleHidden() {
    document.querySelector('.safe-content').classList.toggle('hidden');
    document.querySelector('.login-form').classList.toggle('hidden');
}