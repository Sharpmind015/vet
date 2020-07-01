//UI VAR
const nav = document.querySelector('.navbar'),
      burger = document.querySelector('.burger-menu'),
      navbar = document.querySelector('.navbar-nav'),
      navbar2 = document.querySelector('.navbar-collapse')


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

nav.addEventListener('click', (e) => {
  if(e.target.className === 'nav-link') {
    navbar2.classList.toggle('show');
    burger.classList.toggle('toggle');
  }
})
burger.addEventListener('click', (e) => {
    burger.classList.toggle('toggle');
})