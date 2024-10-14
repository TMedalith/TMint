const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

if (menuIcon && navbar) {
  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });
}

const navLinks = document.querySelectorAll('.nav-links li');

function setActiveLink() {
  let currentSection = '';

  if (window.location.hash) {
    currentSection = window.location.hash.substring(1); 
  } else {
    
    currentSection = 'home'; 
  }

  navLinks.forEach(li => {
    li.classList.remove('active');
    const link = li.querySelector('a');
    if (link && link.getAttribute('href') === `#${currentSection}`) {
      li.classList.add('active');
    }
  });
}

window.addEventListener('scroll', setActiveLink);

setActiveLink();