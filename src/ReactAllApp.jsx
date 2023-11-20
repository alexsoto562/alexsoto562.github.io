import React, { useState, useEffect } from "react";
import "./App.css";
import SiteNav from "./components/codeChallenge/SiteNav";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/codeChallenge/Footer";

import Home from "./components/codeChallenge/Home";
import Events from "./components/codeChallenge/events/Events";
import Friends from "./components/codeChallenge/friends/Friends";
import Jobs from "./components/codeChallenge/jobs/Jobs";
import Companies from "./components/codeChallenge/techcompanies/Companies";
import Login from "./components/codeChallenge/user/LogIn";
import Register from "./components/codeChallenge/user/Register";
import TestAndAjax from "./components/codeChallenge/TestAndAjax";
import AddEditFriend from "./components/codeChallenge/friends/AddEditFriend";
// import PoliticalCandidate from"./components/codeChallenge/PoliticalCandidates";
// import PoliticalCandidateCard from "./components/codeChallenge/PoliticalCandidateCard";
import Cars from "./components/codeChallenge/Cars";
import userService from "./services/userService";

function App() {
  const [currentUser, setCurrentUser] = useState({
    firstName: "",
    lastName: "",
    avatarUrl:"",
    isLoggedIn: false,
  });

  const onGetCurrentUserSuccess = (response) => {
    // console.log("response for currentUser->", response);
    let userId = response.data.item.id;
    // console.log("this is current userId", userId);
    // onGetById(userId);
    userService.getById(userId).then(onGetbyIdSuccess).catch(onGetbyIdError);
  };

  const onGetbyIdSuccess = (response) => {
    // console.log("onGetbyIdSuccess response->", response);
    setCurrentUser((prevState) => {
      const newState = { ...prevState };
      newState.firstName = response.data.item.firstName;
      newState.lastName = response.data.item.lastName;
      newState.avatarUrl = response.data.item.avatarUrl
      newState.isLoggedIn = true;
      return newState;
    });
  };

  const onGetbyIdError = (response) => {
    console.warn({ error: response });
    console.log("onGetbyIdError is firing");
  };

  const onGetCurrentUserError = (response) => {
    console.warn({ error: response });
    console.log("onGetCurrentUserError is firing");
    setCurrentUser((prevState)=>{
      let currentUser = {...prevState}
      // currentUser.isLoggedIn = !response.data.isSuccessful
      currentUser.firstName ="please"
      currentUser.lastName = 'log in'
      currentUser.avatarUrl = ""
      return currentUser

    })
    
  };

  useEffect(() => {
    userService
      .currentUser()
      .then(onGetCurrentUserSuccess)
      .catch(onGetCurrentUserError);
  }, [currentUser.isLoggedIn]);
  
  
  const stateOnLogout = (response)=>{
        console.log(response);

        setCurrentUser((prevState)=>{
          let currentUser = {...prevState}
          currentUser.isLoggedIn = !response.data.isSuccessful
          // currentUser.firstName ="Hello"
          // currentUser.lastName = 'Goodbye'
          return currentUser
        })
  }

  return (
    <React.Fragment>
      <SiteNav
      logoutHandler = {stateOnLogout}
        user={currentUser}
      ></SiteNav>
      <Routes>
        <Route path="/" element={<Home user={currentUser} />}></Route>
        <Route path="/Events" element={<Events />}></Route>
        <Route path="/Friends" element={<Friends />}></Route>
        <Route path="/friends/new" element={<AddEditFriend />}></Route>
        <Route path="/friends/:id" element={<AddEditFriend />}></Route>
        <Route path="/Jobs" element={<Jobs />}></Route>
        <Route path="/Companies" element={<Companies />}></Route>
        <Route path="/Login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
        <Route path="/TestAndAjax" element={<TestAndAjax />}></Route>
        <Route path="/Footer" element={<Footer />}></Route>
        <Route path="/AddEditFriend" element={<AddEditFriend />}></Route>
        {/* <Route path="/PoliticalCandidates" element={<PoliticalCandidate />}></Route> */}
        {/* <Route path="/PoliticalCandidateCard" element={<PoliticalCandidateCard />}></Route> */}
        <Route path="/cars" element={<Cars />}></Route>
      </Routes>
      <Footer></Footer>
    </React.Fragment>
  );
}
export default App;
/*
NOTES


*/