const countDownDate = new Date("Aug 14, 2025 00:00:00").getTime();
const countdownInfo = document.querySelector('.countdown-info');
const headerInfo = document.querySelector('.header-info');

const countdownInterval = setInterval(function() {
    let currentDate = new Date().getTime();
    let distance = countDownDate - currentDate;

   const day = Math.floor(distance / (1000 * 60 * 60 * 24));
   const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   const second = Math.floor((distance % (1000 * 60)) / 1000);

   if (distance < 0) {
      clearInterval(countdownInterval);
      countdownInfo.innerHTML = 'Hurray! wait is over :)';
      headerInfo.textContent = 'now, we are live!';
      document.getElementById('days').innerHTML = "00";
      document.getElementById('hours').innerHTML = "00";
      document.getElementById('minutes').innerHTML = "00";
      document.getElementById('seconds').innerHTML = "00";
      return;
   }
  
   document.getElementById('days').innerHTML = day;
   document.getElementById('hours').innerHTML = hour;
   document.getElementById('minutes').innerHTML = minute;
   document.getElementById('seconds').innerHTML = second;

countdownInfo.innerHTML = `${day}d  ${hour}hr ${minute}min ${second}sec are left!`
   
    
}, 1000);