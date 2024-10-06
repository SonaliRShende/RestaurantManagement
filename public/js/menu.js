// Get modal element
var modal = document.getElementById('menuModal');
// Get button that opens the modal
var openModalBtn = document.getElementById('openModalBtn');
// Get the <span> element that closes the modal
var closeBtn = document.getElementsByClassName('close-btn')[0];

// When the user clicks the button, open the modal 
openModalBtn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });

