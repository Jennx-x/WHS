// Verifica si hay un usuario autenticado almacenado en localStorage
const loggedInUser = JSON.parse(localStorage.getItem('login_success'));

// Selecciona los elementos de usuario y de cierre de sesión en el DOM
const userNameElement = document.querySelector('#user-name');
const logoutLink = document.querySelector('#logout-link');
const loginLink = document.querySelector('#login-link'); // Enlace de "Iniciar Sesión"

if (loggedInUser) {
    // Si el usuario ha iniciado sesión
    if (userNameElement && logoutLink) {
        // Muestra el nombre del usuario
        userNameElement.textContent = `Hi! ${loggedInUser.name}`;

        // Muestra el enlace de "Cerrar sesión" y oculta el de "Iniciar Sesión"
        logoutLink.style.display = 'inline';
        loginLink.style.display = 'none';

        // Agrega el evento para cerrar sesión
        logoutLink.addEventListener('click', () => {
            localStorage.removeItem('login_success'); // Elimina la sesión del usuario
            window.location.href = 'index.html'; // Redirige al usuario a la página de inicio
        });
    }
} else {
    // Si el usuario no ha iniciado sesión
    if (logoutLink) logoutLink.style.display = 'none'; // Oculta el enlace de cerrar sesión
    if (loginLink) loginLink.style.display = 'inline'; // Muestra el enlace de "Iniciar Sesión"
}
