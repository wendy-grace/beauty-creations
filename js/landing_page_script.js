document.addEventListener('DOMContentLoaded', () => { // When page has finished loading
    const reserve_btn = document.getElementById('reserve-btn');
    reserve_btn.onclick = () => document.location.href = 'pages/reservation.html';


    // Faq open question logic
    const questions = document.getElementsByClassName('question');
    console.log(questions.item(0).className);
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
});