import React, { useState } from "react";
import userService from "./services/politicalCandidateService";
// import PoliticalCandidateCard from "./PoliticalCandidateCard";
import toastr from "toastr";
// import { Routes, Route } from "react-router-dom";

function PoliticalCandidate() {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  const [presidentDataOne, setPresidentDataOne] = useState({
    firstNameOne: "",
    lastNameOne: "",
    currentVotesOne: "",
    partyOne: "",
    avatarUrlOne: "",
    tenantId: "U04CEPRLBL7",
  });

  const onPresDataOneChange = (event) => {
    // console.log("onRegisterChange->");
    const target = event.target;
    const registerUserValue = target.value;
    const infoOfField = target.name;
    console.log("testing name", { infoOfField, registerUserValue });

    setPresidentDataOne((previousState) => {
      // console.log("updater onChange");
      const newUserObject = {
        ...previousState,
      };
      newUserObject[infoOfField] = registerUserValue;

      return newUserObject;
    });
    // console.log("end onChange");
  };

  const onSubmitOneClick = (e) => {
    e.preventDefault();
    console.log("submitOne was clicked", presidentDataOne);
    userService
      .add(presidentDataOne)
      .then(onSubmitOneClickSuccess)
      .catch(onSubmitOneClickError);
  };

  const onSubmitOneClickSuccess = (response) => {
    console.log("registerSuccess is firing", response);
    toastr.success("Success");
  };

  const onSubmitOneClickError = (response) => {
    console.warn({ error: response });
    toastr.error("error");
  };

  const [presidentDataTwo, setPresidentDataTwo] = useState({
    firstNameTwo: "",
    lastNameTwo: "",
    currentVotesTwo: "",
    partyTwo: "",
    avatarUrlTwo: "",
    tenantId: "U04CEPRLBL7",
  });

  const onPresDataTwoChange = (event) => {
    // console.log("onRegisterChange->");
    const target = event.target;
    const registerUserValue = target.value;
    const infoOfField = target.name;
    console.log("testing name", { infoOfField, registerUserValue });

    setPresidentDataTwo((previousState) => {
      // console.log("updater onChange");
      const newUserObject = {
        ...previousState,
      };
      newUserObject[infoOfField] = registerUserValue;

      return newUserObject;
    });
    // console.log("end onChange");
  };

  const onSubmitTwoClick = (e) => {
    e.preventDefault();
    console.log("submitOne was clicked", presidentDataTwo);
    userService
      .add(presidentDataTwo)
      .then(onSubmitTwoClickSuccess)
      .catch(onSubmitTwoClickError);
  };

  const onSubmitTwoClickSuccess = (response) => {
    console.log("registerSuccess is firing", response);
    toastr.success("Success");
  };

  const onSubmitTwoClickError = (response) => {
    console.warn({ error: response });
    toastr.error("error");
  };

  return (
    <React.Fragment>
      <div className="container">
        <div className="form-right">
          <div className="form-container">
            <div className="col-lg-6 mb-4">
              <div className="card">
                <div>
                  <label
                    htmlFor="firstNameOne"
                    className="form-label firstNameOne"
                  >
                    First Name:
                  </label>
                  <input
                    type="text"
                    name="firstNameOne"
                    id="firstNameOne"
                    placeholder="Enter your first name"
                    value={presidentDataOne.firstNameOne}
                    onChange={onPresDataOneChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastNameOne"
                    className="form-label lastNameOne"
                  >
                    Last Name:
                  </label>
                  <input
                    type="text"
                    name="lastNameOne"
                    id="lastNameOne"
                    placeholder="Enter your last name"
                    value={presidentDataOne.lastNameOne}
                    onChange={onPresDataOneChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="currentVotesOne"
                    className="form-label currentVotesOne"
                  >
                    Current Votes:
                  </label>
                  <input
                    type="text"
                    name="currentVotesOne"
                    id="currentVotesOne"
                    placeholder="Number of current votes"
                    value={presidentDataOne.currentVotesOne}
                    onChange={onPresDataOneChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="Party"
                    className="form-label Party"
                    name="partyOne"
                    id="partyOne"
                  >
                    Party:
                  </label>
                  <select onChange={handleChange}>
                    <option value="">Select a party</option>
                    <option value="option1">Republican</option>
                    <option value="option2">Democrat</option>
                    <option value="option3">Libritarian</option>
                    <option value="option4">Independent</option>
                  </select>
                  {selectedOption && <p>You selected: {selectedOption}</p>}
                </div>

                <div>
                  <label
                    htmlFor="profileUrlOne"
                    className="form-label profileUrlOne"
                  >
                    Profile Url:
                  </label>
                  <input
                    type="text"
                    name="avatarUrl"
                    id="profileUrlOne"
                    placeholder="Enter a Url of image"
                    value={presidentDataOne.avatarUrlOne}
                    onChange={onPresDataOneChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={onSubmitOneClick}
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="form-left">
          <div className="form-container">
            <div className="col-lg-6 mb-4">
              <div className="card">
                <div>
                  <label
                    htmlFor="firstNameTwo"
                    className="form-label firstNameTwo"
                  >
                    First Name:
                  </label>
                  <input
                    type="text"
                    name="firstNameTwo"
                    id="firstNameTwo"
                    placeholder="Enter your first name"
                    // value={registerData.firstName}
                    onChange={onPresDataTwoChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="lastNameTwo"
                    className="form-label lastNameTwo"
                  >
                    Last Name:
                  </label>
                  <input
                    type="text"
                    name="lastNameTwo"
                    id="lastNameTwo"
                    placeholder="Enter your last name"
                    // value={registerData.lastName}
                    onChange={onPresDataTwoChange}
                  />
                </div>
                <div>
                  <label
                    htmlFor="currentVotesTwo"
                    className="form-label currentVotesTwo"
                  >
                    Current Votes:
                  </label>
                  <input
                    type="text"
                    name="currentVotesTwo"
                    id="currentVotesTwo"
                    placeholder="Number of current votes"
                    // value={registerData.lastName}
                    onChange={onPresDataTwoChange}
                  />
                </div>

                <div>
                  <label
                    htmlFor="PartyTwo"
                    className="form-label PartyTwo"
                    name="partyTwo"
                    id="partyTwo"
                  >
                    Party:
                  </label>
                  <select onChange={handleChange}>
                    <option value="">Select a party</option>
                    <option value="option1">Republican</option>
                    <option value="option2">Democrat</option>
                    <option value="option3">Libritarian</option>
                    <option value="option4">Independent</option>
                  </select>
                  {selectedOption && <p>You selected: {selectedOption}</p>}
                </div>

                <div>
                  <label
                    htmlFor="profileUrlTwo"
                    className="form-label profileUrlTwo"
                  >
                    Profile Url:
                  </label>
                  <input
                    type="text"
                    name="avatarUrl"
                    id="profileUrlTwo"
                    placeholder="Enter a Url of image"
                    onChange={onPresDataTwoChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary"
                  onClick={onSubmitTwoClick}
                >
                  submit
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <Routes>
        <Route
          path="/PoliticalCandidateCard"
          element={<PoliticalCandidateCard userOne={presidentDataOne} />}
        ></Route>
      </Routes> */}
    </React.Fragment>
  );
}

export default PoliticalCandidate;
