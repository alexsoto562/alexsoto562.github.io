import React from "react";
import { useNavigate } from "react-router-dom";

function JobMap(props){
    const aJob = props.jobData
    console.log("props.jobData",aJob);

    const navigate = useNavigate()

    const onEditJobClicked = (e) => {
        e.preventDefault();
        console.log("onEditJobClicked was clicked");
      };
    
      const onDeleteJobClicked = (e) => {
        e.preventDefault();
        console.log("onDeleteJobClicked was clicked");
      };
    
      const onViewMoreClicked = (e) => {
        e.preventDefault();
        console.log("onViewMoreClicked testing job info->", aJob);

        const stateForJob = {type:'JOB_VIEW' , payload: aJob}

        navigate(`/Jobs?${aJob.id}` , { state: stateForJob});
      };

    return(

        <div className="row-md-3">
            <div className="col-sm-5">
        <div
          className="card"
          style={{
            backgroundColor: "#f7f7f7",
            padding: "20px",
            margin: "20px",
          }}
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
              {aJob.title}
            </p>
          </div>

          <div className="card-text">
            <p
              className="card-title"
              style={{
                fontFamily: "Arial",
                fontSize: "24px",
                color: "#333",
                textAlign: "center",
              }}
            >
              {aJob.description}
            </p>
          </div>

          <div className="card-text">
            <p
              className="card-title"
              style={{
                fontFamily: "Arial",
                fontSize: "24px",
                color: "#333",
                textAlign: "center",
              }}
            >
              {aJob.summary}
            </p>
          </div>

          <div className="card-text">
            <p
              className="card-title"
              style={{
                fontFamily: "Arial",
                fontSize: "18px",
                color: "#green",
                textAlign: "center",
              }}
            >
              {aJob.pay}
            </p>
          </div>

          <button
            type="button"
            className="btn btn-info"
            onClick={onEditJobClicked}
          >
            Edit
          </button>

          <button
            type="submit"
            className="btn btn-danger"
            onClick={onDeleteJobClicked}
          >
            Delete
          </button>

          <button
            type="button"
            className="btn btn-light"
            onClick={onViewMoreClicked}
          >
            View More
          </button>
        </div>
      </div>
        </div>
        
    );
}
export default React.memo(JobMap)

/*
NOTES

do i have to create a separate page?
i could do more coding 
i think ima put my desk and tv on this side 
i need to charge my my stuff i need to go look at tvs

*/