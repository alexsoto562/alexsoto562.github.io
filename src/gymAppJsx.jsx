import React from "react";
import { Routes, Route } from "react-router-dom";
import SchoolSiteNav from "./components/codeChallenge/reactFinal/SchoolsSiteNav"
import Schools from "./components/codeChallenge/reactFinal/Schools"
import SchoolsAddEdit from "./components/codeChallenge/reactFinal/SchoolsAddEdit"
import SchoolMapping from "./components/codeChallenge/reactFinal/SchoolMapping"
import Basic from "./Basic"
import VideoPlayer from "./components/codeChallenge/testingVideoPlayer/VideoPlayer";
import GymApp from "./gymApp/GymMain"
// import InterviewMapping from "./components/codeChallenge/mappingInterview";
// import schoolService from "./services/schoolService"
import debug from "sabio-debug";
import ChestDay from "./gymApp/ChestDay";
import ArmDay from "./gymApp/ArmsDay";
import Backday from "./gymApp/BackDay";
import LegDay from "./gymApp/LegDay";
import GymSignIn from "./gymApp/gymSignIn";
import AdminDashboard from "./components/adminDashboard/AdminDashboard";
const _logger = debug.extend("App");
const _loggerPage = _logger.extend("SPA");

function App(){
  _logger("tesing _logger")
  _loggerPage("testing _loggerPage")
  return(
    <React.Fragment>
      <SchoolSiteNav></SchoolSiteNav>
      <Routes>
        <Route path="/Schools" element={<Schools/>}></Route>
        <Route path="/Basic" element={<Basic/>}></Route>
        <Route path="/SchoolsAddEdit" element={<SchoolsAddEdit/>}></Route>
        <Route path="/SchoolMapping" element={<SchoolMapping/>}></Route>
        {/* <Route path="/InterviewMapping" element={<InterviewMapping/>}></Route> */}
        <Route path="/VideoPlayer" element={<VideoPlayer/>}></Route>
        <Route path="/GymApp" element={<GymApp/>}></Route>
        <Route path="/chestday" element={<ChestDay/>}></Route>
        <Route path="/armsday" element={<ArmDay/>}></Route>
        <Route path="/backday" element={<Backday/>}></Route>
        <Route path="/legday" element={<LegDay/>}></Route>
        <Route path="/gymSignIn" element={<GymSignIn/>}></Route>        
        <Route path="/AdminDashboard" element={<AdminDashboard/>}></Route>
      </Routes>
    </React.Fragment>
    
  )
}

export default App;