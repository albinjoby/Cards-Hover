alert("Use fullscreen for a better experience");
// Get the audio element by creating a new Audio object
var hoverSound = new Audio("sounds/hover-sound.mp3");

// Get the list container
const list = document.querySelector(".list");

// Add hover event to the list container
list.addEventListener("mouseenter", () => {
  hoverSound.currentTime = 0; // Rewind to the start
  hoverSound.play(); // Play the sound
});
