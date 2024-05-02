const toggleBtn = document.querySelector('.toggle-btn');
const sidebar = document.querySelector('.sidebar');
const toggleIcon = document.getElementById('icon');
const span  = document.querySelectorAll('span');

toggleBtn.addEventListener('click', ()=> {
    sidebar.classList.toggle('active');
    span.classList.toggle('active');

    //just toggle the icon className
    const isActive = sidebar.classList.contains('active');
    toggleIcon.classList = (isActive) ? "fa-solid fa-chevron-right" : "fa-solid fa-chevron-left";
});