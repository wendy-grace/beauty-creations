document.addEventListener('DOMContentLoaded', () => {
    const back_btn = document.getElementById('back-btn');

    back_btn.onclick = () => document.location.href = '/'; // Navigate to the homepage

    // Slider functionality
    const slider = document.getElementById('slider');
    const form_width = 400; // Must be the same with the css value


    // Get the nav buttons
    const prev_btns = document.getElementsByClassName('prev');
    const next_btns = document.getElementsByClassName('next');



    // Loop through the buttons and add event listeners
    for (let i = 0; i < prev_btns.length; i++) {
        prev_btns.item(i).addEventListener('click', () => {
            let index = prev_btns.item(i).parentElement.tabIndex;
            slider.style.left = ((index - 2) * -form_width) + 'px';
        })
    };


    for (let i = 0; i < next_btns.length; i++) {
        next_btns.item(i).addEventListener('click', () => {
            slider.style.left = ((i + 1) * -form_width) + 'px';
        })
    };

    /* Submit button */
    const submit_btn = document.getElementById('submit-btn');

    submit_btn.addEventListener('click', evt => {
        evt.preventDefault();

        // Get input values
        const firstname = document.getElementById('firstname').value;
        const lastname = document.getElementById('lastname').value;
        const service = document.getElementById('service').value;
        const time = document.getElementById('time').value;
        const phone = document.getElementById('phone').value;
        const alt_phone = document.getElementById('alt_phone').value;
        const email = document.getElementById('email').value;

        // Create reservation object
        const reservation = {
            firstname,
            lastname,
            service,
            time,
            phone,
            alt_phone,
            email
        };

        // Send reservation to server
        fetch('http://localhost:3000/api/reservations', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(reservation)
        })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            alert('Reservation successful');
            document.location.href = '/'; // Navigate to the homepage
        })

    })
});