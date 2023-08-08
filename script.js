const loadingBar = document.querySelector('.loading-bar');

function animateLoadingBar() {
  let width = 0;
  const interval = setInterval(() => {
    width += 0.1;
    loadingBar.style.width = width + '%';
    if (width >= 95) {
      clearInterval(interval);
    }
  }, 100);
}

animateLoadingBar();
