// Start page at top on load
function forceScrollToTop() {
  window.scrollTo(0, 0);
  document.documentElement.scrollTop = 0;
  document.body.scrollTop = 0;
}

window.addEventListener('load', forceScrollToTop);
document.addEventListener('DOMContentLoaded', forceScrollToTop);
forceScrollToTop();
