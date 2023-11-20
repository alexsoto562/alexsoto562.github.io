import React, { useEffect, useState } from "react";
import userService from "../../../services/userService";
import JobMap from "./JobMap"

function Jobs() {
  const [pageData, setPageData] = useState({
    jobsArray: [],
    jobsComponents: []
  });
  // console.log("pageData.jobsArray",pageData.jobsArray);

  const onShowJobsSuccess = (response) => {
    console.log("what is response", response);
    let pagedItems = response.data.item.pagedItems;
    console.log("jobsArray", pagedItems);
    setPageData((prevState) => {
      const pd = { ...prevState };
      pd.jobsArray = pagedItems;
      pd.jobsComponents = pd.jobsArray.map(mapJobs);
      console.log("testing pd.jobsArray", pageData);
      return pd;
    });
  };

  const onShowJobsError = (response) => {
    console.warn({ error: response });
    console.log("onShowJobsError is firing");
  };

  const mapJobs = (aJob) => {
    return (
      <JobMap
      jobData={aJob}
      key={"listA-" + aJob.id}
      />
      // <JobCard jobData={aJob}/>
      )
    // console.log("mapJobs fx", aJob);
    // console.log("aJob.title",aJob.title);
  };

  useEffect(() => {
    userService.showJobs().then(onShowJobsSuccess).catch(onShowJobsError);
  }, []);

 

  return (
    <React.Fragment>
      <div>Jobs</div>
      {pageData.jobsComponents}
    </React.Fragment>
  );
}
export default Jobs;
/*
NOTES 
there is not image spot on jobs - do i add a random picture
you cant add an image though 
wouldnt i have to change state in order to add an image
where am i getting this response from its different from the picture 

top left add jobs buttons

top right search jobs input text 

top right right search button 

3 cards on view 

card
img 
position 
location
buttons: delete, edit, view more
card 

pagination 

create a new file
to send the information
i need to pass keys 
maybe on click 



*/
