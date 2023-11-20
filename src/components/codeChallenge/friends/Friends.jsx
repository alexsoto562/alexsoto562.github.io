import React, { useState, useEffect, useCallback } from "react";
import userService from "../../../services/userService";
import toastr from "toastr";
import Person from "./Person";
import { Link } from "react-router-dom";
import "rc-pagination/assets/index.css";
import Pagination from "rc-pagination";
// import { locale } from "rc-pagination";
//locale

function Friends() {
  const [pageData, setPageData] = useState({
    friendArr: [],
    peopleComponents: [],
    index: 1,
    size: 5,
    pageTotal: 0,

  });
 
  const [toggle, setToggle] = useState(true);
  const [inputFriendSeachVal, setInputFriendSeachVal] = useState("");

  useEffect(() => {
    userService
      .getFriends(pageData.index - 1, pageData.size)
      .then(onGetFriendsSuccess)
      .catch(onGetFriendsError);

  }, [pageData.index]);

  
  const onGetFriendsSuccess = (response) => {
    // console.log("testing friends->", response);
    var responseFriendsArray = response.data.item.pagedItems;
    // console.log("all friends array->", responseFriendsArray);
    toastr.success("Success");
    setPageData((prevState) => {
      const pd = { ...prevState };
      pd.friendArr = responseFriendsArray;
      //pd of the friendArr is going to be my array from response Friends Array
      pd.peopleComponents = responseFriendsArray.map(mapFriends);
      pd.pageTotal =  response.data.item.totalCount;
      //pd of peopleComponents is m array map and mapFriends is whats mapping
      return pd;
    });
   
  };
  //we are getting our previous state and we are mapping it everytime there is a change

  const onGetFriendsError = (response) => {
    console.warn({ error: response });
    console.log("error is firing");
  };


  const onPageChange = (numberOfPage) => {
    console.log("tesing page   >", numberOfPage);
    
    setPageData( prevState => {
     const  pd = {...prevState}
      pd.index = numberOfPage;
      return pd;
    });
  };  


  const showFriends = (e) => {
    console.log("showFriends was clicked");
    e.preventDefault();
    setToggle(!toggle);
  };
  //button to show our friends and connects to state on top

  const onDeleteRequest = useCallback((myPerson, obj) => {
    console.log("onDeleteRequest->", { myPerson, obj });
    console.log("ID of friend->", myPerson.id);
    // var idOfDelete = myPerson.id
    // const handler = getDeleteSuccessHandler(myPerson.id)
    userService
      .deleteById(myPerson.id)
      .then(onDeleteSucces)
      .catch(onDeleteError);
  }, []);
  //the above is getting the id from each card

  //---------------------------------------------------------
  //the function below is get the id success handler
  //if i want this to work i need to pass const hander
  //into the .then()
  // const getDeleteSuccessHandler=(idOfDelete)=>{
  //   return ()=>{
  //     console.log("getDeleteSuccessHandler->");
  //     setPageData((prevState) => {
  //       const pd = { ...prevState };
  //       pd.friendArr = [...pd.friendArr];
  //       const idxOf = pd.friendArr.findIndex((person) => {
  //         let result = false;
  //         if (person.id === idOfDelete) {
  //           result = true;
  //         }
  //         return result;
  //       });
  //       if (idxOf > 0) {
  //         pd.friendArr.splice(idxOf, 1);
  //         pd.peopleComponents = pd.friendArr.map(mapFriends);
  //       }
  //       return pd;
  //     });
  //   }
  // }
  //--------------------------------------------------------------

  const onDeleteSucces = (idOfDelete) => {
    console.log("onDeleteSucces", idOfDelete);
    setPageData((prevState) => {
      const pd = { ...prevState };
      pd.friendArr = [...pd.friendArr];

      const idxOf = pd.friendArr.findIndex((person) => {
        let result = false;

        if (person.id === idOfDelete) {
          result = true;
        }
        return result;
      });

      if (idxOf > 0) {
        pd.friendArr.splice(idxOf, 1);
        pd.peopleComponents = pd.friendArr.map(mapFriends);
      }

      return pd;
    });
  };

  const onDeleteError = (response) => {
    console.warn({ error: response });
    console.log("onDeleteError is firing");
  };

  const mapFriends = (aFriend) => {
    console.log("mapping fx->", aFriend);
    return (
      <Person
        person={aFriend}
        key={"ListA-" + aFriend.id}
        onClick={onDeleteRequest}
      />
    );
  };

  const searchFriendButton = (e) => {
    e.preventDefault();
    console.log("searchButton was clicked", inputFriendSeachVal);
    userService
      .search(inputFriendSeachVal)
      .then(searchFriendButtonSuccess)
      .catch(searchFriendButtonError);
  };

  const searchFriendButtonSuccess = (response) => {
    let pagedItems = response.data.item.pagedItems;
    console.log("onSearchButtonSuccess is firing", response);
    console.log("array of searched Friends->", pagedItems);

    setPageData((prevState) => {
      //prev state is my original pageData
      const pd = { ...prevState };
      pd.friendArr = pagedItems;
      //vanilla js array
      pd.peopleComponents = pagedItems.map(mapFriends);
      //making it into an array to actually map
      return pd;
    });
  };

  const searchFriendVal = (event) => {
    console.log("event.target.value", event.target.value);
    setInputFriendSeachVal(event.target.value);
  };

  const searchFriendButtonError = (response) => {
    console.warn({ error: response });
    console.log("onSearchButtonError is firing");
  };

 

  return (
    <React.Fragment>
      <form>
        <div className="container">
          <button
            type="submit"
            className="btn btn-primary"
            onClick={showFriends}
          >
            Show Friends
          </button>

          <Link to="/AddEditFriend" type="button" className="btn btn-success">
            Add Friends
          </Link>

          <div>
            <label htmlFor="searchFriend" className="form-label searchFriend">
              Search for Friend:
            </label>
            <input
              type="searchFriend"
              name="searchFriend"
              id="searchFriend"
              placeholder="Search Friend"
              onChange={searchFriendVal}
              // value={setInputSearchVal}
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary"
            onClick={searchFriendButton}
          >
            Search Friend
          </button>

          <Pagination
          onChange={onPageChange}
          current={pageData.index}
          total={pageData.pageTotal}
          pageSize={pageData.size}
          className="p-4 mx-auto"
        />
          <div className="row">{toggle && pageData.peopleComponents}</div>
        </div>

      
      </form>
    </React.Fragment>
  );
}
export default Friends;
/*
NOTES 



*/
