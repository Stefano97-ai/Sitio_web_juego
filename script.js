const menuToggle = document.getElementById('menu-toggle');
const menu = document.getElementById('menu');

menuToggle.addEventListener('click', () => {
  menu.classList.toggle('active'); // Alterna la clase 'active' para mostrar/ocultar el menú
});
