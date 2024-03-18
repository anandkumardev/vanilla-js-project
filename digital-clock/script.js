const time = document.querySelector('.time');

function clock() {
    let currentTime = new Date().toLocaleTimeString();
    time.innerText = currentTime;
}

setInterval(clock, 1000);