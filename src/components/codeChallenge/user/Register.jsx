import React, { useState } from "react";
import userService from "../../../services/userService";
// import { Button } from "bootstrap";
import toastr from "toastr";

function Register() {
  const [registerData, setRegisterData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    passwordConfirm: "",
    avatarUrl: "",
    tenantId: "U04CEPRLBL7",
  });

  const onRegisterChange = (event) => {
    // console.log("onRegisterChange->");
    const target = event.target;
    const registerUserValue = target.value;
    const infoOfField = target.name;
    console.log("testing name", { infoOfField, registerUserValue });

    setRegisterData((previousState) => {
      // console.log("updater onChange");
      const newUserObject = {
        ...previousState,
      };
      newUserObject[infoOfField] = registerUserValue;

      return newUserObject;
    });
    // console.log("end onChange");
  };

  const OnRegisterClick = (e) => {
    e.preventDefault();
    console.log("register button was clicked",registerData);
    userService
    .register(registerData)
    .then(onRegisterSuccess)
    .catch(onRegisterError)
  };

  const onRegisterSuccess=(response)=>{
    console.log("registerSuccess is firing",response);
    toastr.success("Success")
  }

  const onRegisterError=(response)=>{
    console.warn({error:response})
    toastr.error("error")
  }

  return (
    <React.Fragment>
      <div>Register</div>

      <form>
        <div>
          <label htmlFor="email" className="form-label email">
            Email:
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter your email"
            value={registerData.email}
            onChange={onRegisterChange}
          />
        </div>
        <div>
          <label htmlFor="firstName" className="form-label firstName">
            First Name:
          </label>
          <input
            type="text"
            name="firstName"
            id="firstName"
            placeholder="Enter your first name"
            value={registerData.firstName}
            onChange={onRegisterChange}
          />
        </div>
        <div>
          <label htmlFor="lastName" className="form-label lastName">
            Last Name:
          </label>
          <input
            type="text"
            name="lastName"
            id="lastName"
            placeholder="Enter your last name"
            value={registerData.lastName}
            onChange={onRegisterChange}
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
            value={registerData.password}
            onChange={onRegisterChange}
          />
        </div>
        <div>
          <label
            htmlFor="confirmPassword"
            className="form-label confirmpassword"
          >
            Confirm Password:
          </label>
          <input
            type="password"
            name="passwordConfirm"
            id="confirmPassword"
            placeholder="Retype your password"
            value={registerData.confirmPassword}
            onChange={onRegisterChange}
          />
        </div>

        <div>
          <label htmlFor="profileUrl" 
          className="form-label profileUrl"
          >
            Profile Url:
          </label>
          <input
            type="text"
            name="avatarUrl"
            id="profileUrl"
            placeholder="Enter a Url of image"
            value={registerData.avatarUrl}
            onChange={onRegisterChange}
          />
        </div>

        <button
          type="submit"
          className="btn btn-primary"
          onClick={OnRegisterClick}
        >
          Register
        </button>
      </form>
    </React.Fragment>
  );
}

export default Register;
/*
NOTES
the name: has to be the same as the variable 
value is the .val of js 
uou need onClick that is our wire up handlers
no start up needed its the same as jq 
just wire everything correctly 
target them by class
*/