document.addEventListener('DOMContentLoaded', () => { // When page has finished loading
    const reserve_btn = document.getElementById('reserve-btn');
    reserve_btn.onclick = () => document.location.href = 'pages/reservation.html';

    /* Smooth scrolling logic  */
    document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
        anchor.addEventListener("click", function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute("href")).scrollIntoView({
                behavior: "smooth",
            });
        });
    });

    /* Header anim activation */
    const header = document.getElementById('header');

    document.onscroll = evt => {
        if (window.scrollY >= 50) {
            if (!header.classList.contains('scrolled')) header.classList.add('scrolled');
        } else {
            if (header.classList.contains('scrolled')) header.classList.remove('scrolled');
        }
    }


    // Faq open question logic
    const questions = document.getElementsByClassName('question');
    // Loop through all the questions and add event listeners
    for (let i = 0; i < questions.length; i++) {
        questions.item(i).addEventListener('click', () => {
            if (!questions.item(i).className.includes('hidden')) {
                questions.item(i).className = 'question hidden';
                
            } else {
                questions.item(i).className = 'question';

                // Close all other questions
                for (let j = 0; j < questions.length; j++) {
                    if (j != i) questions.item(j).className = 'question hidden';
                }
            }
        })
    }


    /* Get all reservations */
    fetch('http://localhost:3000/api/reservations')
        .then(res => res.json())
        .then(data => console.log(data));
});