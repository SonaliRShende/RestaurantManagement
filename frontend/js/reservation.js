document.getElementById('reservationForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const contactNumber = document.getElementById('contactNumber').value;
    const numPersons = document.getElementById('numPersons').value;

    // Validate contactNumber is exactly 10 digits
    if (!/^\d{10}$/.test(contactNumber)) {
        alert('Contact number must be exactly 10 digits.');
        return; // Stop form submission if validation fails
    }

    // Validate that numPersons is a positive number greater than 0
    if (numPersons <= 0) {
        alert('Number of persons must be greater than 0.');
        return; // Stop form submission if validation fails
    }

    const reservationData = {
        name: document.getElementById('name').value,
        contactNumber: contactNumber,
        numPersons: numPersons,
        reservationDate: document.getElementById('reservationDate').value,
        reservationTime: document.getElementById('reservationTime').value
    };

    try {
        const response = await fetch('/api/reservation', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(reservationData)
        });

        const result = await response.text();
        if (response.ok) {
            document.getElementById('successMessage').style.display = 'block';
            alert('Reservation successful: ' + result);
        } else {
            alert('Error: ' + result);
        }
    } catch (error) {
        console.error('Error making reservation:', error);
        alert('Reservation failed. Please try again later.');
    }
});

// Load navbar
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });
