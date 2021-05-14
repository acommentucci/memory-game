// Get the modal
let howToModal = document.getElementById("how-to-modal");
let startModal = document.getElementById("start-modal");

// Get the button that opens the modal
let howToBtn = document.getElementById("button-how-to");
let startBtn = document.getElementById("button-start");

// Get the <span> element that closes the modal
let quitHowTo = document.getElementsByClassName("closeHowTo")[0];
let quitStart = document.getElementsByClassName("closeStart")[0];

// When the user clicks the button, open the modal 
howToBtn.onclick = function() {
  howToModal.style.display = "block";
}
startBtn.onclick = function() {
    startModal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
quitHowTo.onclick = function() {
    howToModal.style.display = "none";
}
quitStart.onclick = function() {
    startModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == howToModal) {
    howToModal.style.display = "none";
  }
  if (event.target == startModal) {
      startModal.style.display = "none";
    }
}