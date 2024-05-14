const slide = document.querySelectorAll('.slide');
let slideIndex = 0;
let intervalId = null;

document.addEventListener("DOMContentLoaded", initializeSlider());

function initializeSlider() {
    if(slide.length > 0){
        slide[slideIndex].classList.add('displaySlide');
        intervalId = setInterval(nextSlide, 5000);
    }
}

function showSlide(index) {

    if (index >= slide.length) {
        slideIndex = 0;
    } else if(index < 0) {
        slideIndex = slide.length - 1;
    }

    slide.forEach(items => {
        items.classList.remove("displaySlide");
    })

    slide[slideIndex].classList.add("displaySlide");
}

function prevSlide() {
    slideIndex--;
    showSlide(slideIndex);
}

function nextSlide() {
    slideIndex++;
    showSlide(slideIndex);
}