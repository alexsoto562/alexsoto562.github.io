import React from "react";

function SingleCar(props) {
  const carProps = props.car;

  return (
    <React.Fragment>
      <div className="card">
        <div className="card-body">
          {/* <h5 className="card-title">Make</h5> */}
          <h5 className="card-title">{carProps.make}</h5>
          {/* <p className="card-text">{Model}</p> */}
          <p className="card-text">{carProps.model}</p>
          {/* <p className="card-text">Year</p> */}
          <p className="card-text">{carProps.year}</p>
        </div>
      </div>
    </React.Fragment>
  );
}

export default SingleCar;
