//UI VAR
const nav = document.querySelector('.navbar'),
      burger = document.querySelector('.burger-menu'),
      navbar = document.querySelector('.navbar-nav')


// Listen for scrolling event on the browser
window.addEventListener('scroll', (e) => {
  const offset = window.pageYOffset;
  // Checks if 100px of the page has been scrolled
  if(offset > 100) {
    nav.classList.add('nav-scroll');
    // mainNav.classList.add('main-nav-scroll');
  }
  else {
    nav.classList.remove('nav-scroll');
    // mainNav.classList.remove('main-nav-scroll');
  }
})


burger.addEventListener('click', (e) => {
    burger.classList.toggle('toggle');
})