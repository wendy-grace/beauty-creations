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

            /* Format date and time */
            // Date is in datetime format
            const reservationDate = new Date(reservation.time);
            const formattedDate = reservationDate.toLocaleDateString();
            const formattedTime = reservationDate.toLocaleTimeString();


            const reservationHTML = `
            <div class='reservation'>
                <div class='service'>${reservation.service}</div>
                <div class='name'>${reservation.firstname} ${reservation.lastname}</div>

                <div class='time'>${formattedTime}</div>
                <div class='date'>${formattedDate}</div>
            </div>
            `

            reservations.innerHTML += reservationHTML;
        })
    })
});