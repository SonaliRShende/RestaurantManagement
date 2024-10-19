document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const phone = document.getElementById('phone').value;
    if (!/^\d{10}$/.test(phone)) {
        alert('Phone number must be a valid 10-digit number.');
        return; 
    }

    const loginData = {
        name: document.getElementById('name').value,
        phone: phone,
        password: document.getElementById('password').value,
    };

    console.log('Login data:', loginData);
    alert('Login successful'); 
});

// Load navbar
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });
