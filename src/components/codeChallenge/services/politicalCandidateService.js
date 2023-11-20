import axios from "axios";

var entitiesService = {
    endpoint: "https://api.remotebootcamp.dev/api/entities/politicalCandidates"
}

let add=(payload)=>
{
    console.log("entitiesService.add is firing")
    const config={
        method: "POST",
        url:entitiesService.endpoint,
        data: payload,
        crossdomain: true,
        headers:{"Content-Type":"application/json"}
    };
    return axios(config).then((response)=>{
        payload.id = response.data.item;
        return payload
    })
};

let getAll = () =>
{
    console.log("getAll is firing")
    const config = {
        method: "GET",
        url: entitiesService.endpoint,
        crossDomain: true,
        headers: { "Content-Type":"application/json" },
    };
    return axios(config)
};

const userService = {add,getAll}

export default userService