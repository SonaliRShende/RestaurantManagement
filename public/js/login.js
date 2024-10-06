document.getElementById('loginForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const loginData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        password: document.getElementById('password').value,
    };

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        });

        const result = await response.text();
        alert(result); // Show pop-up message
        if (response.ok) {
            window.location.replace('menu.html'); // Redirect to menu
        }
    } catch (error) {
        console.error('Error logging in:', error);
        alert('Error logging in. Please try again later.');
    }
});
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });
    
