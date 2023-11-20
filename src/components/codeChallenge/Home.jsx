import React from "react";

function Home(props) {
  // console.log("this is props", props);

  return (
    <React.Fragment>
      {/* <div 
        style={{
          border: "2px solid #000000",
          borderRadius: "5px",
          padding: "20px",
          fontFamily: "Arial",
          fontSize: "20px",
          color: "#FFFFFF",
          backgroundColor: "#00008B",
        }}
      >
        Home Hello,
         <p>{props.user.firstName} {props.user.lastName}  </p>
      </div> */}
      {/* <div
                style={{
                  backgroundColor: "black",
                  padding: "1rem",
                  borderRadius: "4px",
                  display: "inline-block",
                }}
              >
                <a
                  href="/"
                  className="d-flex align-items-center text-white text-decoration-none"
                >
                  <img
                    src={props.user.avatarUrl}
                    alt="avatar"
                    style={{
                      width: "150px",
                      height: "150px",
                      marginRight: "1rem",
                      borderRadius: "50%",
                    }}
                  />
                  <div>
                    <div style={{ fontSize: "1rem", fontWeight: "bold" }}>
                      {props.user.firstName} {props.user.lastName}
                    </div>
                    <div style={{ fontSize: "0.8rem" }}>{props.user.email}</div>
                  </div>
                </a>
      </div> */}

      <div
        style={{
          backgroundColor: "#f5f5f5",
          padding: "1rem",
          borderRadius: "4px",
          display: "inline-block",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <img
            src={props.user.avatarUrl}
            alt="avatar"
            style={{ width: "150px", height: "150px" }}
          />
          <div
            style={{ marginTop: "1rem", fontSize: "1rem", fontWeight: "bold" }}
          >
            {props.user.firstName} {props.user.lastName}
          </div>
          <div style={{ fontSize: "0.8rem" }}>{props.user.email}</div>
        </div>
      </div>
    </React.Fragment>
  );
}
export default Home;