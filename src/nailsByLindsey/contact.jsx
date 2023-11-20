import React, { useEffect, useState } from "react";
import AppointmentModal from "./appointmentModal";
import "./nailscalendar.css";


function ScheduleModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <h2>Schedule Your Appointment</h2>
        {/* Form elements go here */}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
}

const TimeDropdown = ({ onClose }) => (
  <div className="time-dropdown">
    <button onClick={onClose} className="dropdown-option">
      Continue »
    </button>
  </div>
);

function Contact() {
  const [timeZone, setTimeZone] = useState("(GMT-7:00) Pacific Time");
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isModalOpen, setModalOpen] = useState(false);
  const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"];
  const times = ["2:00pm", "4:00pm", "6:00pm"];

  const getWeekDays = () => {
    const today = new Date();
    const currentDayOfWeek = today.getDay();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - currentDayOfWeek + 1);

    return days.map((_, index) => {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + index);
      return `${date.getMonth() + 1}/${date.getDate()}`;
    });
  };

  const [weekDates, setWeekDates] = useState(getWeekDays);

  useEffect(() => {
    setWeekDates(getWeekDays());
  }, []);

  useEffect(() => {
    const closeDropdown = (e) => {
      if (!e.target.closest(".calendar-day")) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("click", closeDropdown);
    return () => {
      document.removeEventListener("click", closeDropdown);
    };
  }, []);

  const [isAppointmentModalOpen, setAppointmentModalOpen] = useState(false);


  const handleContinue = () => {
    setModalOpen(false); // Close the current modal
    setAppointmentModalOpen(true); // Open the appointment modal
  };
  

  return (
    <React.Fragment>
      <div className="timezone-container">
        <span>YOUR TIME ZONE</span>
        <select value={timeZone} onChange={(e) => setTimeZone(e.target.value)}>
          <option value="(GMT-7:00) Pacific Time">
            (GMT-7:00) Pacific Time
          </option>
          <option value="(GMT-5:00) Eastern Time">
            (GMT-5:00) Eastern Time
          </option>
        </select>
        <span>MORE TIMES -> </span>
      </div>

      <div className="calendar-container">
        {days.map((day, index) => (
          <div key={index} className="calendar-column">
            <div className="calendar-header">
              {day}
              <br />
              {weekDates[index]}
            </div>
            {times.map((time, timeIndex) => (
              <div
                key={timeIndex}
                className="calendar-day"
                onClick={() => setActiveDropdown(`${index}-${timeIndex}`)}
              >
                {time}
                {activeDropdown === `${index}-${timeIndex}` && (
                  <TimeDropdown onClose={handleContinue} />
                )}
              </div>
            ))}
          </div>
        ))}
      </div>

    <ScheduleModal isOpen={isModalOpen} onClose={() => setModalOpen(false)} />
    <AppointmentModal isOpen={isAppointmentModalOpen} onClose={()=> setAppointmentModalOpen(false)}/>
    </React.Fragment>
  );
}

export default Contact;
