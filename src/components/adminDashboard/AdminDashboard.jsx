import React, { useState } from "react";
import "./admindashboard.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./DateInput.css";
import { Button } from "reactstrap";
import Card from "react-bootstrap/Card";

// import Card from "./AdminCard";
// import AdminDbNav from "./AdminDbNav";

function AdminDashboard() {
  const [startDate, setStartDate] = useState(new Date());

  const handleChange = (date) => {
    setStartDate(date);
  };

  const [selectedAnimal, setSelectedAnimal] = useState("");

  const dashBoard = [
    {
      title: "sales",
      number: "$10,800",
      info: "number of sales",
    },
    {
      title: "courses",
      number: 2456,
      info: "pending",
    },
    {
      title: "studets",
      number: 122456,
      info: "students",
    },
    {
      title: "instructors",
      number: 22786,
      info: "instructors",
    },
  ];

  const handleCardClick = (animalName) => {
    setSelectedAnimal(animalName);
  };

  return (
    <React.Fragment>
      <div>admin dashboard</div>
      <div>
        <nav className="navbar">
          <input
            type="text"
            placeholder="Search Entire Dashboard"
            className="search-input"
          />
          <img
            src="https://banner2.cleanpng.com/20180713/riy/kisspng-los-angeles-angels-logo-baseball-anaheim-angels-5b4824ee248248.4403745115314547021496.jpg"
            alt="logo"
            className="logo"
          />
        </nav>
      </div>

      <div className="row">
        <div className="col">
          <div style={{ fontSize: "30px" }}>Dashboard</div>
        </div>
        <div className="col">
          <div className="date-input-container">
            <label htmlFor="date-input">Select a date:</label>
            <DatePicker
              selected={startDate}
              onChange={handleChange}
              dateFormat="dd/MM/yyyy"
              showMonthDropdown
              showYearDropdown
              dropdownMode="select"
            />
          </div>
        </div>

        <div className="col">
          {" "}
          <Button color="primary">Settings</Button>
        </div>
      </div>
      {/* 
      <div className="card-row-container">
        <div className="card">
          <h2>SALES</h2>
          <p className="p-bold-size">$10,000</p>
          <p>Number of sales</p>
        </div>
        <div className="card">
          <h2>COURSES</h2>
          <p className="p-bold-size">2,456</p>
          <p>Number of pending</p>
        </div>
        <div className="card">
          <h2>STUDENTS</h2>
          <p className="p-bold-size">122,456</p>
          <p>Students</p>
        </div>
        <div className="card">
          <h2>INSTRUCTOR</h2>
          <p className="p-bold-size">22,786</p>
          <p>Instructor</p>
        </div>
      </div> */}

      <div className="App">
        <h1>React Animal Card Example</h1>
        <div className="card-container">
          {dashBoard.map((data) => (
            <Card style={{ width: "18rem" }} key={data.title}>
              <Card.Body>
                <Card.Title>{data.title}</Card.Title>

                <Card.Text>{data.number}</Card.Text>
                <Card.Text>{data.info}</Card.Text>
                <Button
                  variant="primary"
                  onClick={() => handleCardClick(data.title)}
                >
                  Show Info
                </Button>
              </Card.Body>
            </Card>
          ))}
        </div>

        <div className="animal-info">
  <h2>You selected {selectedAnimal}</h2>
  {dashBoard.map((data) => {
    if (data.title === selectedAnimal) {
      return (
        <div key={data.title}>
          <p>Number: {data.number}</p>
          <p>Info: {data.info}</p>
        </div>
      );
    }
    return null;
  })}
</div>


      </div>

      {/* <AdminDbNav/> */}
    </React.Fragment>
  );
}

export default AdminDashboard;
