// Variables
const toggle = document.getElementById("toggle");
const close = document.getElementById("close");
const open = document.getElementById("open");
const model = document.getElementById("modal");

// Toggle Navigation Bar
toggle.addEventListener("click", () =>
  document.body.classList.toggle("show-nav")
);
