window.addEventListener('scroll', function(){
  const header = document.querySelector('header');
  header.classList.toggle('sticky', window.scrollY > 0);
});

function toggleMenu(){
  const menuToggle = document.querySelector('.toggle');
  menuToggle.classList.toggle('active');
  const menu = document.querySelector('.menu');
  menu.classList.toggle('active');
}