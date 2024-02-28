document.addEventListener('DOMContentLoaded', () => {
    // If admin hasn't signed in, redirect to login page
    if (localStorage.getItem('beautyCreationsAdmin') === null) {
        window.location.href = '/pages/admin-sign-in.html';
    }
});