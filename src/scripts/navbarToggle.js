const menuIcon = document.querySelector('.menu-icon');
const navbar = document.querySelector('.navbar');

menuIcon.addEventListener('click', () => {
  navbar.classList.toggle('open');
});

const navLinks = document.querySelectorAll('.nav-links li');

if (menuIcon && navbar) {
  menuIcon.addEventListener('click', () => {
    navbar.classList.toggle('open');
  });
}

// Función para manejar el scroll y detectar la sección visible
function setActiveLink() {
  let currentSection = '';

  if (window.location.hash) {
    currentSection = window.location.hash.substring(1); // Elimina el '#' del inicio
  } else {
    // Si no hay hash en la URL, puedes establecer una sección predeterminada
    currentSection = 'home'; // Cambia 'home' por el ID de tu sección predeterminada
  }

  // Remover clase active de todos los enlaces
  navLinks.forEach(li => {
    li.classList.remove('active');
    const link = li.querySelector('a');
    if (link && link.getAttribute('href') === `#${currentSection}`) {
      li.classList.add('active');
    }
  });
}

// Event listeners para actualizar el estado activo en scroll y clic
window.addEventListener('scroll', setActiveLink);

setActiveLink();