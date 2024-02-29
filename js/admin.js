document.addEventListener('DOMContentLoaded', () => {
    // If admin hasn't signed in, redirect to login page
    if (localStorage.getItem('beautyCreationsAdmin') === null) {
        window.location.href = '/pages/admin-sign-in.html';
    }


    const reservations = document.getElementById('reservations');

    // Fetch reservations
    fetch('http://localhost:3000/api/reservations')
    .then(res => res.json())
    .then(data => {
        data.forEach(reservation => {

            const reservationHTML = `
            <div className='reservation'>
                <div className='service'>${reservation.service}</div>
                <div className='name'>${reservation.firstname} ${reservation.lastname}</div>

            </div>
            `

            reservations.innerHTML += reservationHTML;
        })
    })
});