const accordion = document.querySelectorAll('.accordion');

accordion.forEach(items => {
    const icon = items.querySelector('.icon');
    const answer = items.querySelector('.answer');

    items.addEventListener('click', () => {
      
        if (icon.classList.contains('active')) {
            icon.classList.remove('active')
            answer.style.maxHeight = null;
        } else {
            icon.classList.add('active')
            answer.style.maxHeight = answer.scrollHeight + 'px';
        }
    })
});
