import axios from "axios";
var entitiesService = {
    endpoint: "https://api.remotebootcamp.dev/api/entities/Schools"
}

const getSchools = () =>
{
    // console.log("entitiesService.getSchools is firing")
    const config = {
        method: "GET",
        url: entitiesService.endpoint,
        crossDomain: true,
        headers: { "Content-Type":"application/json" },
    };
    return axios(config)
};

let add = (payload) => {
    // console.log("entitiesService.add is firing");
    const config = {
      method: "POST",
      url: entitiesService.endpoint,
      data: payload,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
    return axios(config).then((response) => {
      return { id: response.data.item, ...payload };
    });
  };

  let update = (id, payload) => {
    // console.log("formsService.update is firing");
    const config = {
      method: "PUT",
      data: payload,
      url: `${entitiesService.endpoint}/${id}`,
      crossdomain: true,
      headers: { "Content-Type": "application/json" },
    };
    return axios(config).then(({ data }) => ({
      updateData: { ...payload },
      id: data.id,
    }));
  };

  let deleteById = (personId) => {
    // console.log("formsServiceFriends.deleteById", personId);
    const config = {
      method: "DELETE",
      url: `${entitiesService.endpoint}/${personId}`,
      crossDomain: true,
      headers: { "Content-Type": "application/json" },
    };
    return axios(config).then(() => {
      return personId;
    });
  };


const schoolService = {
    getSchools, add, update, deleteById
}

export default schoolService