let headerContent = document.getElementsByClassName('header__logo');
let menu = document.getElementsByClassName('menu-toggle');
let recoveryButton = document.getElementById('recovery');
let ateg = document.getElementsByClassName('steam-logo');
let headerLogo = document.getElementById('headerLogo');
let returnbtn = document.getElementById('loginbutton');
let create = document.getElementById('createAccount');
let span = document.getElementsByClassName('close')[0];
let secondbtn = document.getElementById('myBtnss');
let recovery = document.getElementById('recovery');
let spans = document.getElementById('closebtns');
let spanss = document.getElementById('closebtn');
let modal = document.getElementById('myModal');
let popup = document.getElementById('popup2');
let treyler = document.getElementById('buy');
let btn = document.getElementById('myBtns');
let body = document.querySelector('body');

returnbtn.onclick = function () {
  modal.style.display = 'block';
  popup.style.display = 'none';
};

btn.onclick = function () {
  modal.style.display = 'block';
};

secondbtn.onclick = function () {
  modal.style.display = 'block';
};

treyler.onclick = function () {
  modal.style.display = 'block';
};

span.onclick = function () {
  modal.style.display = 'none';
  headerLogo.style.display = 'block';
};

function closeModal() {
  modal.style.display = 'none';
  headerLogo.style.display = 'block';
}

recovery.onclick = function () {
  modal.style.display = 'none';
};

create.onclick = function () {
  modal.style.display = 'none';
};

create.addEventListener('click', () => {
  headerLogo.style.display = 'none';
});

spanss.addEventListener('click', () => {
  headerLogo.style.display = 'block';
});

recoveryButton.addEventListener('click', () => {
  headerLogo.style.display = 'none';
});

spans.addEventListener('click', () => {
  headerLogo.style.display = 'block';
});
ateg.addEventListener('click', () => {
  headerLogo.style.display = 'block';
});

