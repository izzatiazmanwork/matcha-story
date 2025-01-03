  /* Horizontal Progress Bar  */
  function Progress() {
    var scrollContainer = document.getElementById('scrollContainer');
    var progressBar = document.getElementById('myBar');
    var scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;
    var scrolled = (scrollContainer.scrollTop / scrollHeight) * 100;
    progressBar.style.width = scrolled + "%";
}
  /* Vertical Progress Bar and Section Indicators */
  const indicator = document.querySelector('.indicator');
  const sections = document.querySelectorAll('.interface-section');

  function updateIndicator(entries) {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        indicator.textContent = entry.target.dataset.section;
      }
    });
  }

  function detect(el) {
    const options = {threshold: 0.1};
    const io = new IntersectionObserver(updateIndicator, options);
    io.observe(el);
  }

  const init = () => sections.forEach(detect);

  window.addEventListener('load', init, false);

  const finishBtn = document.querySelector('.finish-btn');
  const benefitsCont = document.getElementById('benefits-cont');
  const lastFrame = document.getElementById('last-frame');

  finishBtn.addEventListener('click', () => {
    benefitsCont.style.display = 'none';
    lastFrame.style.display = 'flex';
  });