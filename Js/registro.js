const signupForm = document.querySelector('#registro');
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.querySelector('#user').value;
    const email = document.querySelector('#email').value;
    const password = document.querySelector('#password').value;

    const Users = JSON.parse(localStorage.getItem('users')) || [];
    const isUserRegistered = Users.find(user => user.email === email);
    if (isUserRegistered) {
        return alert('El usuario ya está registrado!');
    }

    Users.push({ name: name, email: email, password: password });
    localStorage.setItem('users', JSON.stringify(Users));
    alert('Registro Exitoso!');
    // Redirige a la página de inicio de sesión después de registrarse
    window.location.href = 'sesion.html';
});