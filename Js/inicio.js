// Script de inicio de sesión
const loginForm = document.querySelector('#iniciar');
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;
    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const validUser = Users.find(user => user.email === email && user.password === password);

    if (!validUser) {
        return alert('Usuario y/o contraseña incorrectos!');
    }
    alert(`Bienvenido ${validUser.name}`);
    localStorage.setItem('login_success', JSON.stringify(validUser));
    window.location.href = 'sesion.html';
});

// Comprueba si hay un usuario autenticado
const loggedInUser = JSON.parse(localStorage.getItem('login_success'));

// Selecciona los elementos de usuario y de cerrar sesión
const userNameElement = document.querySelector('#user-name');
const logoutLink = document.querySelector('#logout-link');
const loginLink = document.querySelector('#login-link'); // enlace de "Iniciar Sesión"

if (loggedInUser) {
    // Si el usuario ha iniciado sesión
    if (userNameElement && logoutLink) {
        // Muestra el nombre del usuario
        userNameElement.textContent = `Hi! ${loggedInUser.name}`;

        // Muestra el enlace de "Cerrar sesión" y oculta el de "Iniciar Sesión"
        logoutLink.style.display = 'inline'; // Muestra el enlace de cerrar sesión
        loginLink.style.display = 'none'; // Oculta el enlace de "Iniciar Sesión"

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
