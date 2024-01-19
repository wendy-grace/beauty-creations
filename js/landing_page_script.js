document.addEventListener('DOMContentLoaded', () => { // When page has finished loading
    const reserve_btn = document.getElementById('reserve-btn');
    reserve_btn.onclick = () => document.location.href = 'pages/reservation.html';
});