document.addEventListener('astro:page-load', () => {
  document.querySelector('.hamburger').addEventListener('click', () => {
      document.querySelector('.nav-links').classList.toggle('expanded');
      // document.querySelector('.title').classList.toggle('disable');
      document.querySelector('.logo-title').classList.toggle('disable');
    });
});