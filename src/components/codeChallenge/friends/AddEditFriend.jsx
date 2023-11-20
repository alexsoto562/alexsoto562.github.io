import React, { useState, useEffect } from "react";
// import toastr from "toastr";
import userService from "../../../services/userService";
import { useLocation, useParams } from "react-router-dom";

function AddEdit() {
  const [addEditData, setAddEditData] = useState({
    title: "",
    bio: "",
    summary: "",
    headline: "",
    slug: "",
    statusId: "",
    primaryImage: "",
  });

  const { friendIdFrmUrl } = useParams();
  //is useParams() getting the whole url ? is it like window.location.hash

  // const [myProduct,setMyProduct]=useState(defaultProduct)
  const [prodId, setProductId] = useState(friendIdFrmUrl);

  const { state } = useLocation();
  //from what im understanding from useLocation its the same as useNavigate

  console.log("friendIdFrmUrl,prodId,state", { friendIdFrmUrl, prodId, state });
  //when i console log friendIdFrmUrl & prodId is says undefined so does that mean i dont need it?
  //why does it fire twice?

  // console.log("Testing addeditData", addEditData);

  
  //is onAddEditDataChange just formData.val()
  
  const onAddEditDataChange = (event) => {
    // console.log("onRegisterChange->");
    const target = event.target;
    const registerUserValue = target.value;
    const infoOfField = target.name;
    //   console.log("testing name", { infoOfField, registerUserValue });
    setAddEditData((previousState) => {
      // console.log("updater onChange");
      const newUserObject = {
        ...previousState,
      };
      newUserObject[infoOfField] = registerUserValue;
      return newUserObject;
    });
    // console.log("end onChange");
  };

  const onAddOrEditSubmitClick = (e) => {
    e.preventDefault();
    let idOfFriend = addEditData.id;
    console.log("payload->", addEditData);
    // const payload = { ...addEditData };
    // payload.primaryImage = payload.primaryImage.imageUrl;
    if (idOfFriend) {
      userService
        .update(idOfFriend, addEditData)
        .then(onUpdateSuccess)
        .catch(onUpdateError);
    } else {
      userService
        .add(addEditData)
        .then(onAddFriendClickSuccess)
        .catch(onAddFriendClickError);
    }
  };

  const onUpdateSuccess = (response) => {
    console.log("updateSuccess firing", response);
  };

  const onUpdateError = (response) => {
    console.warn({ error: response });
    console.log("onUpdateError firing");
  };

  const onAddFriendClickSuccess = (response) => {
    console.log("onAddFriendClickSuccess firing", response);
  };

  const onAddFriendClickError = (response) => {
    console.warn({ error: response });
    console.log("onAddFriendClickError firing");
  };

  //how does the useEffect fire when the edit is clicked if im 
  //not passing it? is it because of the if statement?
  useEffect(() => {
    console.log("useEffect firing, and my state->", state);
    //am i getting this from Person.jsx??
    if (state?.payload) {
      setProductId(friendIdFrmUrl);
      //prevents the state from going stale?
      setAddEditData((prevState) => {
        return {
          ...prevState,
          //getting all previous info
          ...state.payload,
          //copying the properties of state.payload over the prevState
          primaryImage: state.payload.primaryImage.imageUrl,
          //using the above to get primaryImage or else 400 bad request
        };
      });
    }
  }, [friendIdFrmUrl, state]);

  return (
    <React.Fragment>
      <div className="container">
        <div className="col-lg-6 mb-4">
          <div className="card">
            <div>Add Edit Friend</div>
            <form>
              <div>
                <label htmlFor="title" className="form-label title">
                  Title:
                </label>
                <input
                  type="text"
                  name="title"
                  id="title"
                  placeholder="title"
                  value={addEditData.title}
                  onChange={onAddEditDataChange}
                />
              </div>
              <div>
                <label htmlFor="bio" className="form-label bio">
                  bio:
                </label>
                <input
                  type="text"
                  name="bio"
                  id="bio"
                  placeholder="bio"
                  value={addEditData.bio}
                  onChange={onAddEditDataChange}
                />
              </div>
              <div>
                <label htmlFor="summary" className="form-label summary">
                  summary:
                </label>
                <input
                  type="text"
                  name="summary"
                  id="summary"
                  placeholder="summary"
                  value={addEditData.summary}
                  onChange={onAddEditDataChange}
                />
              </div>
              <div>
                <label htmlFor="headline" className="form-label headline">
                  headline:
                </label>
                <input
                  type="text"
                  name="headline"
                  id="headline"
                  placeholder="headline"
                  value={addEditData.headline}
                  onChange={onAddEditDataChange}
                />
              </div>
              <div>
                <label htmlFor="slug" className="form-label slug">
                  slug:
                </label>
                <input
                  type="text"
                  name="slug"
                  id="slug"
                  placeholder="slug"
                  value={addEditData.slug}
                  onChange={onAddEditDataChange}
                />
              </div>

              <div>
                <label htmlFor="statusId" className="form-label statusId">
                  statusId:
                </label>
                <input
                  type="text"
                  name="statusId"
                  id="statusId"
                  placeholder="Active / Inactive"
                  value={addEditData.statusId}
                  onChange={onAddEditDataChange}
                />
              </div>

              <div>
                <label
                  htmlFor="primaryImage"
                  className="form-label primaryImage"
                >
                  primaryImage:
                </label>
                <input
                  type="text"
                  name="primaryImage"
                  id="primaryImage"
                  placeholder="image Url"
                  value={addEditData.primaryImage.imagerUrl}
                  onChange={onAddEditDataChange}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary"
                onClick={onAddOrEditSubmitClick}
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
/*
Notes
 friendIdFrmUrl value will be the value of the "friendIdFrmUrl" parameter in the URL

so i actually had to pass an if statement to check is there was a payload

The ? is called the "optional chaining" operator in JavaScript. It allows
 you to access nested properties of an object without causing an error if
  any of the properties in the chain are undefined or null.

In the case of if(state?.payload), it is checking if the state object has
 a payload property that is not undefined or null. If state is null or undefined,
  the expression will evaluate to undefined. If state has a payload property,
   the expression will evaluate to the value of the payload property.

Without the optional chaining operator, accessing a property of an undefined
 or null object would result in a TypeError. Using the optional chaining
  operator helps to avoid these errors and makes your code more robust.

 difference between prevState and ...prevState is that prevState refers to the
  previous state object, while ...prevState creates a shallow copy of the current
   state object that can be modified to create a new state object.


 useLocation() returns the current location object, which contains information about
  the current URL path, search parameters, and hash. It does not directly pass state
   to other components, but it can be used to extract data from the URL and pass it as
    props to child components.

useParams() is used to extract dynamic parameters from the URL, such as IDs or usernames
. It returns an object containing key/value pairs of the parameters. It does not
 directly pass state to other components, but it can be used to extract dynamic data
  from the URL and pass it as props to child components.

useNavigate() returns a function that allows you to programmatically navigate between
 different pages or views in your application. It does not directly pass state to other
  components, but it can be used to change the URL and trigger a re-render of the components.

summary, useLocation(), useParams(), and useNavigate() are all related to managing 
routing and navigation in a React application, but they serve different purposes and do
 not directly pass state to other components. However, they can be used together to
  extract dynamic data from the URL and navigate between different pages or views based on that data.  

*/
