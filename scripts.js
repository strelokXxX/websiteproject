document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.getElementById('nav-toggle');
    const navList = document.getElementById('nav-list');

    navToggle.addEventListener('click', function() {
        navList.classList.toggle('show');
    });

    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();

            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            if (name && email && message) {
                alert(`Спасибо, ${name}! Ваше сообщение отправлено.`);
                form.reset();
            } else {
                alert('Пожалуйста, заполните все поля формы.');
            }
        });
    }
});
