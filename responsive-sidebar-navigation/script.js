const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');
const searchBtn = document.getElementById('.search-box');
const modeSwitch = document.querySelectorAll('.toggle-switch');
const modeText = document.querySelector('.mode-text')

toggle.addEventListener('click', ()=> {
    sidebar.classList.toggle('close');
});

modeSwitch.addEventListener('click', ()=> {
    body.classList.toggle('dark');
});