import React from 'react';
import FAQ from './FAQ';
import ContactUs from './ContactUs';
import ChatWithSupport from './ChatWithSupport';
import './helpandsupport.css';

function HelpAndSupportMain() {
  return (
    <React.Fragment>
      <div className="support-container">
        <h1>Help and Support Page</h1>
        <p>Get in touch and let us know how we can help.</p>

        <div className="card-container">
          <FAQ />
          <ContactUs />
          <ChatWithSupport />
        </div>
      </div>
    </React.Fragment>
  );
}

export default HelpAndSupportMain;
