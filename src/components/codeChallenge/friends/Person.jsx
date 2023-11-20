import React from "react";
import { useNavigate } from "react-router-dom";

function Person(props) {
  // console.log('testing props', props);
  const aFriend = props.person;
  // [aFriend] = useState

  const navigate = useNavigate();

  const onDeleteFriend = (e) => {
    e.preventDefault();
    props.onClick(props.person, e);
  };

  const onEditClicked = () => {
    console.log("Friend info  ->", aFriend);

    const stateForFriend = { type: "FRIEND_VIEW", payload: aFriend };

    navigate(`/AddEditFriend?${aFriend.id}`, { state: stateForFriend });
  };

  return (
    <div className="col-md-6">
      <div
        className="card"
        style={{ backgroundColor: "#f7f7f7", padding: "20px", margin: "20px" }}
      >
        <img
          src={aFriend.primaryImage.imageUrl}
          className="card-img-top rounded-circle"
          alt="profile pic holder"
          style={{
            border: "5px solid #fff",
            height: "150px",
            width: "150px",
            display: "block",
            margin: "0 auto",
          }}
        />
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
            {aFriend.title}
          </p>
        </div>

        <button
          type="submit"
          className="btn btn-danger"
          onClick={onDeleteFriend}
        >
          Delete
        </button>

        <button
          type="button"
          className="btn btn-warning"
          onClick={onEditClicked}
        >
          Edit
        </button>
      </div>
    </div>
  );
}
export default React.memo(Person);
/*
NOTES
react. memo i need to look into it

i have to open a new modal window
*/
