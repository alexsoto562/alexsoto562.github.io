import React, { useEffect, useState } from "react";
import schoolService from "../../../services/schoolService";
import { useLocation, useNavigate, useParams } from "react-router-dom";

function AddEdit() {
  const [addEditData, setAddEditData] = useState({
    schoolName: "",
    city: "",
    level: "",
  });

  const { schoolIdFromUrl} = useParams();
  const [schoolId, setSchoolId] = useState(schoolIdFromUrl)
  const { state } = useLocation()
  const navigate = useNavigate()
  console.log('schooldIdFromUrl, schoolId,state', {schoolIdFromUrl, schoolId, state});

  const AEDataChange = (event) => {
    // console.log("onRegisterChange->");
    const target = event.target;
    const registerUserValue = target.value;
    const infoOfField = target.name;
    console.log("testing name", { infoOfField, registerUserValue });
    setAddEditData((prevState) => {
      // console.log("updater onChange");
      const newUserObject = {
        ...prevState,
      };
      newUserObject[infoOfField] = registerUserValue;
      return newUserObject;
    });
  };

  const submitButton = (e) => {
    e.preventDefault();
    console.log("submit button was clicked ");
    let idOfSchool = addEditData.id;
    if (idOfSchool) {
      schoolService
      .update(idOfSchool, addEditData)
      .then(onUpdateSuccess)
      .catch(onUpdateError);
    } else {
      schoolService
      .add(addEditData)
      .then(onAddSubmitSuccess)
      .catch(onAddSubmitError);
    }
  };

  const onUpdateSuccess = (response) => {
    console.log("updateSuccess firing", response);
    navigate('/Schools')
  };

  const onUpdateError = (response) => {
    console.warn({ error: response });
    console.log("onUpdateError firing");
  };

  const onAddSubmitSuccess = (response) => {
    console.log("ADD submit success", response);
    navigate('/Schools')
  };

  const onAddSubmitError = (response) => {
    console.warn({ error: response });
    console.log("onSubmitError firing");
  };

  useEffect(()=>{
    console.log('useEffect firing, state->', state);
    if (state?.payload) {
        setSchoolId(schoolIdFromUrl)
        setAddEditData((prevState)=>{
            return {
                ...prevState,
                ...state.payload
            };
        });
    }
  }, [schoolIdFromUrl, state])



  return (
    <React.Fragment>
      <div className="container">
        <div className="col-sm-6 mb-4">
          <div className="card">
            <div>Add Edit School</div>
            <form>
              <div>
                <label htmlFor="schoolName" className="form-label schoolName">
                  School Name :
                </label>
                <input
                  type="text"
                  name="schoolName"
                  id="schoolName"
                  placeholder="school Name"
                  value={addEditData.schoolName}
                  onChange={AEDataChange}
                />
              </div>
              <div>
                <label htmlFor="city" className="form-label city">
                  City:
                </label>
                <input
                  type="text"
                  name="city"
                  id="city"
                  placeholder="city name"
                  value={addEditData.city}
                  onChange={AEDataChange}
                />
              </div>
              <div>
                <label htmlFor="level" className="form-label level">
                  Level:
                </label>
                <input
                  type="text"
                  name="level"
                  id="level"
                  placeholder="level"
                  value={addEditData.level}
                  onChange={AEDataChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={submitButton}
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}

export default AddEdit;
