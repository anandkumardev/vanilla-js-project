const display = document.querySelector('.display');

let timer = null;
let startTime = 0;
let elapsedTime = 0;
let isRunning = false;

let hours = 0;
let minutes = 0;
let seconds = 0;
let miliseconds = 0;

let lapsinitialCount = 0;

//update display function
function update() {
    const currentTime = Date.now();
    elapsedTime = currentTime - startTime;

    hours = Math.floor(elapsedTime / (1000 * 60 * 60));
    minutes = Math.floor(elapsedTime / (1000 * 60) % 60);
    seconds = Math.floor(elapsedTime / 1000 % 60);
    miliseconds = Math.floor(elapsedTime % 1000 / 10);

    hours = String(hours).padStart(2, "0");
    minutes = String(minutes).padStart(2, "0");
    seconds = String(seconds).padStart(2, "0");
    miliseconds = String(miliseconds).padStart(2, "0");

    display.textContent = `${hours} : ${minutes} : ${seconds} : ${miliseconds}`
};


// start function
function start() {
    if(!isRunning) {
        startTime = Date.now() - elapsedTime;
        timer = setInterval(update, 10);
        isRunning = true;
    }
};

// stop function
function stop() {
    if(isRunning) {
        clearInterval(timer);
        elapsedTime = Date.now() - startTime;
        isRunning = false;
    }
};

// reset function
function reset() {
    clearInterval(timer);
    startTime = 0;
    elapsedTime = 0;
    isRunning = 0;
    display.textContent = "00 : 00 : 00 : 00";
};

//laps function
function laps() {

    if(isRunning){
        let lapsContainer = document.createElement("div");
        lapsContainer.className = "laps-container";
        document.body.appendChild(lapsContainer);

        //create lapsId
        const lapsId = document.createElement("span");
        lapsId.className = "lapsId";
        lapsContainer.appendChild(lapsId);
        lapsId.textContent = `#${++lapsinitialCount}`;

        //laps display
        const lapsDisplay = document.createElement("span");
        lapsDisplay.className = "laps-display";
        lapsContainer.appendChild(lapsDisplay);
        lapsDisplay.textContent = `${hours} : ${minutes} : ${seconds} : ${miliseconds}`;
   
        // laps delete Btn
        const lapsDelBtn = document.createElement("i");
        lapsDelBtn.className = "fa-solid fa-trash laps-del-btn";
        lapsDelBtn.style.color = "gray";
        lapsContainer.appendChild(lapsDelBtn);
        lapsDelBtn.addEventListener('click', () => {
        document.body.removeChild(lapsContainer)
        })
    }
};

