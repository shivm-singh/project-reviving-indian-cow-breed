// script.js
function sendMessage() {
    const userInput = document.getElementById('userInput');
    const chatMessages = document.getElementById('chatMessages');
    const message = userInput.value.trim();

    if (message === '') return;

    // Add user message
    const userMessage = document.createElement('div');
    userMessage.classList.add('message', 'user-message');
    userMessage.textContent = message;
    chatMessages.appendChild(userMessage);

    // Get bot response
    const botResponse = getBotResponse(message.toLowerCase());
    
    // Add bot message
    const botMessage = document.createElement('div');
    botMessage.classList.add('message', 'bot-message');
    botMessage.textContent = botResponse;
    chatMessages.appendChild(botMessage);

    // Clear input and scroll to bottom
    userInput.value = '';
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

function getBotResponse(message) {
    // Simple response logic
    if (message.includes('why') && message.includes('desi cow')) {
        return "Desi cows are important because they’re well-adapted to India’s climate, resistant to diseases, and their milk, urine, and dung have medicinal and agricultural benefits.";
    } else if (message.includes('benefit') || message.includes('advantage')) {
        return "Benefits include sustainable farming through natural fertilizers, high-quality A2 milk, and lower maintenance costs compared to exotic breeds.";
    } else if (message.includes('sustainab')) {
        return "Desi cows contribute to sustainability by supporting organic farming, reducing dependency on chemical fertilizers, and preserving biodiversity.";
    } else if (message.includes('how') && message.includes('revive')) {
        return "Reviving desi cows involves promoting organic farming, educating farmers, conserving native breeds, and encouraging the use of their products.";
    } else {
        return "Could you please be more specific? I can help with questions about desi cow benefits, sustainability, or revival methods!";
    }
}

// Allow Enter key to send message
document.getElementById('userInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        sendMessage();
    }
});