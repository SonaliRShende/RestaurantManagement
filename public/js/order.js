document.getElementById('orderForm').addEventListener('submit', async function(event) {
    event.preventDefault();

    const orderData = {
        name: document.getElementById('name').value,
        phone: document.getElementById('phone').value,
        location: document.getElementById('location').value,
        dish1: document.getElementById('dish1').value,
        quantity1: document.getElementById('quantity1').value,
        dish2: document.getElementById('dish2').value,
        quantity2: document.getElementById('quantity2').value,
        dish3: document.getElementById('dish3').value,
        quantity3: document.getElementById('quantity3').value,
        dish4: document.getElementById('dish4').value,
        quantity4: document.getElementById('quantity4').value,
    };

    try {
        const response = await fetch('/api/order', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(orderData)
        });

        const result = await response.text();
        document.getElementById('orderMessage').innerText = result;
    } catch (error) {
        console.error('Error placing order:', error);
        document.getElementById('orderMessage').innerText = 'Error placing order. Please try again later.';
    }
});

// Handle "View Menu" button to open modal
document.getElementById('viewMenuBtn').addEventListener('click', function() {
    document.getElementById('menuModal').style.display = 'block';
});

// Close the modal when the close button is clicked
document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('menuModal').style.display = 'none';
});

// Fetch and insert the navbar
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });
