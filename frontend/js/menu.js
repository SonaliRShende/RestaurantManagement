var modal = document.getElementById('menuModal'); //  modal element
var openModalBtn = document.getElementById('openModalBtn'); //  button that opens the modal
var closeBtn = document.getElementsByClassName('close-btn')[0]; // <span> closes the modal

//  open the modal 
openModalBtn.onclick = function() {
    modal.style.display = "block";
}
//  close the modal
closeBtn.onclick = function() {
    modal.style.display = "none";
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}
//load navabr
fetch('navbar.html')
    .then(response => response.text())
    .then(data => {
        document.getElementById('navbar').innerHTML = data;
    });

