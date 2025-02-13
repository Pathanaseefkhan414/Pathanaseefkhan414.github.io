// Signup function
function signup() {
    const username = document.getElementById('username').value.trim();
    const password = document.getElementById('password').value.trim();

    if (username === '' || password === '') {
        alert('Please fill both fields!');
        return;
    }

    // Save username and password to localStorage (for demo purposes)
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    alert('Signup successful! You can now login.');
    window.location.href = 'login.html'; // Redirect to login page
}

// Login function
function login() {
    const username = document.getElementById('login-username').value.trim();
    const password = document.getElementById('login-password').value.trim();

    const storedUsername = localStorage.getItem('username');
    const storedPassword = localStorage.getItem('password');

    if (username === storedUsername && password === storedPassword) {
        alert('Login successful!');
        window.location.href = 'index.html'; // Redirect to plagiarism checker page
    } else {
        alert('Invalid username or password!');
    }
}
