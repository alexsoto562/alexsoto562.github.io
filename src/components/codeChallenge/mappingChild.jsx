import React from "react";

function MappingChild(props){
    console.log("testing props", props);
    return(
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
            {/* {aFriend.title} */}
          </p>
        </div>

        
      </div>
    </div>
    )
}

export default React.memo(MappingChild)