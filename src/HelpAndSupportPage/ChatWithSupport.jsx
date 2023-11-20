import React, { useState } from 'react';

function ChatWithSupport() {
  const [chatMessages, setChatMessages] = useState([]);
  const [chatInput, setChatInput] = useState('');

  const handleChatSubmit = (event) => {
    event.preventDefault();
    if (chatInput.trim() === '') return;

    setChatMessages([...chatMessages, { text: chatInput, sender: 'user' }]);
    setChatInput('');

    setTimeout(() => {
      setChatMessages((messages) => [
        ...messages,
        {
          text: 'Thank you for your message, how can we assist you further?',
          sender: 'support',
        },
      ]);
    }, 1000);
  };

  return (
    <div className="card chat-section">
      {/* Placeholder for icon */}
      <div className="card-icon">💬</div>
      <h2>Chat with Support</h2>
      <div className="chat-container">
        <div className="chat-messages">
          {chatMessages.map((msg, index) => (
            <div
              key={index}
              className={msg.sender === 'user' ? 'user-message' : 'support-message'}
            >
              {msg.text}
            </div>
          ))}
        </div>
        <form onSubmit={handleChatSubmit}>
          <input
            type="text"
            value={chatInput}
            onChange={(e) => setChatInput(e.target.value)}
            placeholder="Type your message here..."
          />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
}

export default ChatWithSupport;
