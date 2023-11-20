import React from "react";

import { Link, useNavigate } from "react-router-dom";
import userService from "../../services/userService";

function Site(props) {
  const navigate = useNavigate();

  const logoutButton = (e) => {
    e.preventDefault();
    console.log("logoutButton was clicked ");

    if (props.user.isLoggedIn) {
      userService.logout().then(onLogoutSuccess).catch(onLogoutError);
    } else {
      navigate("/login");
    }
  };

  const onLogoutSuccess = (response) => {
    console.log("logoutSuccess");
    // window.location.href = "/";
    navigate("/");
    props.logoutHandler(response);
  };

  const onLogoutError = (response) => {
    console.warn({ error: response });
    console.log("onLogoutError is firing");
  };

  return (
    <React.Fragment>
      <nav
        className="navbar navbar-expand-md navbar-dark bg-dark"
        aria-label="Fourth navbar example"
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <img
              src="https://pw.sabio.la/images/Sabio.png"
              width="30"
              height="30"
              className="d-inline-block align-top"
              alt="Sabio"
            />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarsExample04"
            aria-controls="navbarsExample04"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarsExample04">
            <ul className="navbar-nav me-auto mb-2 mb-md-0">
              <li className="nav-item">
                <Link to="/" className="nav-link px-2 text-white link-button">
                  Home Page
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Friends"
                  className="nav-link px-2 text-white link-button"
                >
                  Friends
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/VideoPlayer"
                  className="nav-link px-2 text-white link-button"
                >
                  Video player
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Jobs"
                  className="nav-link px-2 text-white link-button"
                >
                  Jobs
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Companies"
                  className="nav-link px-2 text-white link-button"
                >
                  Tech Companies
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Events"
                  className="nav-link px-2 text-white link-button"
                >
                  Events
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/TestAndAjax"
                  className="nav-link px-2 text-white link-button"
                >
                  Test and Ajax Call
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Cars"
                  className="nav-link px-2 text-white link-button"
                >
                  Cars Assessment
                </Link>
              </li>
            </ul>
            <div className="text-end">
              {/* <a
                href="/"
                className="align-items-center mb-2 me-2 mb-lg-0 text-white text-decoration-none"
              >
                {props.user.firstName} {props.user.lastName} {props.user.avatarUrl}
              </a> */}

              <div
                style={{
                  backgroundColor: "black",
                  padding: "1rem",
                  borderRadius: "4px",
                  display: "inline-block",
                }}
              >
                <a
                  href="/"
                  className="d-flex align-items-center text-white text-decoration-none"
                >
                  <div>
                    <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      {props.user.firstName} {props.user.lastName}
                    </div>
                    <div style={{ fontSize: "0.8rem" }}>{props.user.email}</div>
                  </div>
                </a>
              </div>

              <button
                type="button"
                className="btn btn-danger"
                onClick={logoutButton}
              >
                {props.user.isLoggedIn ? "Logout" : "Login"}
              </button>

              <Link to="/Register" type="button" className="btn btn-warning">
                Register
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}
export default Site;
/*
NOTES  
ima try to make my log in look a little better
okay i made it look a little better
*/
