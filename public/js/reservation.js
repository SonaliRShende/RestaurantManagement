document.getElementById('reservationForm').addEventListener('submit', async function (event) {
    event.preventDefault();

    const reservationData = {
        name: document.getElementById('name').value,
        contactNumber: document.getElementById('contactNumber').value,
        numPersons: document.getElementById('numPersons').value,
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
            alert(result);
        } else {
            alert(result);
        }
    } catch (error) {
        console.error('Error making reservation:', error);
        alert('Reservation failed. Please try again later.');
    }
});
//load navbar
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });
