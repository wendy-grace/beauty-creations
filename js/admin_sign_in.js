document.addEventListener('DOMContentLoaded', () => {
    const admin_sign_in = evt => {
        evt.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username === '' || password === '') {
            alert('Please fill in all fields');
            return;
        } else {
            const data = {
                username: username,
                password: password
            }
            fetch('http://localhost:3000/api/admin-sign-in', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(data)
            }).then(response => {
                if (response.status === 200) {
                    localStorage.setItem('beautyCreationsAdmin', username);
                    window.location.href = '/pages/admin.html';
                } else {
                    alert('Invalid username or password');
                }
            });
        }
    };

    const admin_sign_in_btn = document.getElementById('admin_sign_in_btn');
    admin_sign_in_btn.addEventListener('click', admin_sign_in);
});