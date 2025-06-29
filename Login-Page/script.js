document.getElementById('login-form').addEventListener('input', function () {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const button = document.getElementById('login-button');
    const tooltip = document.getElementById('tooltip');
    const errorMessage = document.getElementById('error-message');

    button.disabled = username === '' || password === '';

    if (username === '' || password === '') {
        errorMessage.textContent = '';
    } else {
        errorMessage.textContent = '';
    }

    if (button.disabled) {
        button.classList.add('disabled-hover');
    } else {
        button.classList.remove('disabled-hover');
    }
});

document.getElementById('login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();
    const correctUsername = 'vishva';
    const correctPassword = '123456';
    const errorMessage = document.getElementById('error-message');

    errorMessage.textContent = '';

    if (username === '' || password === '') {
        errorMessage.textContent = 'Please enter both username and password.';
        errorMessage.style.color = '#d9534f';
        return;
    }

    if (username === correctUsername && password === correctPassword) {
        errorMessage.textContent = '✅ Login Successful!';
        errorMessage.style.color = '#28a745';
    } else {
        errorMessage.textContent = 'Username or password is incorrect. Please check and try again.';
        errorMessage.style.color = '#d9534f';
    }
});