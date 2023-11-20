import React, { useCallback, useEffect, useState } from "react";
import schoolService from "../../../services/schoolService";
import SchoolMapping from "./SchoolMapping";

function Schools() {
  const [pageData, setPageData] = useState({
    schoolsArray: [],
    schoolsComponents: [],
  });
  // console.log("pageData", pageData);

  useEffect(() => {
    schoolService
    .getSchools()
    .then(onGetSchoolSuccess)
    .catch(onGetSchoolError);
  }, []);

  const onGetSchoolSuccess = (response) => {
    // console.log("response->", response);
    let responseSchoolsArray = response.data.items;
    // console.log("school array->", responseSchoolsArray);

    setPageData((prevState) => {
      const pd = { ...prevState };
      pd.schoolsArray = responseSchoolsArray;
      pd.schoolsComponents = responseSchoolsArray.map(mapSchools);
      return pd;
    });
  };

  const onGetSchoolError = (response) => {
    console.warn({ error: response });
    console.log("error is firing");
  };

  const onDeleteRequest = useCallback((mySchool, schoolObject)=>{
    console.log('onDeleteRequest' , {mySchool, schoolObject});
    console.log('ID of school->', mySchool.id);
    schoolService
    .deleteById(mySchool.id)
    .then(onDeleteSuccess)
    .catch(onDeleteError)
  },[])

  const onDeleteSuccess = (idOfSchool)=>{
    console.log("onDelete Success" , idOfSchool);
    setPageData((prevState)=>{
        const pd = {...prevState}
        pd.schoolsArray = [...pd.schoolsArray];

        const idxOf = pd.schoolsArray.findIndex((school)=>{
            let result = false;

            if (school.id === idOfSchool) {
                result = true;
            }
            return result;
        });
        if (idxOf > 0) {
            pd.schoolsArray.splice(idxOf, 1);
            pd.schoolsComponents = pd.schoolsArray.map(mapSchools);
        }
        return pd
    });
  };

  const onDeleteError = (response) => {
    console.warn({ error: response });
    console.log("onDeleteError is firing");
  };

  const mapSchools = (aSchool) => {
    console.log("mapping fx->", aSchool);
    return (
    <SchoolMapping 
    school={aSchool} 
    key={"ListA-" + aSchool.id} 
    onClick={onDeleteRequest}
    />
    );
  };

  return (
    <React.Fragment>
      <div> Schools</div>
      {pageData.schoolsComponents}
    </React.Fragment>
  );
}

export default Schools;