const counter = document.querySelector('.counter');

const startBtn = document.querySelector('.start-btn');
const stopBtn = document.querySelector('.stop-btn');
const resetBtn = document.querySelector('.reset-btn');

let seconds = 0;
let intervalId;

// Start Button 
startBtn.addEventListener('click', ()=> {
    intervalId = setInterval(()=> {
    counter.innerHTML = seconds++;
    }, 1000)
})

// Stop Button 
stopBtn.addEventListener('click', ()=> {
    clearInterval(intervalId);
})

// Reset Button 
resetBtn.addEventListener('click', ()=> {
    clearInterval(intervalId);
    seconds = 0;
    counter.innerHTML = seconds;
})