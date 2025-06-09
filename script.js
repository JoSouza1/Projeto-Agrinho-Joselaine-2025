document.addEventListener('DOMContentLoaded', function() {
    const connectionForm = document.getElementById('connection-form');
    const submissionMessage = document.getElementById('submission-message');

    if (connectionForm) {
        connectionForm.addEventListener('submit', function(event) {
            event.preventDefault();
            
            console.log('História enviada!');
            submissionMessage.classList.remove('hidden');
            connectionForm.reset();
            setTimeout(function() {
                submissionMessage.classList.add('hidden');
            }, 3000);
        });
    }

    
    document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});