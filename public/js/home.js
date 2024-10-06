
document.addEventListener('DOMContentLoaded', function () {
    // Load Menu Section
    fetch('menu.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('menu').innerHTML = data;
        });

    // Load Contact Section
    fetch('contact.html')
        .then(response => response.text())
        .then(data => {
            document.getElementById('contact').innerHTML = data;
        });
});
 // Load Navbar
 fetch('navbar.html')
 .then(response => response.text())
 .then(data => {
     document.getElementById('navbar').innerHTML = data;
 });
