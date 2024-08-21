document.addEventListener('DOMContentLoaded', function() {
    const faqQuestions = document.querySelectorAll('.faq-question');
    const faqMessage = document.getElementById('faq-message');

    faqQuestions.forEach(question => {
        question.addEventListener('click', function() {
            const info = this.getAttribute('data-info');
            faqMessage.textContent = info;
            faqMessage.style.display = 'block';
        });
    });
});