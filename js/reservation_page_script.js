document.addEventListener('DOMContentLoaded', () => {
    const back_btn = document.getElementById('back-btn');

    back_btn.onclick = () => document.location.href = '/'; // Navigate to the homepage

    // Slider functionality
    const slider = document.getElementById('slider');
    const form_width = 500; // Must be the same with the css value


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
});