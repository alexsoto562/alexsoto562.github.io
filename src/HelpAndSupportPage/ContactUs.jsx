import React, { useState } from 'react';

function ContactUs() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Submitted', { email, subject, message });
  };

  return (
    <div className="card contact-section">
      {/* Placeholder for icon */}
      <div className="card-icon">📧</div>
      <h2>Contact Us</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          id="email"
          placeholder="Your Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <textarea
          id="message"
          placeholder="Your Message"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <input
          type="text"
          id="subject"
          placeholder="Subject (optional but helpful)"
          value={subject}
          onChange={(e) => setSubject(e.target.value)}
        />
        <button type="submit">Send</button>
      </form>
    </div>
  );
}

export default ContactUs;
