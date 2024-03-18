const body = document.querySelector("body");
const hour = document.querySelector('.hour');
const minute = document.querySelector('.minute');
const second = document.querySelector('.second');
const modeSwith = document.querySelector('.mode-switch');

//add a click event listener to the mode switch
modeSwith.addEventListener('click', () => {
  //toggle the "dark" class on the body element
  body.classList.toggle('dark');

  //check if the body has the "dark" class
  const isDarkMode = body.classList.contains('dark');

  //set mode switch text based on the current mode
  modeSwith.textContent = isDarkMode ? 'Light Mode' : 'Dark Mode';

  //set localStorage "mode" based on the current mode
  localStorage.setItem("mode", isDarkMode ? 'Dark Mode' : 'Light Mode')
});


const updateTime = () => {
  // get the current time and calculate the rotation of each hand
  const now = new Date();
  secToDeg = (now.getSeconds() / 60) * 360;
  minToDeg = (now.getMinutes() / 60) * 360;
  hrToDeg = (now.getHours() / 12) * 360;

  // Rotate the clock hands to the appropiate degree based on the current time
  second.style.transform = `rotate(${secToDeg}deg)`;
  minute.style.transform = `rotate(${minToDeg}deg)`;
  hour.style.transform = `rotate(${hrToDeg}deg)`;
}

// call updateTime to set clock  hands every second
setInterval(updateTime, 1000);