const menuActive = document.querySelector('.menu-active');
const burger = document.querySelector('.burger');

function toggleMenu(){
  menuActive.classList.toggle('hidden')
}
burger.addEventListener('click', toggleMenu);