// js/load-partials.js
document.addEventListener("DOMContentLoaded", function() {
    // Cargar Header
    fetch('header.html')
        .then(response => response.ok ? response.text() : Promise.reject('Header not found'))
        .then(data => {
            document.getElementById('header-placeholder').innerHTML = data;
            // Aquí puedes añadir lógica JS que dependa del header, como el menú móvil
            setupMobileMenu(); // Llama a la función si existe
        })
        .catch(error => console.error('Error loading header:', error));

    // Cargar Footer
    fetch('footer.html')
        .then(response => response.ok ? response.text() : Promise.reject('Footer not found'))
        .then(data => {
            document.getElementById('footer-placeholder').innerHTML = data;
        })
        .catch(error => console.error('Error loading footer:', error));
});

// Función para el menú móvil (si la necesitas)
function setupMobileMenu() {
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const mobileNav = document.querySelector('.mobile-nav'); // Asegúrate que este elemento exista en header.html si lo usas

    if (menuToggle && mobileNav) {
        menuToggle.addEventListener('click', () => {
            mobileNav.classList.toggle('active'); // Añade/quita clase 'active' para mostrar/ocultar
        });
    } else {
        // Espera un poco por si el DOM no está listo (alternativa simple)
        setTimeout(() => {
             const menuToggleRetry = document.querySelector('.mobile-menu-toggle');
             const mobileNavRetry = document.querySelector('.mobile-nav');
              if (menuToggleRetry && mobileNavRetry) {
                 menuToggleRetry.addEventListener('click', () => {
                     mobileNavRetry.classList.toggle('active');
                 });
             }
        }, 500); // Espera 500ms
    }
}

// Llama a setupMobileMenu también fuera del fetch por si acaso
// setupMobileMenu(); // O maneja mejor el timing
