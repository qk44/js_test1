'use strict'

let buttonMain = document.getElementById('buttonNext');
let arrayEmail = []
let arrayPassword = [];

buttonMain.onclick = function () {
    let userLogin = document.getElementById('inputLogin').value;
    let userPassword = document.getElementById('inputPassword').value;
    arrayEmail.push(userLogin);
    arrayPassword.push(userPassword);
    console.log(arrayEmail)
    console.log(arrayPassword)
};




