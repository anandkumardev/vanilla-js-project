const countdownElement = document.getElementById('countdown-info');
const countdownForm = document.getElementById('countdownForm');
let countdownInterval;

function startCountdown(event) {
  event.preventDefault();
  const targetDate = new Date(document.getElementById('date').value).getTime();

  if (isNaN(targetDate)) {
    alert('Please enter a valid date and time.');
    return;
  }

  const countdownInterval = setInterval(() => {
    const currentDate = new Date().getTime();
    const distance = targetDate - currentDate;

    if (distance < 0) {
      clearInterval(countdownInterval);
      document.getElementById('days').innerHTML = "00";
      document.getElementById('hours').innerHTML = "00";
      document.getElementById('minutes').innerHTML = "00";
      document.getElementById('seconds').innerHTML = "00";
      countdownElement.innerHTML = 'Hurray! wait is over :)';
      return;
    }

    const day = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const second = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = day;
    document.getElementById('hours').innerHTML = hour;
    document.getElementById('minutes').innerHTML = minute;
    document.getElementById('seconds').innerHTML = second;
    countdownElement.innerHTML = `${day}d ${hour}hr ${minute}min ${second}sec are left !`;

  }, 1000);
}

countdownForm.addEventListener('submit', startCountdown);
