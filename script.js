// Force page to start at top
function forceScrollToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

// Ensure page starts at top when loaded
window.addEventListener('load', forceScrollToTop);

// Also ensure it starts at top when DOM is ready
document.addEventListener('DOMContentLoaded', forceScrollToTop);

// Force scroll to top immediately
forceScrollToTop();

function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
