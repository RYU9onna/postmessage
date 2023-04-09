const form = document.getElementById('message-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const message = e.target.message.value;
    const response = await fetch('/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message }),
    });
    const result = await response.json();
    if (result.success) {
        alert('メッセージが送信されました');
    } else {
        alert('エラーが発生しました。');
    }
});
