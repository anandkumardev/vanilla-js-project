const body = document.querySelector('body');
const toggle = document.querySelector('.toggle');
const sidebar = document.querySelector('.sidebar');
const searchBtn = document.querySelector('.search-box');
const modeSwitch = document.querySelector('.toggle-switch');
const modeText = document.querySelector('.mode-text')

toggle.addEventListener('click', ()=> {
    sidebar.classList.toggle('close');
});

searchBtn.addEventListener('click', ()=> {
    sidebar.classList.remove('close');
});

modeSwitch.addEventListener('click', ()=> {
    body.classList.toggle('dark');

    if (body.classList.contains('dark')) {
        modeText.innerText = "Light Mode";
    } else {
        modeText.innerText = "Dark Mode";
    }
});


