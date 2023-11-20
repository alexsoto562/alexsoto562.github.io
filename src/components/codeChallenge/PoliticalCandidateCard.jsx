import React, { useEffect } from "react";
import userService from "./services/politicalCandidateService";
import toastr from "toastr";

function CandidateCard() {
  useEffect(() => {
    userService.getAll().then(onGetAllSuccess).catch(onGetAllError);
  });

  const onGetAllSuccess = (response) => {
    const allCandidates = response;
    console.log("testing candidates->", allCandidates);
    var name = allCandidates.data.items.firstNameOne;
    console.log("this is the name",name);
    toastr.success("Success");
  };

  const onGetAllError = (response) => {
    console.warn({ error: response });
    console.log("error is firing");
  };

  return (
    <React.Fragment>
      <div>CandidateCard</div>
      <div className="container">
        <div className="form-right">
          <div className="form-container">
            <div className="col-lg-6 mb-4">
              <div className="card">
                <h5 name="firstNameOne" value="firstNameOne">firstNameOne + lastNameOne</h5>
                <p name="partyOne" value="partyOne">partyOne</p>
                <p name="currentVotesOne" value="currentVotesOne">currentVotesOne</p>
                <img className="imgSrcOne" src="" value="imgSrcOne" alt="partyOne candidate" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="form-left">
          <div className="form-container">
            <div className="col-lg-6 mb-4">
              <div className="card">
                <h5 name="firstNameOne" value="firstNameTwo">firstNameTwo + lastNameTwo</h5>
                <p name="partyTwo" value="partyTwo">partyTwo</p>
                <p name="currentVotesTwo" value="currentVotesTwo">currentVotesTwo</p>
                <img name="imgSrcTwo" src="" value="imgSrcTwo" alt="partyTwo candidate" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default CandidateCard;
