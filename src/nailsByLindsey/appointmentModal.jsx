import React, {useState} from "react";
import axios from "axios";
import "./modal.css";

function AppointmentModal({ isOpen, onClose }) {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState(null)

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      firstName,
      lastName,
      phone,
      email,
    };

    axios.post("http://localhost:7135/api/appointment", formData)
      .then(response => {
        const data = response.data;

        if (response.status === 200) {
          setMessage(data || "Appointment received!");

          // Optionally clear the form fields
          setFirstName("");
          setLastName("");
          setPhone("");
          setEmail("");
        } else {
          setMessage(data || "Error creating appointment. Please try again.");
        }
      })
      .catch(error => {
        const errorMessage = (error.response && error.response.data) || "An unexpected error occurred. Please try again.";
        console.error('this is the error message',errorMessage);  // Logging the error message to the console
        setMessage(errorMessage);
      });
};


  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button onClick={onClose} className="close-modal">
          Close
        </button>
        <h2>Complete Appointment</h2>

        {/* Display message (success or error) */}
        {message && <div className="message">{message}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label>Name *</label>
            <div className="name-fields">
              <input 
                type="text" 
                placeholder="First Name" 
                value={firstName}
                onChange={e => setFirstName(e.target.value)}
              />
              <input 
                type="text" 
                placeholder="Last Name"
                value={lastName}
                onChange={e => setLastName(e.target.value)}
              />
            </div>
          </div>
          <div className="input-group">
            <label>Phone *</label>
            <input 
              type="tel" 
              placeholder="Enter your phone number"
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
            <p>
              Add your phone number to receive an appointment reminder via text
              message.
            </p>
            <p className="small-text">
              Message and data rates may apply. One message per appointment.
            </p>
          </div>
          <div className="input-group">
            <label>Email *</label>
            <input 
              type="email" 
              placeholder="Enter your email address" 
              value={email}
              onChange={e => setEmail(e.target.value)}
            />
          </div>
          <div className="btn-group">
            <button type="button" className="redeem-btn">
              Redeem Coupon
            </button>
            <div style={{ display: "flex", alignItems: "center" }}>
              <button type="submit" className="complete-btn">
                Complete Appointment »
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
);

}

export default AppointmentModal;
