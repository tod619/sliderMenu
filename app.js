// Variables
const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const model = document.getElementById("modal");

// Toggle Navigation Bar
toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);

// Show Modal
open.addEventListener("click", () => modal.classList.add("show-modal"));

// Remove Modal
close.addEventListener("click", () => modal.classList.remove("show-modal"));

// Hide Modal on Outside Click
window.addEventListener("click", e =>
  e.target == modal ? modal.classList.remove("show-modal") : false
);
