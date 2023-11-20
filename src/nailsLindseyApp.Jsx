import React from "react";
import { Route, Routes } from "react-router-dom";
import AboutMeNav from "./nailsByLindsey/aboutMeNav";
import AboutMe from "./nailsByLindsey/aboutMe";
import Projects from "./nailsByLindsey/projects";
import Contact from "./nailsByLindsey/contact";
import "./nailsByLindsey/designaboutme.css"


function App() {
  return (
    <React.Fragment>
      <AboutMeNav />
      <Routes>
        <Route path="/home"></Route>
        <Route path="/aboutme" element={<AboutMe />}></Route>
        <Route path="/nails" element={<Projects/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </React.Fragment>
  );
}
export default App;