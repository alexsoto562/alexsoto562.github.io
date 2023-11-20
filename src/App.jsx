import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMe from "./AboutMeWebsite/AboutMe";
import AboutMeNav from "./AboutMeWebsite/AboutMeNav";
import Projects from "./AboutMeWebsite/Projects"
import Contact from "./AboutMeWebsite/Contact"
import Home from "./AboutMeWebsite/Home";
import "./AboutMeWebsite/AboutMeNav.css";
import TrainingVideoApp from "./TrainingVideo/TrainingVideoApp";
import HelpAndSupportMain from "./HelpAndSupportPage/HelpAndSupportMain"



function App() {
  return (
    <React.Fragment>
      <AboutMeNav />
      <Routes>
        <Route path="/home" element={<Home/>}></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/projects" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
        <Route path="/projects/trainingvideo" element={<TrainingVideoApp/>}></Route>
        <Route path="/projects/helpandsupport" element={<HelpAndSupportMain/>}></Route>
      </Routes>
    </React.Fragment>
  );
}
export default App;