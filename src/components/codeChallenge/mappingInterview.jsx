import React, { useEffect, useState } from "react";
import MappingChild from "./mappingChild";
import userService from "../../services/userService";

function Mapping(){
    const [array] = useState({  
        carsArray:[],
        carsComponent:[]})

    useEffect(()=>{
        userService
        .showJobs()
        .then(onShowJobsSuccess)
        .catch(onShowJobsError);
    })

    const onShowJobsSuccess =(response)=>{
        console.log("success is firing", response);

    }

    const onShowJobsError =(response)=>{
        console.warn({ error: response });
        console.log("success is firing", response);
    }
    

   

    const mappingChildFx=(myArry)=>{
        <MappingChild
        carsArr={myArry}
        />
    }
    console.log(mappingChildFx);

    return(
        <React.Fragment>
            <div>mapping</div>
            {array}
        </React.Fragment>
        
    )
}

export default Mapping