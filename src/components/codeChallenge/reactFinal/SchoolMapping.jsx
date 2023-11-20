import React from "react";
import { useNavigate } from "react-router-dom";
import PropTypes from "prop-types"

function Mapping(props) {
  console.log("props", props);
  const aSchool = props.school;
  // console.log("testing props school", aSchool);

  const navigate = useNavigate()

  const onEditSchool = () => {
    console.log("school info->", aSchool);
    const stateForSchool = {type:"SCHOOL_VIEW" , payload:aSchool};
    navigate(`/SchoolsAddEdit?${aSchool.id}`, {state: stateForSchool})
    
  };

  const onDeleteSchool = (e) => {
    e.preventDefault();
    console.log("onDeleteSchool was clicked ");
    props.onClick(props.school, e)
  };

  return (
    <div className="col-md-6">
      <div
        className="card"
        style={{ backgroundColor: "#f7f7f7", padding: "20px", margin: "20px" }}
      >
        <div className="card-body">
          <p
            className="card-title"
            style={{
              fontFamily: "Arial",
              fontSize: "24px",
              color: "#333",
              textAlign: "center",
            }}
          >
            {aSchool.schoolName}
          </p>
        </div>

        <div className="card-body">
          <p
            className="card-title"
            style={{
              fontFamily: "Arial",
              fontSize: "24px",
              color: "#333",
              textAlign: "center",
            }}
          >
            {aSchool.city}
          </p>
        </div>

        <div className="card-body">
          <p
            className="card-title"
            style={{
              fontFamily: "Arial",
              fontSize: "24px",
              color: "#333",
              textAlign: "center",
            }}
          >
            {aSchool.level}
          </p>
        </div>

        <button
          type="button"
          className="btn btn-warning"
          onClick={onEditSchool}
        >
          Edit
        </button>

        <button
          type="submit"
          className="btn btn-danger"
          onClick={onDeleteSchool}
        >
          Delete
        </button>
      </div>
    </div>
  );
}

Mapping.propTypes = {
  mapping: PropTypes.shape({
    fullName:PropTypes.string.isRequired,
    email:PropTypes.string.isRequired
  })
}


export default React.memo(Mapping);
