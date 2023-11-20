import React, { useState } from 'react';
import './faq.css';


function FAQ() {
    const [openFAQ, setOpenFAQ] = useState(null);
  
    const toggleFAQ = (index) => {
      setOpenFAQ(openFAQ === index ? null : index);
    };

  // Define an array of frequently asked questions
  const faqItems = [
    {
      question: 'How do I reset my password?',
      answer: 'You can reset your password by clicking on the "Forgot Password" link on the login page.',
    },
    {
      question: 'Is my data secure?',
      answer: 'Yes, we use state-of-the-art encryption to secure your data.',
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept credit cards, PayPal, and other major payment methods.',
    },
    {
      question: 'Can I cancel my subscription?',
      answer: 'Yes, you can cancel your subscription at any time in your account settings.',
    },
    {
      question: 'How do I contact customer support?',
      answer: 'You can contact our customer support team by visiting our Contact Us page.',
    },
  ];

  return (
    <div className="faq-container">
      <h2>Top questions</h2>
      <div className="faq-items">
        {faqItems.map((item, index) => (
          <div className={`faq-item ${openFAQ === index ? 'open' : ''}`} key={index}>
            <button className="faq-question" onClick={() => toggleFAQ(index)}>
              {item.question}
            </button>
            <div className={`faq-answer ${openFAQ === index ? 'show' : ''}`}>
              <p>{item.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FAQ;
