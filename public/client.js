document.getElementById('messageForm').addEventListener('submit', async (event) => {
    event.preventDefault();
    const message = document.getElementById('messageInput').value;
    const response = await fetch('/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
    });

    const result = await response.json();
    if (result.success) {
        alert('Message sent successfully!');
    } else {
        alert('Failed to send the message.');
    }
});
