const smNav = document.querySelector('.sm-nav');
const button = document.querySelector('button');
const toggleIcon = document.getElementById('toggle-Icon');


button.addEventListener('click', ()=> {
    smNav.classList.toggle('active');

    //just toggle the icon className
    const isActive = smNav.classList.contains('active');
    toggleIcon.classList = (isActive) ? "fa-sharp fa-solid fa-xmark" : "fa-sharp fa-solid fa-bars-staggered";
});
