const themeToggleBtn = document.querySelector('.theme-toggle');
const body = document.body;
const icon = themeToggleBtn.querySelector('i'); 

themeToggleBtn.addEventListener('click', () => {
  body.classList.toggle('dark-mode');
  body.classList.toggle('light-mode');

  if (body.classList.contains('light-mode')) {
    icon.classList.remove('fa-moon');
    icon.classList.add('fa-sun');
  } else {
    icon.classList.remove('fa-sun');
    icon.classList.add('fa-moon');
  }
});

const menuIcon = document.getElementById("menu-icon");
  
  menuIcon.addEventListener("click", function () {
    menuIcon.classList.toggle("change");
  });