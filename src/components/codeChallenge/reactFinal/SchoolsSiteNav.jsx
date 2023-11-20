import React from "react";
import { Link } from "react-router-dom";

function SiteNav() {
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
                <Link
                  to="/Schools"
                  className="nav-link px-2 text-white link-button"
                >
                  Schools
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/AdminDashboard"
                  className="nav-link px-2 text-white link-button"
                >
                  Admin Dashboard
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/GymApp"
                  className="nav-link px-2 text-white link-button"
                >
                  GymApp
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/Basic"
                  className="nav-link px-2 text-white link-button"
                >
                  Basic Formik
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  to="/InterviewMapping"
                  className="nav-link px-2 text-white link-button"
                >
                  mapping
                </Link>
              </li>


              <li className="nav-item">
                <Link
                  to="/SchoolsAddEdit"
                  className="nav-link px-2 text-white link-button"
                >
                  Add / Edit School
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </React.Fragment>
  );
}

export default SiteNav;
