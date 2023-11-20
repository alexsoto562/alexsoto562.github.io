import React, { useState } from "react";
import userService from "../../../services/userService";
import toastr from "toastr";

function Login() {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    tenantId: "U04CEPRLBL7",
  });
  const onLoginChange = (event) => {
    console.log("onRegisterChange->");
    const target = event.target;
    const registerUserValue = target.value;
    const infoOfField = target.name;
    console.log("testing name", { infoOfField, registerUserValue });

    setLoginData((previousState) => {
      console.log("updater onChange");
      const newUserObject = {
        ...previousState,
      };
      newUserObject[infoOfField] = registerUserValue;
      return newUserObject;
    });
    console.log("end onChange");
  };

  const onLoginClick = (e) => {
    e.preventDefault();
    console.log("register button was clicked login Data->", loginData);
    userService.login(loginData).then(onLoginSuccess).catch(onLoginError);
  };

  const onLoginSuccess = (response) => {
    console.log("this is response", response);
    toastr.success("Success");
    window.location.href = "/";
  };

  const onLoginError = (response) => {
    console.warn({ error: response });
    console.log("error is firing");
    toastr.error("Failed to login");
  };

  return (
    <React.Fragment>
      {/* <form>
        <div>
          <label htmlFor="email" className="form-label email">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={loginData.email}
            onChange={onLoginChange}
          />
        </div>
        <div>
          <label htmlFor="password" className="form-label password">
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter a password"
            value={loginData.password}
            onChange={onLoginChange}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onLoginClick}
        >
          Login
        </button>
      </form> */}
      <form
        style={{
          backgroundColor: "#f5f5f5",
          padding: "1rem",
          borderRadius: "4px",
        }}
      >
        <div>
          <label
            htmlFor="email"
            style={{
              fontWeight: "bold",
              fontSize: "1rem",
              fontFamily: "Arial, sans-serif",
              marginBottom: "0.5rem",
            }}
            className="form-label email"
          >
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={loginData.email}
            onChange={onLoginChange}
            style={{
              padding: "0.5rem",
              marginBottom: "1rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            style={{
              fontWeight: "bold",
              fontSize: "1rem",
              fontFamily: "Arial, sans-serif",
              marginBottom: "0.5rem",
            }}
            className="form-label password"
          >
            Password:
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter a password"
            value={loginData.password}
            onChange={onLoginChange}
            style={{
              padding: "0.5rem",
              marginBottom: "1rem",
              borderRadius: "4px",
              border: "1px solid #ccc",
            }}
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary"
          onClick={onLoginClick}
          style={{
            backgroundColor: "#007bff",
            color: "#fff",
            border: "none",
            padding: "0.5rem 1rem",
            borderRadius: "4px",
          }}
        >
          Login
        </button>
      </form>
    </React.Fragment>
  );
}
export default Login;
/*
NOTES 
all my axios calls are firing 
why is it targetting the props from App not from login 

*/
